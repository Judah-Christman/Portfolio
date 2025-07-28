// app/api/upload/route.ts
export const runtime = "nodejs"; // <-- important

import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY! // Server side only
);

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const file = formData.get("file");

    if (!file || !(file instanceof Blob)) {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }

    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const fileName = `${Date.now()}_${file.name}`;

    const { data, error } = await supabase.storage
      .from("images")
      .upload(fileName, buffer, {
        contentType: file.type,
        upsert: false,
      });

    if (error) {
      console.error("Upload error:", error.message);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    const { publicUrl } = supabase.storage
      .from("images")
      .getPublicUrl(fileName);

    return NextResponse.json({ publicUrl });
  } catch (err) {
    console.error("Unexpected error:", err);
    return NextResponse.json({ error: "Upload failed" }, { status: 500 });
  }
}



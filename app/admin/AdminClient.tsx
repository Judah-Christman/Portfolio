"use client";
import { signOut } from "next-auth/react";
import { useState, FormEvent } from "react";
import { supabase } from "@/lib/supabaseClient";
import { Filter } from "bad-words";
import Link from "next/link";

const filter = new Filter();

interface Props {
  user?: {
    id?: string;
    name?: string | null;
    email?: string | null;
  };
}

export default function AdminClient({ user }: Props) {
  const [project, setProject] = useState<{ id: string; name: string }[]>([]);
  const [newImage, setNewImage] = useState<File | null>(null);
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [newTool, setNewTool] = useState("");
  const [preview, setPreview] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // Basic validation
    if (!newTitle.trim()) {
      alert("Please enter a title.");
      return;
    } else if (!newDescription.trim()) {
      alert("Please enter a description.");
      return;
    } else if (!newTool.trim()) {
      alert("Please enter tool(s).");
      return;
    }

    // Profanity check
    if (filter.isProfane(newTitle) || filter.isProfane(newDescription)) {
      alert("Please avoid using inappropriate language.");
      return;
    }

    let uploadedFileName = "";
    if (newImage) {
      const formData = new FormData();
      formData.append("file", newImage);

      const uploadRes = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      const uploadData = await uploadRes.json();
      if (!uploadRes.ok) {
        alert("Failed to upload image.");
        console.error(uploadData);
        return;
      }
      uploadedFileName = uploadData.fileName;
    }

    // Insert project into Supabase
    const { data, error } = await supabase
      .from("website")
      .insert([
        {
          image: uploadedFileName, // store only filename
          title: newTitle,
          description: newDescription,
          tools: newTool,
        },
      ])
      .select();

    if (error) {
      console.error("Insert error:", error);
      alert("Failed to save. Try again.");
    } else {
      setNewTitle("");
      setNewImage(null);
      setNewDescription("");
      setNewTool("");
      setPreview(null);
      if (data && data.length > 0) {
        setProject([data[0], ...project]);
      }
    }
  }

  function handleFileChange(file: File | null) {
    setNewImage(file);
    if (file) {
      const previewURL = URL.createObjectURL(file);
      setPreview(previewURL);
    } else {
      setPreview(null);
    }
  }

  return (
    <main className="pt-20 px-5 min-h-dvh">
      <h1 className="text-green-400 text-5xl">Admin Dashboard</h1>
      {user?.name ? (
        <p className="text-[#fafafa]">Signed in as {user.name}</p>
      ) : null}
      <button
        className="block fixed top-5 right-5 z-50 bg-red-400 p-2 text-[#fafafa] rounded"
        onClick={() => signOut({ callbackUrl: "/" })}
      >
        Sign Out
      </button>

      <div className="w-full min-h-dvh">
        <h1 className="w-full text-5xl text-center text-[#fafafa]">
          Website Card Creator
        </h1>
        <div className="w-full flex flex-col my-auto">
          <form
            onSubmit={handleSubmit}
            className="w-full md:w-1/3 bg-black mx-auto my-10 flex flex-col rounded-xl p-2"
          >
            <input
              type="text"
              placeholder="Enter Title"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              className="w-full p-2 my-2 rounded bg-[#fafafa]"
            />

            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleFileChange(e.target.files?.[0] || null)}
              className="w-full p-2 my-2 rounded bg-[#fafafa]"
            />
            {preview && (
              <img
                src={preview}
                alt="Preview"
                className="w-full h-auto my-2 rounded"
              />
            )}

            <textarea
              placeholder="Enter Description"
              value={newDescription}
              onChange={(e) => setNewDescription(e.target.value)}
              className="w-full p-2 my-2 rounded bg-[#fafafa]"
            />

            <input
              type="text"
              placeholder="Enter Tools"
              value={newTool}
              onChange={(e) => setNewTool(e.target.value)}
              className="w-full p-2 my-2 rounded bg-[#fafafa]"
            />

            <button
              type="submit"
              className="block w-1/3 rounded-xl mx-auto my-5 bg-green-300/60 text-center text-[#fafafa] text-2xl"
            >
              Submit
            </button>
          </form>
        </div>
        <Link href="./" className="block w-full text-center text-red-400 underline">
          back
        </Link>
      </div>
    </main>
  );
}


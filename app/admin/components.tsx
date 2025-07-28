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

export function WebsiteCardCreator({ user }: Props) {
  const [project, setProject] = useState<any[]>([]);
  const [newImage, setNewImage] = useState<File | null>(null);
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [newTool, setNewTool] = useState("");
  const [newLink, setNewLink] = useState("");
  const [preview, setPreview] = useState<string | null>(null);

  function handleFileChange(file: File | null) {
    if (file) {
      setNewImage(file);
      setPreview(URL.createObjectURL(file));
    } else {
      setNewImage(null);
      setPreview(null);
    }
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!newTitle.trim() || !newDescription.trim() || !newTool.trim()) {
      alert("Please fill in all fields.");
      return;
    }

    if (filter.isProfane(newTitle) || filter.isProfane(newDescription)) {
      alert("Please avoid inappropriate language.");
      return;
    }

    let uploadedFilePath = "";

    if (newImage) {
      const fileExt = newImage.name.split(".").pop();
      const fileName = `${Date.now()}.${fileExt}`;
      const filePath = `${fileName}`;

      console.log("Uploading file to Supabase at path:", filePath);

      const { error: uploadError } = await supabase.storage
        .from("images")
        .upload(filePath, newImage, {
          cacheControl: "3600",
          upsert: true, // allow overwriting for testing
        });

      if (uploadError) {
        console.error("Supabase upload error:", uploadError.message);
        alert("Image upload failed: " + uploadError.message);
        return;
      }

      console.log("Upload succeeded!");
      uploadedFilePath = filePath;
    }

    // Insert metadata into your 'website' table
    const { data, error } = await supabase
      .from("website")
      .insert([
        {
          image: uploadedFilePath,
          title: newTitle,
          description: newDescription,
          tools: newTool,
          link: newLink,
        },
      ])
      .select();

    if (error) {
      console.error("Insert error:", error.message);
      alert("Failed to save metadata: " + error.message);
    } else {
      // Reset form
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

  return (
    <main className="pt-20 px-5 min-h-dvh">
      <h1 className="text-green-400 text-5xl">Admin Dashboard</h1>
      {user?.name && (
        <p className="text-[#fafafa]">Signed in as {user.name}</p>
      )}
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
            className="mb-2"
          />

          {preview && (
            <img
              src={preview}
              alt="Preview"
              className="w-32 h-32 object-contain mb-4 mx-auto rounded"
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
          <input
            type="text"
            placeholder="Enter URL"
            value={newLink}
            onChange={(e) => setNewLink(e.target.value)}
            className="w-full p-2 my-2 rounded bg-[#fafafa]"
          />

          <button
            type="submit"
            className="block w-1/3 rounded-xl mx-auto my-5 bg-green-300/60 text-center text-[#fafafa] text-2xl"
          >
            Submit
          </button>
        </form>

        <Link href="./" className="block w-full text-center text-red-400 underline">
          back
        </Link>
      </div>
    </main>
  );
}

export function WebAppCardCreator({ user }: Props) {
  const [project, setProject] = useState<any[]>([]);
  const [newImage, setNewImage] = useState<File | null>(null);
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [newTool, setNewTool] = useState("");
  const [newLink, setNewLink] = useState("");
  const [preview, setPreview] = useState<string | null>(null);

  function handleFileChange(file: File | null) {
    if (file) {
      setNewImage(file);
      setPreview(URL.createObjectURL(file));
    } else {
      setNewImage(null);
      setPreview(null);
    }
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!newTitle.trim() || !newDescription.trim() || !newTool.trim()) {
      alert("Please fill in all fields.");
      return;
    }

    if (filter.isProfane(newTitle) || filter.isProfane(newDescription)) {
      alert("Please avoid inappropriate language.");
      return;
    }

    let uploadedFilePath = "";

    if (newImage) {
      const fileExt = newImage.name.split(".").pop();
      const fileName = `${Date.now()}.${fileExt}`;
      const filePath = `${fileName}`;

      console.log("Uploading file to Supabase at path:", filePath);

      const { error: uploadError } = await supabase.storage
        .from("images")
        .upload(filePath, newImage, {
          cacheControl: "3600",
          upsert: true, // allow overwriting for testing
        });

      if (uploadError) {
        console.error("Supabase upload error:", uploadError.message);
        alert("Image upload failed: " + uploadError.message);
        return;
      }

      console.log("Upload succeeded!");
      uploadedFilePath = filePath;
    }

    // Insert metadata into your 'website' table
    const { data, error } = await supabase
      .from("webapp")
      .insert([
        {
          image: uploadedFilePath,
          title: newTitle,
          description: newDescription,
          tools: newTool,
          link: newLink,
        },
      ])
      .select();

    if (error) {
      console.error("Insert error:", error.message);
      alert("Failed to save metadata: " + error.message);
    } else {
      // Reset form
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

  return (
    <main className="pt-20 px-5 min-h-dvh">
      <h1 className="text-green-400 text-5xl">Admin Dashboard</h1>
      {user?.name && (
        <p className="text-[#fafafa]">Signed in as {user.name}</p>
      )}
      <button
        className="block fixed top-5 right-5 z-50 bg-red-400 p-2 text-[#fafafa] rounded"
        onClick={() => signOut({ callbackUrl: "/" })}
      >
        Sign Out
      </button>

      <div className="w-full min-h-dvh">
        <h1 className="w-full text-5xl text-center text-[#fafafa]">
          Web App Card Creator
        </h1>
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
            className="mb-2"
          />

          {preview && (
            <img
              src={preview}
              alt="Preview"
              className="w-32 h-32 object-contain mb-4 mx-auto rounded"
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
          <input
            type="text"
            placeholder="Enter URL"
            value={newLink}
            onChange={(e) => setNewLink(e.target.value)}
            className="w-full p-2 my-2 rounded bg-[#fafafa]"
          />

          <button
            type="submit"
            className="block w-1/3 rounded-xl mx-auto my-5 bg-green-300/60 text-center text-[#fafafa] text-2xl"
          >
            Submit
          </button>
        </form>

        <Link href="./" className="block w-full text-center text-red-400 underline">
          back
        </Link>
      </div>
    </main>
  );
}
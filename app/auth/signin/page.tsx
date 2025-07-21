// app/auth/signin/page.tsx
"use client";

import { FormEvent, useState } from "react";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";

export default function SignInPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/admin";

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);

    const res = await signIn("credentials", {
      redirect: false, // We'll route manually so we can show errors
      username,
      password,
      callbackUrl,
    });

    if (res?.error) {
      setError("Invalid username or password.");
      return;
    }

    // If successful, NextAuth gives us a URL to go to
    // Using window.location.assign to trigger full redirect
    window.location.assign(res?.url || callbackUrl);
  }

  return (
    <main className="min-h-dvh pt-20">
      <h1 className="text-5xl text-green-400 text-center">Sign In</h1>
      <form onSubmit={handleSubmit} className="w-1/4 mx-auto bg-green-400 flex flex-col p-2 my-20 rounded-xl">
        <label className="mx-auto my-5">
          <span className="p-1">Username</span>
          <input
            className="p-1"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </label>
        <label className="mx-auto my-5">
          <span className="p-1">Password</span>
          <input
            className="p-1"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <button className="p-2 bg-green-900 rounded text-[#fafafa]" type="submit">Sign In</button>
      </form>
      {error ? (
        <p style={{ color: "red" }}>{error}</p>
      ) : null}
    </main>
  );
}
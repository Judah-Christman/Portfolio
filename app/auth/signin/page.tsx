// app/auth/signin/page.tsx
"use client";
import { FormEvent, useState, Suspense } from "react";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import AuthSigninClient from '@/components/AuthSigninClient';

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
    <div className="min-h-dvh pt-20">
      <Suspense fallback={<div>Loading sign in...</div>}>
        <AuthSigninClient />
      </Suspense>
    </div>
  );
}
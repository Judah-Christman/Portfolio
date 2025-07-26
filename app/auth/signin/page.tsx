// app/auth/signin/page.tsx
"use client";
import { FormEvent, useState, Suspense } from "react";
import AuthSigninClient from '@/components/AuthSigninClient';

export default function SignInPage() {

  return (
    <div className="min-h-dvh pt-20">
      <Suspense fallback={<div>Loading sign in...</div>}>
        <AuthSigninClient />
      </Suspense>
    </div>
  );
}
// components/AuthSigninClient.tsx
'use client';

import { useSearchParams } from 'next/navigation';
import { useState } from 'react';

export default function AuthSigninClient() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || '';

  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your sign-in logic here
    console.log({ email, callbackUrl });
  };

  return (
    <>
      <h1 className="text-5xl text-green-400 text-center">Sign In</h1>
      <form
        onSubmit={handleSubmit}
        className="w-1/4 mx-auto bg-green-400 flex flex-col p-2 my-20 rounded-xl"
      >
        <label className="mx-auto my-5">Email</label>
        <input
          type="email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
          className="p-2 rounded text-black"
        />
        <button
          type="submit"
          className="mt-4 p-2 bg-black text-white rounded hover:bg-gray-800"
        >
          Sign In
        </button>
      </form>
    </>
  );
}

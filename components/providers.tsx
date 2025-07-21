"use client";

import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

export function Providers({ children }: { children: ReactNode }) {
  // Not passing session prop -> SessionProvider will fetch session client-side.
  return <SessionProvider>{children}</SessionProvider>;
}
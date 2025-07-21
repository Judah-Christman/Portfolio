// lib/auth.ts
import type { NextAuthOptions, User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        // 🔒 Replace w/ real auth: DB lookup, hashed password, etc.
        if (
          credentials?.username === "admin" &&
          credentials?.password === "Mr. Fuzzy Bunny"
        ) {
          const user: User = {
            id: "1",
            name: "Admin",
            email: "admin@example.com",
          };
          return user;
        }
        return null; // Invalid login
      },
    }),
  ],
  session: {
    strategy: "jwt", // Simpler for starters; no DB session table needed
  },
  pages: {
    // NextAuth will redirect here on signIn() or auth errors
    signIn: "/auth/signin",
  },
  // You can add callbacks to include custom user data in the JWT/session
  callbacks: {
    async jwt({ token, user }) {
      // First time (on sign in) user is defined
      if (user) {
        token.user = {
          id: user.id,
          name: user.name,
          email: user.email,
        };
      }
      return token;
    },
    async session({ session, token }) {
      if (token?.user) {
        session.user = token.user as any;
      }
      return session;
    },
  },
};
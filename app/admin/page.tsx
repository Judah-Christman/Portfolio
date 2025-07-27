import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import AdminClient from "./AdminClient";

export default async function AdminPage() {
  const session = await getServerSession(authOptions);

  if (!session || !session.user) {
    redirect("/auth/signin?callbackUrl=/admin");
  }

  // Runtime safeguard to avoid undefined props
  const { id = "", name = "" } = session.user;

  return (
    <AdminClient
      user={{ id, name }}
    />
  );
}

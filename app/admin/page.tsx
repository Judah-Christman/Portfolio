import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import AdminClient from "./AdminClient";

export default async function AdminPage() {
  const session = await getServerSession(authOptions);

  if (!session || !session.user) {
    redirect("/auth/signin?callbackUrl=/admin");
  }

  
  const user = session.user as { id: string; name?: string };

  return <AdminClient user={user} />;
}

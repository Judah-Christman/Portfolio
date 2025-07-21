import { getSession, signOut } from "next-auth/react";

export default function Admin() {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <button onClick={() => signOut()}>Sign Out</button>
    </div>
  );
}

export async function getServerSideProps(context: any) {
  const session = await getSession(context); // Check if user is signed in
  if (!session) {
    return {
      redirect: {
        destination: "/auth/signin",
        permanent: false,
      },
    };
  }
  return {
    props: { session }, // Pass session to the page
  };
}

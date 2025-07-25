"use client";
import { signOut } from "next-auth/react";
import { useState, FormEvent } from "react";
import { supabase } from "@/lib/supabaseClient";
import { Filter } from "bad-words";
import Link from "next/link";
import { WebsiteCardCreator, WebAppCardCreator } from "./components";


const filter = new Filter();

interface Props {
  user?: {
    id?: string;
    name?: string | null;
    email?: string | null;
  };
}

export default function AdminClient({ user }: Props) {
  const [cardBuilder, setCardBuilder] = useState(false);

  const handleCardBuilder = () =>{
    setCardBuilder(!cardBuilder);
  }

  return(
    <section>

      <button className="block absolute w-fit top-20 right-5 text-[#fafafa] text-lg" onClick={handleCardBuilder}>switch</button>

      {cardBuilder ? <WebsiteCardCreator /> : <WebAppCardCreator />}
    </section>
  );

}


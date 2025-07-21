'use client'
import { useEffect, useState, FormEvent } from 'react';
import { supabase } from '@/lib/supabaseClient';
import { Filter } from 'bad-words';
import Link from 'next/link';
import { motion } from 'framer-motion';

const filter = new Filter();

function Projects(){

	const [website, setWebsite] = useState<{ id: string; link: string; description: string; title: string }[]>([]);
	const [newWebsite, setNewWebsite] = useState("")

	useEffect(()=>{
		fetchProject();
	}, [])

	async function fetchProject() {
    const { data, error } = await supabase
      .from('website')
      .select('*')
      // .order('created_at', { ascending: false });

    if (error) {
      console.log('Fetch error:', error);
    } else {
      console.log('Fetched data:', data);
      setWebsite(data);
    }
  }





	return(
		<>
			<div>
				{website.length===0 ? 
				(<p className="text-green-300 py-5 text-center text-2xl">Oops! It looks like we ran into an issue... Try again later!</p>)
				:
				(website.map((data, index)=>(
					<div 
						style={{ clipPath: "polygon(0 0, 100% 0, calc(100% - 70px) 100%, 0 100%)" }}
						className="w-3/4 min-h-[100px] bg-gradient-to-r from-green-400/100 to-green-300/20 my-20 angled"
						key={data.id}
					>
						<div className="w-full flex">
							<img className="m-auto" src={`/uploads/${data.image}`} alt={data.title} className="w-[100px] p-2" />
							<div>
								<p className="m-auto text-center text-lg">{data.title}</p>
								<p className="m-auto text-justify">{data.description}</p>
							</div>
							<p className="m-auto">{data.tools}</p>
						</div>

					</div>
				)))}
				
			</div>
		</>

	);
}

export { Projects };
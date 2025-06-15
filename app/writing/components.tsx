'use client'
import { useEffect, useState, FormEvent } from 'react';
import { supabase } from '@/lib/supabase';
import { Filter } from 'bad-words';
import Link from 'next/link';
import { motion } from 'framer-motion';

const filter = new Filter();

function Stories(){

	const [story, setStory] = useState<{ id: string; title: string; file: string }[]>([]);

	useEffect(()=>{
		fetchStories();
	}, [])

	async function fetchStories() {
    const { data, error } = await supabase
      .from('Stories')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.log('Fetch error:', error);
    } else {
      console.log('Fetched data:', data);
      setStory(data);
    }
  }





	return(
		<>
			<div className=" w-full md:w-3/4 mx-auto flex flex-wrap justify-center">
				{story.length===0 ? 
				(<p className="text-green-300 py-5 text-center text-2xl">There are currently no writings listed. Check again later!</p>)
				:
				(story.map((msg, index)=>(
					<motion.figure 
						key={msg.id} 
						className="block w-ft m-5 rounded-xl p-2"
						initial={{ opacity: 0, scale: 0 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{
							opacity: { duration: 0.4 },
							scale: { duration: 0.4 },
						}}

					>
						<Link href={msg.file} target="_blank" download className="w-full text-center text-xl text-green-300"><h3>{msg.title}</h3></Link>
					</motion.figure>
				)))}
				
			</div>
		</>

	);
}

export { Stories };
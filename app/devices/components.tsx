'use client'
import { useEffect, useState, FormEvent } from 'react';
import { supabase } from '@/lib/supabase';
import { Filter } from 'bad-words';
import Link from 'next/link';
import { motion } from 'framer-motion';

const filter = new Filter();

function Projects(){

	const [project, setProject] = useState<{ id: string; name: string }[]>([]);
	const [newProject, setNewProject] = useState("")

	useEffect(()=>{
		fetchProject();
	}, [])

	async function fetchProject() {
    const { data, error } = await supabase
      .from('Devices')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.log('Fetch error:', error);
    } else {
      console.log('Fetched data:', data);
      setProject(data);
    }
  }





	return(
		<>
			<div className=" w-full md:w-3/4 mx-auto flex flex-wrap justify-center">
				{project.length===0 ? 
				(<p className="text-green-300 py-5 text-center text-2xl">There are currently no projects listed. Check again later!</p>)
				:
				(project.map((msg, index)=>(
					<motion.figure 
						key={msg.id} 
						className="block w-3/4 md:w-1/4 min-h-[300px] m-10 bg-green-300/60 rounded-xl p-2"
						initial={{ opacity: 0, scale: 0 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{
							opacity: { duration: 0.4 },
							scale: { duration: 0.4 },
						}}

					>
						<Link href={msg.link} target="_blank" className="w-full text-center text-2xl text-[#fafafa] underline"><h3>{msg.title}</h3></Link>
						<p className="w-full text-md text-[#fafafa] text-justify">{msg.description}</p>
					</motion.figure>
				)))}
				
			</div>
		</>

	);
}

export { Projects };

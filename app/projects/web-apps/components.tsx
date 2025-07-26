'use client'
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabaseClient';
import Link from 'next/link';
import { motion } from 'framer-motion';

function WebApps(){

	const [webApp, setWebApp] = useState<{ id: string; link: string; description: string; title: string; image: string }[]>([]);

	useEffect(()=>{
		fetchProject();
	}, [])

	async function fetchProject() {
    const { data, error } = await supabase
      .from('webapp')
      .select('*')
      // .order('created_at', { ascending: false });

    if (error) {
      console.log('Fetch error:', error);
    } else {
      console.log('Fetched data:', data);
      setWebApp(data);
    }
  }





	return(
		<>
			<div>
				{webApp.length===0 ? 
				(<p className="text-green-300 py-5 text-center text-2xl">Oops! It looks like we ran into an issue... Try again later!</p>)
				:
				(webApp.map((data, index)=>(
					<motion.div 
						className="w-full md:w-3/4 min-h-[100px] bg-gradient-to-r from-green-400/100 to-green-300/20 my-20 md:angled"
						key={data.id}
						initial={{ x: "-100%" }}
						whileInView={{ x: 0 }}
						transition={{ duration: 0.5, ease: 'easeInOut'}}
            viewport={{ once: true }}>
						<div className="w-full md:h-[200px] h-fit flex items-start">
								<img src={`/uploads/${data.image}`} alt={data.title} className="md:w-[200px] w-[100px] m-auto p-2" />
							<div>
								<a href={data.link} target="_blank" className="m-auto block underline text-center text-lg w-1/2 text-[#fafafa]">{data.title}</a>
								<p className="m-auto  text-justify text-md md:w-1/2 w-full p-2 text-[#fafafa]">{data.description}</p>
							</div>
							<p className="my-auto mx-[60px] text-[#fafafa]">{data.tools}</p>
						</div>

					</motion.div>
				)))}
				
			</div>
		</>

	);
}

export { WebApps };
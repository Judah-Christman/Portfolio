'use client'
import Image from "next/image";
import React from "react";
import { useState } from "react";

export default function Contact(){
	const [completed, setCompleted] = useState(false);

	

	async function handleSubmit(e) {
        e.preventDefault();
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({
                access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
                name: e.target.name.value,
                email: e.target.email.value,
                subject: e.target.subject.value,
                message: e.target.message.value,
            }),
        });
        const result = await response.json();
        if (result.success) {
            console.log(result);
        }
        setCompleted(!completed);
    }


	return(
			<div className="w-full min-h-dvh max-h-full bg-[url(/images/contact-background.png)] bg-cover">
				<h1 className="w-full text-green-300 text-center text-5xl py-10">Contact</h1>
				<div className="w-full flex flex-col justify-center">
					{completed ?  <p className="w-full px-2 text-2xl text-[#f6f6f6] text-center">Thank you for reaching out! I will get back to you as soon as I can!</p> : 
					<div>
					<p className="w-full px-2 text-2xl text-[#f6f6f6] text-center py-5 ">Use the form below to contact me!</p>
					<form onSubmit={handleSubmit} className="w-full md:w-1/3 md:m-auto h-full md:bg-[#444444] rounded-xl flex flex-col p-2">

	          			<div>
    	          			<label htmlFor="name" className="text-xl p-1 text-[#f6f6f6]">Name</label>
        	      			<input type="text" name="name" required placeholder="Your name" className="w-full text-lg p-1 mx-auto my-2 text-black-500 rounded-md"/>
        	  			</div>
        	  			<div>
            	  			<label htmlFor="email" className="text-xl p-1 text-[#f6f6f6]">Email</label>
            	  			<input type="email" name="email" required placeholder="email@example.com" className="w-full text-lg p-1 mx-auto my-2 text-black-500 rounded-md"/>
          				</div>
          				<div>
          					<label htmlFor="subject" className="text-xl p-1 text-[#f6f6f6]">Subject</label>
          					<input type="text" name="subject" required placeholder="Subject of Message" className="w-full text-lg p-1 mx-auto my-2 text-black-500 rounded-md"/>
          				</div>
          				<div>
              				<label htmlFor="message" className="text-xl p-1 text-[#f6f6f6]">Message</label>
              				<textarea name="message" required rows="3" placeholder="Enter Message" className="w-full text-lg p-1 mx-auto my-2 text-black-500 rounded-md"></textarea>
          				</div>
          				<div>
          					<input type="checkbox" name="botcheck" className="hidden" style={{display: "none"}}/>
          				</div>
          				<button  type="submit" className="w-1/3 block mx-auto my-2 p-2 bg-green-400 rounded-xl transition delay-150 duration-300 ease-in-out hover:scale-[1.2]">Submit Form</button>
					</form></div>}
				</div>
				
			</div>
	);
}
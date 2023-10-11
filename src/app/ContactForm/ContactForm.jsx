import React from "react";
import './ContactForm.css'


export default function ContactForm() {

    return (
        <div className="bg-white p-10 flex flex-col">
            <h2 className="contact-heading text-black text-sm pb-4">CONTACT</h2>
            <h1 className="text-black">Get in touch</h1>
            <div className="contact-instruction pt-1 pb-4">
            <p className="text-black text-xs">Complete the form below and you will receive an email within 24 hours to schedule a free in-home estimate.</p>
            </div>
            <form action="mailto:north@northhardwoodfloors.com" method="post" encType="text/plain" className="flex flex-col">
                
                <input type="text" id="name" name="name" placeholder="Name" className="contact-input" required />

                
                <input type="email" id="email" name="email" placeholder="Email" className="contact-input" required />

                <input type="text" id="city" name="city" placeholder="City" className="contact-input" required />

                <textarea id="message" name="message" rows="4" cols="50" placeholder="Briefly explain your project. If you took 
                the Service Suggestion Quiz, include your results here." className="contact-input" required></textarea>

                <input type="submit" value="SUBMIT" className=" bg-gray-300 hover:bg-gray-200 text-gray-500 font-bold py-2 px-4 rounded w-24 text-sm mt-4"/>
            </form>
        </div>
    )
}
import React from "react";
import './Contact.css'




export default function Contact() {

    return (
        <div className="background-image">
            <div className="blue-overlay"></div>
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
                <h1 className="mt-12 mb-2">Let's Get Started</h1>
                <p className="text-sm text-center mb-2">
                    Complete the form below and you will receive an email within 24
                    <br />
                    hours to schedule a free in-home estimate.
                </p>
                <form action="mailto:north@northhardwoodfloors.com" method="post" encType="text/plain" className="flex flex-col mb-12">

                    <input type="text" id="name" name="name" placeholder="Name" className="mainpage-contact-input bg-transparent" required />


                    <input type="email" id="email" name="email" placeholder="Email" className="mainpage-contact-input bg-transparent" required />

                    <input type="text" id="city" name="city" placeholder="City" className="mainpage-contact-input bg-transparent" required />

                    <textarea id="message" name="message" rows="4" cols="50" placeholder="Briefly explain your project. If you took 
                the Service Suggestion Quiz, include your results here." className="contact-textarea bg-transparent" required></textarea>
                    <div className="flex flex-row justify-end">
                        <input type="submit" value="SUBMIT" className=" bg-gray-300 hover:bg-gray-200 text-gray-500 font-bold py-2 mt-2 mr-2 rounded w-24 text-sm " />
                    </div>
                </form>
            </div>
        </div>
    )
}
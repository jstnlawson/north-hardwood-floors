import React from "react";
import './Contact.css'
import EmailForm from "./EmailForm";




export default function Contact() {

    return (
        <div id="contact" className="background-image min-h-[80vh]">
            <div className="blue-overlay"></div>
            <div className="relative z-10 flex flex-col  items-center justify-center text-white">
                
                <h1 className="mt-12 mb-2 md:mt-36 md:mb-4">Let's Get Started</h1>
                <p className="text-sm text-center mb-2 md:mb-4">
                    Complete the form below and you will receive an 
                    <br />
                    email within 24 hours to schedule a free 
                    <br />
                    in-home estimate:
                </p>
                <EmailForm />
            </div>
        </div>
    )
}
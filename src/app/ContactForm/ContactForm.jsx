'use client'
import React, { useState } from 'react'
import { validationSchema } from '@/utils/validations'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { toFormikValidationSchema } from 'zod-formik-adapter'
import { ToastContainer, toast } from 'react-toastify'
import './ContactForm.css'



// const initialValues = {
//     name: '',
//     email: '',
//     city: '',
//     serviceSuggestion: '',
//     message: '',
// }

export default function ContactForm({ suggestedServiceText, setSuggestedServiceText, handlePreviousStep }) {

    const initialValues = {
        name: '',
        email: '',
        city: '',
        serviceSuggestion: suggestedServiceText,
        message: '',
    };
    console.log('initialValues: ', initialValues)

    //const [isLoading, setIsLoading] = useState(false);
    
    const handleSubmit = async (values, { setSubmitting, resetForm }) => {
        values.serviceSuggestion = suggestedServiceText;
        try {
            console.log("Form values:", values);
            await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(values),
            });
            resetForm();
            console.log("Email sent successfully!");
        } catch (error) {
            console.error("Failed to send email:", error);
        } finally {
            toast.success('Email sent successfully!')
            setSubmitting(false);
        }
    };

    return (
        <div className="contact-container h-[100vh] bg-northLightBlue p-2 flex flex-col justify-center items-center text-northBlue">
            <div className='flex flex-col items-center w-[500px]'>
            {/* <h1 className="contact-heading text-northBeige my-2">CONTACT</h1> */}
            <h1 className='text-northBlue my-2'>Let's Get Started</h1>
            <p className='text-center text-sm  mb-2'>
                Your service suggestion has already been filled 
                <br />out but feel free to provide more details. 
                <br />
                Bart will email you within 24 hours 
                <br />to schedule a free estimate.
            </p>
            </div>
            <Formik
                initialValues={initialValues}
                validationSchema={toFormikValidationSchema (validationSchema)}
                onSubmit={handleSubmit}
            >
                <Form className="flex flex-col mb-12 text-northBlue">

                    <Field
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Name"
                        className="quiz-contact-input bg-transparent"
                    />
                    <ErrorMessage
                        name="name"
                        component="div"
                        className='text-red-500'
                    />

                    <Field
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Email"
                        className="quiz-contact-input bg-transparent"
                    />
                    <ErrorMessage
                        name="email"
                        component="div"
                        className='text-red-500'
                    />
                    <Field
                        type="text"
                        id="city" 
                        name="city"
                        placeholder="City"
                        className="quiz-contact-input bg-transparent"
                    />
                    <ErrorMessage
                        name="city"
                        component="div"
                        className='text-red-500'
                    />
                    <label htmlFor="serviceSuggestion" className='ml-2 text-xs'>Service Suggestion:</label>
                    <Field
                        type="text"
                        id="serviceSuggestion" 
                        name="serviceSuggestion"
                        // value={serviceSuggestion}
                        //value={initialValues.serviceSuggestion}
                        value={suggestedServiceText}
                        className="quiz-contact-input bg-transparent"
                    />
                    <label htmlFor="serviceSuggestion" className='ml-2 text-xs'>Additional Details:</label>
                    <Field
                        id="message"
                        name="message"
                        as="textarea"
                        rows="4" cols="50"
                        style={{ color: 'var(--color--northBlue)' }} 
                        className="quiz-contact-textarea bg-transparent h-[50px]"
                    />
                    <ErrorMessage
                        name="message"
                        component="div"
                        className='text-red-500'
                    />
                    <div className="flex flex-row justify-between">
                        <button className='orange-button ' onClick={handlePreviousStep}>← quiz</button>
                        <Field id="submit-btn" type="submit" value="submit" className="orange-button" />
                    </div>
                    
                </Form>
            </Formik>
            <ToastContainer
                position='top-center'
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme='light'
                
            />
        </div>
    )
}
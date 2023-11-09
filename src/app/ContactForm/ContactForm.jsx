'use client'
import React, { useState } from 'react'
import { validationSchema } from '@/utils/validations'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { toFormikValidationSchema } from 'zod-formik-adapter'
import { ToastContainer, toast } from 'react-toastify'
import './ContactForm.css'

export default function ContactForm({ suggestedServiceText, setSuggestedServiceText, handlePreviousStep, handleShowQuiz }) {

    const initialValues = {
        name: '',
        email: '',
        city: '',
        serviceSuggestion: suggestedServiceText,
        message: '',
    };

    const handleSubmit = async (values, { setSubmitting, resetForm }) => {
        try {
            const promise = new Promise((resolve, reject) => {
                setTimeout(async () => {
                    try {
                        await fetch("/api/contact", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify(values),
                        });
                        resolve();
                    } catch (error) {
                        reject(error);
                    }
                }, 2000);
            });
    
            toast.promise(
                promise,
                {
                    pending: 'Sending email...',
                    success: 'Email sent successfully!',
                    error: 'Failed to send email',
                }
            ).then(() => {
                handleShowQuiz(); 
            });
    
            resetForm();
            console.log("Email sent successfully!");
        } catch (error) {
            console.error("Failed to send email:", error);
        } finally {
            setSubmitting(false);
            
        }
    };

    return (
        <div className="contact-container sm:h-[80vh] h-[100vh] bg-northLightBlue p-2 flex flex-col justify-center items-center text-northBlue">
            <div className='flex flex-col items-center w-[500px]'>
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
                        <button className='quiz-button bg-northLightBlue' onClick={handlePreviousStep}>← quiz</button>
                        <Field id="submit-btn" type="Submit" value="Submit" className="bg-northOrange hover:bg-northOrange/90 rounded-lg px-4 py-2 h-[38px] mt-2 text-sm font-bold text-northDarkBlue" />
                    </div>
                    
                </Form>
            </Formik>
            <ToastContainer
                position='bottom-center'
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme='light'
                z-index='9999'
            />
        </div>
    )
}
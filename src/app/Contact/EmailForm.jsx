'use client'
import React, { useState } from 'react'
import './Contact.css'
import { validationSchema } from '@/utils/validations'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { toFormikValidationSchema } from 'zod-formik-adapter'

import { ToastContainer, toast } from 'react-toastify'


const initialValues = {
    name: '',
    email: '',
    city: '',
    message: ''
}



const EmailForm = () => {

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
            );
    
            resetForm();
            console.log("Email sent successfully!");
        } catch (error) {
            console.error("Failed to send email:", error);
        } finally {
            setSubmitting(false);
        }
    };

    

    return (
        <>
            <Formik
                initialValues={initialValues}
                validationSchema={toFormikValidationSchema(validationSchema)}
                onSubmit={handleSubmit}
            >
                <Form className="flex flex-col mb-12">
                    {/* <form action="mailto:north@northhardwoodfloors.com" method="post" encType="text/plain" className="flex flex-col mb-12"> */}

                    <Field
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Name"
                        className="mainpage-contact-input bg-transparent"
                    />
                    <ErrorMessage
                        name="name"
                        component="div"
                        className='error-message'
                    />

                    <Field
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Email"
                        className="mainpage-contact-input bg-transparent"
                    />
                    <ErrorMessage
                        name="email"
                        component="div"
                    // className='text-red-500'
                    />
                    <Field
                        type="text"
                        id="city"
                        name="city"
                        placeholder="City"
                        className="mainpage-contact-input bg-transparent"
                    />
                    <ErrorMessage
                        name="city"
                        component="div"
                    // className='text-red-500'
                    />
                    <Field
                        id="message"
                        name="message"
                        as="textarea"
                        rows="4" cols="50"
                        placeholder="Briefly explain your project. If you took the Service Suggestion Quiz, include your results here."
                        className="contact-textarea bg-transparent"
                    />
                    <ErrorMessage
                        name="message"
                        component="div"
                    // className='text-red-500'
                    />
                    <div className="flex flex-row justify-end">
                        <Field id="submit-btn" type="submit" value="Submit" className=" bg-gray-300 hover:bg-gray-200 text-gray-500 font-bold py-2 px-4 mt-2 mr-2 rounded w-24 text-sm " />
                    </div>
                    {/* </form> */}
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
                //z-index={9999}
                zIndex={9999}
            />
        </>
    )
}

export default EmailForm
'use client'
import React, { useState } from 'react'
import './Contact.css'
import { validationSchema } from '@/utils/validations'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { toFormikValidationSchema } from 'zod-formik-adapter'

const initialValues = {
    name: '',
    email: '',
    city: '',
    message: ''
}

 

const EmailForm = () => {
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (values, { setSubmitting, resetForm }) => {
        try {
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
            setSubmitting(false);
        }
    };

    return (
        <>
            <Formik
                initialValues={initialValues}
                validationSchema={toFormikValidationSchema (validationSchema)}
                onSubmit={handleSubmit}
            >
                <Form>
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
                        className='text-red-500'
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
                        className='text-red-500'
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
                        className='text-red-500'
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
                        className='text-red-500'
                    />
                    <div className="flex flex-row justify-end">
                        <Field id="submit-btn" type="submit" value="SUBMIT" className=" bg-gray-300 hover:bg-gray-200 text-gray-500 font-bold py-2 mt-2 mr-2 rounded w-24 text-sm " />
                    </div>
                    {/* </form> */}
                </Form>
            </Formik>
        </>
    )
}

export default EmailForm
"use client";
import React, { useState } from "react";
import Image from "next/image";
import buffer from 'public/images/buffer.png';
import drumSander from 'public/images/drumSander.png';
import weave from 'public/images/weave.jpeg';
import squareStain from 'public/images/squareStain.jpeg';
import "./QuizModal.css";
import ContactForm from "../ContactForm/ContactForm";
import { IoMdClose } from 'react-icons/io';


export default function QuizModal({ handleShowQuiz }) {

    const [step, setStep] = useState(1);
    const [selectedAnswers, setSelectedAnswers] = useState([]);
    const [suggestedService, setSuggestedService] = useState("");
    const [showContactForm, setShowContactForm] = useState(false);

    const answer1a = "Light wear patterns";
    const answer1b = "Lots of noticeable scratches";
    const answer1c = "Unsure";
    const answer1d = "Finish is dull";
    const answer1e = "There are gray areas on the floors";
    const answer2a = "I see 'cupping' - curling up at the edges of boards";
    const answer2b = "There are some broken boards";
    const answer2c = "Not sure";
    const answer2d = "There is discoloration (stains) in areas";
    const answer2e = "There are deep gouges or dents in some boards";
    const answer2f = "The integrity of the boards seems intact";
    const answer3a = "I'd like to bring out the natural color of the wood";
    const answer3b = "I'm unsure of what color I want my floors to be";
    const answer3c = "I am interested in a specific color for my floors";
    const answer3d = "I don't want to change the color of my floors";

    const handleNextStep = () => {
        if (step < 4) {
            setStep(step + 1);
        }
    };

    const handlePreviousStep = () => {
        if (step > 1) {
            setStep(step - 1);
        }
    };

    const handleCheckboxChange = (event) => {
        const selectedOption = event.target.value; // Get the value of the selected option

        // Check if the selected option is already in selectedAnswers
        if (selectedAnswers.includes(selectedOption)) {
            // If it is, remove it from the selectedAnswers array
            setSelectedAnswers(selectedAnswers.filter((option) => option !== selectedOption));
        } else {
            // If it's not, add it to the selectedAnswers array
            setSelectedAnswers([...selectedAnswers, selectedOption]);
        }
    };

    const handleSuggestService = () => {
        const buffTrue = [answer1a, answer1c, answer1d, answer2c, answer2f, answer3a, answer3b, answer3d];
        const buffFalse = [answer1b, answer1c, answer1e, answer2a, answer2b, answer2d, answer2e, answer3c];
        const sandTrue = [answer1a, answer1b, answer1c, answer1d, answer1e, answer2a, answer2b, answer2c, answer2d, answer2e, answer2f, answer3a, answer3b, answer3c, answer3d];
        // const sandFalse = [answer1a, answer1c, answer1d];
        const repairTrue = [answer2a, answer2b, answer2d, answer2e];
        // const repairFalse = [answer2c, answer2f];
        const stainTrue = [answer3c];
        const unsureTrue = [answer1c, answer2c, answer3b]


        const isBuffTrueSelected = buffTrue.some((option) =>
            selectedAnswers.includes(option)
        );
        const isBuffFalseSelected = buffFalse.some((option) =>
            selectedAnswers.includes(option)
        );

        const isSandTrueSelected = sandTrue.some((option) =>
            selectedAnswers.includes(option)
        );
        // const isSandFalseSelected = sandFalse.some((option) =>
        //     selectedAnswers.includes(option)
        // );

        const isRepairTrueSelected = repairTrue.some((option) =>
            selectedAnswers.includes(option)
        );
        // const isRepairFalseSelected = repairFalse.some((option) =>
        //     selectedAnswers.includes(option)
        // );

        const isStainTrueSelected = stainTrue.some((option) =>
            selectedAnswers.includes(option)
        );

        const isUnsureTrueSelected = unsureTrue.some((option) =>
            selectedAnswers.includes(option)
        );

        if (isSandTrueSelected && isRepairTrueSelected && isStainTrueSelected) {
            setSuggestedService("Repair, sand, stain, & finish")
        }
        else if (isSandTrueSelected && isRepairTrueSelected) {
            setSuggestedService("Repair, sand, & finish")
        }
        else if (isBuffTrueSelected && !isBuffFalseSelected) {
            setSuggestedService("Buff & Coat");
        }
        else if (isSandTrueSelected && isStainTrueSelected) {
            setSuggestedService("Sand, stain, & finish")
        }
        else if (isUnsureTrueSelected) {
            setSuggestedService("Contact Bart to find out what your floor needs!");
        }
        else if (isSandTrueSelected) {
            setSuggestedService("Sand & Finish")
        }
        else { setSuggestedService("Contact Bart to find out what your floor needs!") }

        handleNextStep()
    }

    const handleContactForm = () => {
        setShowContactForm(!showContactForm)
    }

    return (
        <div className="modal-overlay-dark flex">

            <div className="absolute right-5 top-6 cursor-pointer">
                <IoMdClose
                    size={30}
                    onClick={handleShowQuiz} />
            </div>

            <div className="all-questions-container flex flex-row overflow-hidden items-center">
                <div className={`quiz-step step-${step}`}>
                    <div className="question-container bg-northBeige flex flex-col items-center justify-center">
                        <span className="uppercase font-bold text-xs text-northBlue text-center">
                            1 of 3
                        </span>
                        <h1 className="text-northBlue text-center ml-1 mr-1">
                            How would you describe your
                            floor's finish (the surface)?
                        </h1>
                        <span className="text-xs text-northBlue text-center m-4">
                            click all that apply
                        </span>
                        <div className="flex flex-row ">
                            <div className="flex flex-col sm:mr-16 ">
                                <div className="flex flex-row m-4">
                                    <input
                                        type="checkbox"
                                        className="quiz-checkbox"
                                        value={answer1a} // Set the value to the corresponding answer
                                        checked={selectedAnswers.includes(answer1a)} // Check if the answer is already selected
                                        onChange={handleCheckboxChange} />
                                    <span className="text-xs text-northBlue w-28">
                                        {answer1a}
                                    </span>
                                </div>
                                <div className="flex flex-row m-4">
                                    <input
                                        type="checkbox"
                                        className="quiz-checkbox"
                                        value={answer1b}
                                        checked={selectedAnswers.includes(answer1b)}
                                        onChange={handleCheckboxChange} />
                                    <span className="text-xs text-northBlue w-28">
                                        {answer1b}
                                    </span>
                                </div>
                                <div className="flex flex-row m-4">
                                    <input
                                        type="checkbox"
                                        className="quiz-checkbox"
                                        value={answer1c}
                                        checked={selectedAnswers.includes(answer1c)}
                                        onChange={handleCheckboxChange} />
                                    <span className="text-xs text-northBlue w-28">
                                        {answer1c}
                                    </span>
                                </div>
                            </div>
                            <div className="flex flex-col sm:ml-16">
                                <div className="flex flex-row m-4">
                                    <input
                                        type="checkbox"
                                        className="quiz-checkbox"
                                        value={answer1d}
                                        checked={selectedAnswers.includes(answer1d)}
                                        onChange={handleCheckboxChange} />
                                    <span className="text-xs text-northBlue w-28">
                                        {answer1d}
                                    </span>
                                </div>
                                <div className="flex flex-row m-4">
                                    <input
                                        type="checkbox"
                                        className="quiz-checkbox"
                                        value={answer1e}
                                        checked={selectedAnswers.includes(answer1e)}
                                        onChange={handleCheckboxChange} />
                                    <span className="text-xs text-northBlue w-28">
                                        {answer1e}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <button className="quiz-button" onClick={handleNextStep}>next question →</button>
                    </div>
                </div>

                <div className={`quiz-step step-${step}`}>
                    <div className="question-container bg-northBeige flex flex-col items-center justify-center sm:pb-20 sm:pt-20">
                        <span className="uppercase font-bold text-xs text-northBlue text-center">
                            2 of 3
                        </span>
                        <h1 className="text-northBlue text-center ml-1 mr-1">
                            How is the floor
                            
                            board condition (beyond the surface)?
                        </h1>
                        <span className="text-xs text-northBlue text-center m-4">
                            click all that apply
                        </span>
                        <div className="flex flex-row">
                            <div className="flex flex-col sm:mr-16">
                                <div className="flex flex-row m-4">
                                    <input
                                        type="checkbox"
                                        className="quiz-checkbox"
                                        value={answer2a}
                                        checked={selectedAnswers.includes(answer2a)}
                                        onChange={handleCheckboxChange} />
                                    <span className="text-xs text-northBlue w-28">
                                        {answer2a}
                                    </span>
                                </div>
                                <div className="flex flex-row m-4">
                                    <input
                                        type="checkbox"
                                        className="quiz-checkbox"
                                        value={answer2b}
                                        checked={selectedAnswers.includes(answer2b)}
                                        onChange={handleCheckboxChange} />
                                    <span className="text-xs text-northBlue w-28">
                                        {answer2b}
                                    </span>
                                </div>
                                <div className="flex flex-row m-4">
                                    <input
                                        type="checkbox"
                                        className="quiz-checkbox"
                                        value={answer2c}
                                        checked={selectedAnswers.includes(answer2c)}
                                        onChange={handleCheckboxChange} />
                                    <span className="text-xs text-northBlue w-28">
                                        {answer2c}
                                    </span>
                                </div>
                            </div>
                            <div className="flex flex-col sm:ml-16">
                                <div className="flex flex-row m-4">
                                    <input
                                        type="checkbox"
                                        className="quiz-checkbox"
                                        value={answer2d}
                                        checked={selectedAnswers.includes(answer2d)}
                                        onChange={handleCheckboxChange} />
                                    <span className="text-xs text-northBlue w-28">
                                        {answer2d}
                                    </span>
                                </div>
                                <div className="flex flex-row m-4">
                                    <input
                                        type="checkbox"
                                        className="quiz-checkbox"
                                        value={answer2e}
                                        checked={selectedAnswers.includes(answer2e)}
                                        onChange={handleCheckboxChange} />
                                    <span className="text-xs text-northBlue w-28">
                                        {answer2e}
                                    </span>
                                </div>
                                <div className="flex flex-row m-4">
                                    <input
                                        type="checkbox"
                                        className="quiz-checkbox"
                                        value={answer2f}
                                        checked={selectedAnswers.includes(answer2f)}
                                        onChange={handleCheckboxChange} />
                                    <span className="text-xs text-northBlue w-28">
                                        {answer2f}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="quiz-button-container flex flex-row">
                            <button className="quiz-button" onClick={handlePreviousStep}>
                                ← last question
                            </button>
                            <button className="quiz-button" onClick={handleNextStep}>
                                next question →
                            </button>
                        </div>
                    </div>
                </div>

                <div className={`quiz-step step-${step}`}>
                    <div className="question-container bg-northBeige flex flex-col items-center justify-center  sm:pb-20 sm:pt-20">
                        <span className="uppercase font-bold text-xs text-northBlue text-center">
                            3 of 3
                        </span>
                        <h1 className="text-northBlue text-center p-1">
                            What are your thoughts on the
                            
                            color of your floor?
                        </h1>
                        <span className="text-xs text-northBlue text-center m-4">
                            choose one
                        </span>
                        <div className="flex flex-row">
                            <div className="flex flex-col sm:mr-16">
                                <div className="flex flex-row m-4">
                                    <input
                                        type="checkbox"
                                        className="quiz-checkbox"
                                        value={answer3a}
                                        checked={selectedAnswers.includes(answer3a)}
                                        onChange={handleCheckboxChange} />
                                    <span className="text-xs text-northBlue w-28">
                                        {answer3a}
                                    </span>
                                </div>
                                <div className="flex flex-row m-4">
                                    <input
                                        type="checkbox"
                                        className="quiz-checkbox"
                                        value={answer3b}
                                        checked={selectedAnswers.includes(answer3b)}
                                        onChange={handleCheckboxChange} />
                                    <span className="text-xs text-northBlue w-28">
                                        {answer3b}
                                    </span>
                                </div>
                            </div>
                            <div className="flex flex-col sm:ml-16">
                                <div className="flex flex-row m-4">
                                    <input
                                        type="checkbox"
                                        className="quiz-checkbox"
                                        value={answer3c}
                                        checked={selectedAnswers.includes(answer3c)}
                                        onChange={handleCheckboxChange} />
                                    <span className="text-xs text-northBlue w-28">
                                        {answer3c}
                                    </span>
                                </div>
                                <div className="flex flex-row m-4">
                                    <input
                                        type="checkbox"
                                        className="quiz-checkbox"
                                        value={answer3d}
                                        checked={selectedAnswers.includes(answer3d)}
                                        onChange={handleCheckboxChange} />
                                    <span className="text-xs text-northBlue w-28">
                                        {answer3d}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="quiz-button-container flex flex-row">
                            <button className="quiz-button" onClick={handlePreviousStep}>
                                ← last question
                            </button>
                            <button className="orange-button" onClick={handleSuggestService}>
                                see your service suggestion →
                            </button>
                        </div>
                    </div>
                </div>

                <div className={`quiz-step step-${step}`}>
                    <div className="suggestions-container bg-northLightBlue flex flex-col items-center justify-center sm:pb-20 sm:pt-20">

                        {suggestedService === "Buff & Coat" && (
                            <div className="suggest-buff flex flex-col justify-center items-center">
                                <h1 className="text-northOrange text-center sm:mb-2">Suggested service is:</h1>
                                <h1 className="text-northBlue text-center mb-4">Buff & Coat</h1>
                                {showContactForm ? null : (
                                    <div className="flex flex-col items-center">
                                        <button className="orange-button" onClick={handleContactForm}>set up an estimate</button>
                                        <div className="">
                                            <Image
                                                src={buffer}
                                                width={267}
                                                height={217}
                                                className="m-1"
                                                alt="floor buffer"
                                            />
                                        </div>
                                    </div>
                                )}
                                {showContactForm && (
                                    <ContactForm />
                                )}
                            </div>
                        )}

                        {suggestedService === "Sand & Finish" && (
                            <div className="suggest-sand flex flex-col justify-center items-center">
                                <h1 className="text-northOrange text-center sm:mb-2">Suggested service is:</h1>
                                <h1 className="text-northBlue text-center mb-4">Sand & Finish</h1>
                                {showContactForm ? null : (
                                    <div className="flex flex-col items-center">
                                        <button className="orange-button" onClick={handleContactForm}>set up an estimate</button>
                                        <div className="">
                                            <Image
                                                src={drumSander}
                                                width={267}
                                                height={217}
                                                className="m-1"
                                                alt="floor sander"
                                            />
                                        </div>
                                    </div>
                                )}
                                {showContactForm && (
                                    <ContactForm />
                                )}
                            </div>
                        )}

                        {suggestedService === "Repair, sand, & finish" && (
                            <div className="suggest-repair-sand flex flex-col justify-center items-center">
                                <h1 className="text-northOrange text-center sm:mb-2">Suggested service is:</h1>
                                <h1 className="text-northBlue text-center mb-4">Repair, sand, & finish</h1>
                                {showContactForm ? null : (
                                    <div className="flex flex-col items-center">
                                        <button className="orange-button" onClick={handleContactForm}>set up an estimate →</button>
                                        <div className="sm:h-56 flex mt-4">
                                            <Image
                                                src={weave}
                                                width={267}
                                                height={217}
                                                sizes="(max-width: 640px) 40vw"
                                                className="m-1"
                                                alt="floor repair"
                                            />
                                            <Image
                                                src={drumSander}
                                                width={267}
                                                height={217}
                                                sizes="(max-width: 640px) 40vw"
                                                className="m-1"
                                                alt="floor sander"
                                            />
                                        </div>
                                    </div>
                                )}
                                {showContactForm && (
                                    <ContactForm />
                                )}
                            </div>
                        )}

                        {suggestedService === "Sand, stain, & finish" && (
                            <div className="suggest-sand-stain flex flex-col justify-center items-center">
                                <h1 className="text-northOrange text-center sm:mb-2">Suggested service is:</h1>
                                <h1 className="text-northBlue text-center mb-4">Sand, stain, & finish</h1>
                                {showContactForm ? null : (
                                    <div className="flex flex-col items-center">
                                        <button className="orange-button" onClick={handleContactForm}>set up an estimate →</button>
                                        <div className="sm:h-56 flex mt-4">
                                            <Image
                                                src={drumSander}
                                                width={267}
                                                height={217}
                                                sizes="(max-width: 640px) 40vw"
                                                className="m-1"
                                                alt="floor sander"
                                            />
                                            <Image
                                                src={squareStain}
                                                width={267}
                                                height={217}
                                                sizes="(max-width: 640px) 40vw"
                                                className="m-1"
                                                alt="stained floor"
                                            />

                                        </div>
                                    </div>
                                )}
                                {showContactForm && (
                                    <ContactForm />
                                )}
                            </div>
                        )}

                        {suggestedService === "Repair, sand, stain, & finish" && (
                            <div className="suggest-repair-sand-stain flex flex-col justify-center items-center">
                                <h1 className="text-northOrange text-center sm:mb-2">Suggested service is:</h1>
                                <h1 className="text-northBlue text-center mb-4">Repair, sand, stain, & finish</h1>
                                {showContactForm ? null : (
                                    <div className="flex flex-col items-center">
                                        <button className="orange-button" onClick={handleContactForm}>set up an estimate →</button>
                                        <div className="sm:h-56 flex mt-4">
                                            <Image
                                                src={weave}
                                                height={217}
                                                width={267}
                                                sizes="(max-width: 815px) 30vw"
                                                className="m-1 transition-opacity opacity-0 duration-[1s]"
                                                onLoadingComplete={(image) => image.classList.remove("opacity-0")}
                                                alt="floor repair"
                                            />
                                            <Image
                                                src={drumSander}
                                                width={267}
                                                height={217}
                                                sizes="(max-width: 815px) 30vw"
                                                className="m-1 transition-opacity opacity-0 duration-[2s]"
                                                onLoadingComplete={(image) => image.classList.remove("opacity-0")}
                                                alt="floor sander"
                                            />
                                            <Image
                                                src={squareStain}
                                                width={267}
                                                height={217}
                                                sizes="(max-width: 815px) 30vw"
                                                className="m-1 transition-opacity opacity-0 duration-[3s]"
                                                onLoadingComplete={(image) => image.classList.remove("opacity-0")}
                                                alt="stained floor"
                                            />
                                        </div>
                                    </div>
                                )}
                                {showContactForm && (
                                    <ContactForm />
                                )}
                            </div>
                        )}

                        {suggestedService === "Contact Bart to find out what your floor needs!" && (
                            <div className="suggest-unsure">
                                <h1 className="text-northOrange">Suggested service is:</h1>
                                <h1 className="text-northBlue">Contact Bart!</h1>
                                {showContactForm ? null : (
                                    <div className="flex flex-col items-center">
                                        <button className="orange-button" onClick={handleContactForm}>set up an estimate</button>
                                    </div>
                                )}
                                {showContactForm && (
                                    <ContactForm />
                                )}
                            </div>
                        )}

                    </div>
                </div>
            </div>

        </div>
    )
}
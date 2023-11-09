"use client";
import React, { useState, useEffect } from "react";
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
    const [suggestedServiceText, setSuggestedServiceText] = useState("");
    const [selectedAnswersStep1, setSelectedAnswersStep1] = useState([]);
    const [selectedAnswersStep2, setSelectedAnswersStep2] = useState([]);
    const [selectedAnswersStep3, setSelectedAnswersStep3] = useState([]);



    const answer1a = "Light wear patterns";
    const answer1b = "Lots of noticeable scratches";
    const answer1c = "Unsure";
    const answer1d = "Finish is dull";
    const answer1e = "There are gray areas on the floors";
    const answer2a = "I see 'cupping' - curling at the edges of boards";
    const answer2b = "There are some broken boards";
    const answer2c = "Not sure";
    const answer2d = "There is some discoloration (stains)";
    const answer2e = "There are deep gouges or dents";
    const answer2f = "The integrity of the boards is intact";
    const answer3a = "I'd like to bring out the natural color of the wood";
    const answer3b = "I'm unsure of what color I want my floors to be";
    const answer3c = "I am interested in a specific color for my floors";
    const answer3d = "I don't want to change the color of my floors";

    const handleNextStep = () => {
        if (step < 5) {
            if (step === 1 && selectedAnswersStep1.length === 0) {
                alert('Please select at least one option in Step 1.');
                return;
            } else if (step === 2 && selectedAnswersStep2.length === 0) {
                alert('Please select at least one option in Step 2.');
                return;
            } else if (step === 3 && selectedAnswersStep3.length !== 1) {
                alert('Please select exactly one option in Step 3.');
                return;
            }
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

        if (selectedAnswers.includes(selectedOption)) {
            setSelectedAnswers(selectedAnswers.filter((option) => option !== selectedOption));
        } else {
            setSelectedAnswers([...selectedAnswers, selectedOption]);
        }

        if (step === 1) {
            if (selectedAnswersStep1.includes(selectedOption)) {
                setSelectedAnswersStep1(selectedAnswersStep1.filter((option) => option !== selectedOption));
            } else {
                setSelectedAnswersStep1([...selectedAnswersStep1, selectedOption]);
            }
        } else if (step === 2) {
            if (selectedAnswersStep2.includes(selectedOption)) {
                setSelectedAnswersStep2(selectedAnswersStep2.filter((option) => option !== selectedOption));
            } else {
                setSelectedAnswersStep2([...selectedAnswersStep2, selectedOption]);
            }
        } else if (step === 3) {
            if (selectedAnswersStep3.includes(selectedOption)) {
                setSelectedAnswersStep3(selectedAnswersStep3.filter((option) => option !== selectedOption));
            } else {
                // Make sure you only allow selecting one checkbox for step 3
                setSelectedAnswersStep3([selectedOption]);
            }
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

        const isRepairTrueSelected = repairTrue.some((option) =>
            selectedAnswers.includes(option)
        );

        const isStainTrueSelected = stainTrue.some((option) =>
            selectedAnswers.includes(option)
        );

        const isUnsureTrueSelected = unsureTrue.some((option) =>
            selectedAnswers.includes(option)
        );

        if (isSandTrueSelected && isRepairTrueSelected && isStainTrueSelected) {
            setSuggestedService("Repair, sand, stain, & finish")
            setSuggestedServiceText("Repair, sand, stain, & finish")
        }
        else if (isSandTrueSelected && isRepairTrueSelected) {
            setSuggestedService("Repair, sand, & finish")
            setSuggestedServiceText("Repair, sand, & finish")
        }
        else if (isBuffTrueSelected && !isBuffFalseSelected) {
            setSuggestedService("Buff & Coat");
            setSuggestedServiceText("Buff & Coat");
        }
        else if (isSandTrueSelected && isStainTrueSelected) {
            setSuggestedService("Sand, stain, & finish")
            setSuggestedServiceText("Sand, stain, & finish")
        }
        else if (isUnsureTrueSelected) {
            setSuggestedService("Contact Bart to find out what your floor needs!");
            setSuggestedServiceText("Contact Bart to find out what your floor needs!");
        }
        else if (isSandTrueSelected) {
            setSuggestedService("Sand & Finish")
            setSuggestedServiceText("Sand & Finish")
        }
        else {
            setSuggestedService("Contact Bart to find out what your floor needs!")
            setSuggestedServiceText("Contact Bart.")
        }

        handleNextStep()

    }

    return (
        <div className="modal-overlay-dark flex">

            <div className="absolute top-5 ml-5 right-5 cursor-pointer  text-white  z-10 hidden sm:block">
                <IoMdClose
                    size={40}
                    onClick={handleShowQuiz} />
            </div>

            <div className="absolute top-2 ml-2 cursor-pointer sm:hidden text-northBlue  z-10">
                <IoMdClose
                    size={30}
                    onClick={handleShowQuiz} />
            </div>

            <div className="all-questions-container flex flex-row overflow-hidden items-center">
                <div className={`quiz-step step-${step}`}>
                    <div className="question-container bg-northBeige flex flex-col items-center justify-center sm:h-[80vh] h-[100vh] p-3">
                        <span className="uppercase font-bold text-xs text-northBlue text-center">
                            1 of 3
                        </span>
                        <h1 className="text-northBlue text-center mx-1">
                            How would you describe your
                            floor's finish (the surface)?
                        </h1>
                        <span className="text-xs sm:text-northBlue text-black text-center m-4 ">
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
                                    <span className="text-xs sm:text-northBlue text-black w-28">
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
                                    <span className="text-xs sm:text-northBlue text-black w-28">
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
                                    <span className="text-xs sm:text-northBlue text-black w-28">
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
                                    <span className="text-xs sm:text-northBlue text-black w-28">
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
                                    <span className="text-xs sm:text-northBlue text-black w-28">
                                        {answer1e}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <button className="quiz-button" onClick={handleNextStep}>next →</button>
                    </div>
                </div>

                <div className={`quiz-step step-${step}`}>
                    <div className="question-container bg-northBeige flex flex-col items-center justify-center sm:h-[80vh] h-[100vh] p-3">
                        <span className="uppercase font-bold text-xs text-northBlue text-center">
                            2 of 3
                        </span>
                        <h1 className="text-northBlue text-center mx-1 ">
                            How is the floor board condition (beneath the surface)?
                        </h1>
                        <span className="text-xs sm:text-northBlue text-black  text-center m-4">
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
                                    <span className="text-xs sm:text-northBlue text-black  w-28">
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
                                    <span className="text-xs sm:text-northBlue text-black  w-28">
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
                                    <span className="text-xs sm:text-northBlue text-black w-28">
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
                                    <span className="text-xs sm:text-northBlue text-black w-28">
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
                                    <span className="text-xs sm:text-northBlue text-black w-28">
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
                                    <span className="text-xs sm:text-northBlue text-black w-28">
                                        {answer2f}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="quiz-button-container flex flex-row">
                            <button className="quiz-button mr-8" onClick={handlePreviousStep}>
                                ← back
                            </button>
                            <button className="quiz-button ml-8" onClick={handleNextStep}>
                                next →
                            </button>
                        </div>
                    </div>
                </div>

                <div className={`quiz-step step-${step}`}>
                    <div className="question-container bg-northBeige flex flex-col items-center justify-center sm:h-[80vh] h-[100vh] p-3">
                        <span className="uppercase font-bold text-xs text-northBlue text-center">
                            3 of 3
                        </span>
                        <h1 className="text-northBlue text-center mx-1">
                            What are your thoughts on the

                            color of your floor?
                        </h1>
                        <span className="text-xs sm:text-northBlue text-black text-center  m-4">
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
                                    <span className="text-xs sm:text-northBlue text-black w-28">
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
                                    <span className="text-xs sm:text-northBlue text-black w-28">
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
                                    <span className="text-xs sm:text-northBlue text-black w-28">
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
                                    <span className="text-xs sm:text-northBlue text-black w-28">
                                        {answer3d}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="quiz-button-container flex flex-row">
                            <button className="quiz-button mr-8" onClick={handlePreviousStep}>
                                ← back
                            </button>
                            <button className="quiz-button ml-8" onClick={handleSuggestService}>
                                service suggestion →
                            </button>
                        </div>
                    </div>
                </div>

                <div className={`quiz-step step-${step}`}>
                    <div className="suggestions-container bg-northLightBlue flex flex-col items-center justify-center sm:h-[80vh] h-[100vh] p-3">

                        {suggestedService === "Buff & Coat" && (
                            <div className="suggest-buff flex flex-col justify-center items-center">
                                <h1 className="text-northOrange text-center sm:mb-2">Suggested service is:</h1>
                                <h1 className="text-northBlue text-center mb-4">Buff & Coat</h1>

                                <div className="flex flex-col items-center">
                                    
                                    <div className="">
                                        <Image
                                            src={buffer}
                                            width={267}
                                            height={217}
                                            className="m-1"
                                            alt="floor buffer"
                                        />
                                    </div>
                                    <div className="flex items-center ">
                                        <button className="orange-button mr-8" onClick={handlePreviousStep}>← back</button>
                                        <button className="orange-button ml-8" onClick={handleNextStep}>set up estimate →</button>
                                    </div>
                                </div>

                            </div>
                        )}

                        {suggestedService === "Sand & Finish" && (
                            <div className="suggest-sand flex flex-col justify-center items-center">
                                <h1 className="text-northOrange text-center sm:mb-2">Suggested service is:</h1>
                                <h1 className="text-northBlue text-center mb-4">Sand & Finish</h1>

                                <div className="flex flex-col items-center">
                                    
                                    <div className="">
                                        <Image
                                            src={drumSander}
                                            width={267}
                                            height={217}
                                            className="m-1"
                                            alt="floor sander"
                                        />
                                    </div>
                                    <div className="flex items-center ">
                                        <button className="orange-button mr-8" onClick={handlePreviousStep}>← back</button>
                                        <button className="orange-button ml-8" onClick={handleNextStep}>set up estimate →</button>
                                    </div>
                                </div>

                            </div>
                        )}

                        {suggestedService === "Repair, sand, & finish" && (
                            <div className="suggest-repair-sand flex flex-col justify-center items-center">
                                <h1 className="text-northOrange text-center sm:mb-2">Suggested service is:</h1>
                                <h1 className="text-northBlue text-center mb-4">Repair, sand, & finish</h1>

                                <div className="flex flex-col items-center">
                                    
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
                                    <div className="flex items-center ">
                                        <button className="orange-button mr-8" onClick={handlePreviousStep}>← back</button>
                                        <button className="orange-button ml-8" onClick={handleNextStep}>set up estimate →</button>
                                    </div>
                                </div>

                            </div>
                        )}

                        {suggestedService === "Sand, stain, & finish" && (
                            <div className="suggest-sand-stain flex flex-col justify-center items-center">
                                <h1 className="text-northOrange text-center sm:mb-2">Suggested service is:</h1>
                                <h1 className="text-northBlue text-center mb-4">Sand, stain, & finish</h1>

                                <div className="flex flex-col items-center">

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
                                    <div className="flex items-center ">
                                        <button className="orange-button mr-8" onClick={handlePreviousStep}>← back</button>
                                        <button className="orange-button ml-8" onClick={handleNextStep}>set up estimate →</button>
                                    </div>
                                </div>

                            </div>
                        )}

                        {suggestedService === "Repair, sand, stain, & finish" && (
                            <div className="suggest-repair-sand-stain flex flex-col justify-center items-center">
                                <h1 className="text-northOrange text-center mb-2">Suggested service is:</h1>
                                <h1 className="text-northBlue text-center mb-4">Repair, sand, stain, & finish</h1>

                                <div className="flex flex-col items-center">

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
                                            className="m-1 transition-opacity opacity-0 duration-[3s] "
                                            onLoadingComplete={(image) => image.classList.remove("opacity-0")}
                                            alt="stained floor"
                                        />
                                    </div>
                                </div>
                                <div className="flex items-center ">
                                    <button className="orange-button mr-8" onClick={handlePreviousStep}>← back</button>
                                    <button className="orange-button ml-8" onClick={handleNextStep}>set up estimate →</button>
                                </div>
                            </div>
                        )}

                        {suggestedService === "Contact Bart to find out what your floor needs!" && (
                            <div className="suggest-unsure p-5">
                                <h1 className="text-northOrange">Suggested service is:</h1>
                                <h1 className="text-northBlue text-center my-4">Contact Bart!</h1>

                                <div className="flex items-center justify-center">
                                    <button className="orange-button mr-8" onClick={handlePreviousStep}>← back</button>

                                    <button className="orange-button ml-8" onClick={handleNextStep}>set up estimate →</button>
                                </div>

                            </div>
                        )}

                    </div>
                </div>
                <div className={`quiz-step step-${step}`}>
                    <ContactForm
                        handleShowQuiz={handleShowQuiz}
                        suggestedServiceText={suggestedServiceText}
                        setSuggestedServiceText={setSuggestedServiceText}
                        handlePreviousStep={handlePreviousStep}
                    />
                </div>
            </div>

        </div>
    )
}
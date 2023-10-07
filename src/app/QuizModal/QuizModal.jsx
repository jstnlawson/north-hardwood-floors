"use client";
import React, { useState } from "react";
import "./QuizModal.css";



export default function QuizModal({ handleShowQuiz }) {

    const [step, setStep] = useState(1);
    const [selectedAnswers, setSelectedAnswers] = useState([]);
    const [suggestedService, setSuggestedService] = useState("");

    const answer1a = "Light wear patterns";
    const answer1b = "Lots of noticeable scratches";
    const answer1c = "Unsure";
    const answer1d = "Finish is dull";
    const answer1e = "There are gray areas on the floors";
    const answer2a = "I see some 'cupping' - curling up at the edges of boards";
    const answer2b = "There are some broken boards";
    const answer2c = "Unsure";
    const answer2d = "There is some dark discoloration (stains) in areas";
    const answer2e = "There are some deep gouges or dents in some boards";
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

    const handleSuggestService = () => {
        const buffTrue = [answer1a, answer1c, answer1d, answer2c, answer2f, answer3a, answer3b, answer3d];
        const buffFalse = [answer1b, answer1e, answer2a, answer2b, answer2d, answer2e, answer3c];

        // Check if any answers from buffTrue are selected
        const isBuffTrueSelected = buffTrue.some((option) =>
            selectedAnswers.includes(option)
        );

        // Check if none of the answers from buffFalse are selected
        const isBuffFalseSelected = !buffFalse.some((option) =>
            selectedAnswers.includes(option)
        );

        if (isBuffTrueSelected && isBuffFalseSelected) {
            setSuggestedService("Buff & Coat");
        }

        handleNextStep()
    }

    return (
        <div className="modal-overlay">
            <div className="questions-container flex flex-row overflow-hidden mt-20">
                <div className={`quiz-step step-${step}`}>
                    <div className="question-one-container bg-northBeige flex flex-col items-center justify-center pb-20 pt-20">
                        <span className="uppercase font-bold text-xs text-northBlue text-center">
                            1 of 3
                        </span>
                        <h1 className="text-northBlue text-center">
                            How would you describe your
                            <br />
                            floor's finish (the surface)?
                        </h1>
                        <span className="text-xs text-northBlue text-center m-4">
                            click all that apply
                        </span>
                        <div className="flex flex-row">
                            <div className="flex flex-col mr-24">
                                <div className="flex flex-row m-4">
                                    <input type="checkbox" className="quiz-checkbox" />
                                    <span className="text-xs text-northBlue">
                                        {answer1a}
                                    </span>
                                </div>
                                <div className="flex flex-row m-4">
                                    <input type="checkbox" className="quiz-checkbox" />
                                    <span className="text-xs text-northBlue">
                                        {answer1b}
                                    </span>
                                </div>
                                <div className="flex flex-row m-4">
                                    <input type="checkbox" className="quiz-checkbox" />
                                    <span className="text-xs text-northBlue">
                                        {answer1c}
                                    </span>
                                </div>
                            </div>
                            <div className="flex flex-col ml-24">
                                <div className="flex flex-row m-4">
                                    <input type="checkbox" className="quiz-checkbox" />
                                    <span className="text-xs text-northBlue">
                                        {answer1d}
                                    </span>
                                </div>
                                <div className="flex flex-row m-4">
                                    <input type="checkbox" className="quiz-checkbox" />
                                    <span className="text-xs text-northBlue">
                                        {answer1e}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <button className="quiz-button" onClick={handleNextStep}>next question →</button>
                    </div>
                </div>

                <div className={`quiz-step step-${step}`}>
                    <div className="question-two-container bg-northBeige flex flex-col items-center justify-center pb-20 pt-20">
                        <span className="uppercase font-bold text-xs text-northBlue text-center">
                            2 of 3
                        </span>
                        <h1 className="text-northBlue text-center">
                            How is the condition of the floor
                            <br />
                            boards (beyond the surface)?
                        </h1>
                        <span className="text-xs text-northBlue text-center m-4">
                            click all that apply
                        </span>
                        <div className="flex flex-row">
                            <div className="flex flex-col mr-24">
                                <div className="flex flex-row m-4">
                                    <input type="checkbox" className="quiz-checkbox" />
                                    <span className="text-xs text-northBlue">
                                        {answer2a}
                                    </span>
                                </div>
                                <div className="flex flex-row m-4">
                                    <input type="checkbox" className="quiz-checkbox" />
                                    <span className="text-xs text-northBlue">
                                        {answer2b}
                                    </span>
                                </div>
                                <div className="flex flex-row m-4">
                                    <input type="checkbox" className="quiz-checkbox" />
                                    <span className="text-xs text-northBlue">
                                        {answer2c}
                                    </span>
                                </div>
                            </div>
                            <div className="flex flex-col ml-24">
                                <div className="flex flex-row m-4">
                                    <input type="checkbox" className="quiz-checkbox" />
                                    <span className="text-xs text-northBlue">
                                        {answer2d}
                                    </span>
                                </div>
                                <div className="flex flex-row m-4">
                                    <input type="checkbox" className="quiz-checkbox" />
                                    <span className="text-xs text-northBlue">
                                        {answer2e}
                                    </span>
                                </div>
                                <div className="flex flex-row m-4">
                                    <input type="checkbox" className="quiz-checkbox" />
                                    <span className="text-xs text-northBlue">
                                        {answer2f}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="quiz-button-container flex flex-row">
                            <button className="quiz-button" onClick={handlePreviousStep}>
                                ← previous question
                            </button>
                            <button className="quiz-button" onClick={handleNextStep}>
                                next question →
                            </button>
                        </div>
                    </div>
                </div>

                <div className={`quiz-step step-${step}`}>
                    <div className="question-two-container bg-northBeige flex flex-col items-center justify-center pb-20 pt-20">
                        <span className="uppercase font-bold text-xs text-northBlue text-center">
                            3 of 3
                        </span>
                        <h1 className="text-northBlue text-center">
                            What are your thoughts on the
                            <br />
                            color of your floor?
                        </h1>
                        <span className="text-xs text-northBlue text-center m-4">
                            choose one
                        </span>
                        <div className="flex flex-row">
                            <div className="flex flex-col mr-24">
                                <div className="flex flex-row m-4">
                                    <input type="checkbox" className="quiz-checkbox" />
                                    <span className="text-xs text-northBlue">
                                        {answer3a}
                                    </span>
                                </div>
                                <div className="flex flex-row m-4">
                                    <input type="checkbox" className="quiz-checkbox" />
                                    <span className="text-xs text-northBlue">
                                        {answer3b}
                                    </span>
                                </div>
                            </div>
                            <div className="flex flex-col ml-24">
                                <div className="flex flex-row m-4">
                                    <input type="checkbox" className="quiz-checkbox" />
                                    <span className="text-xs text-northBlue">
                                        {answer3c}
                                    </span>
                                </div>
                                <div className="flex flex-row m-4">
                                    <input type="checkbox" className="quiz-checkbox" />
                                    <span className="text-xs text-northBlue">
                                        {answer3d}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="quiz-button-container flex flex-row">
                            <button className="quiz-button" onClick={handlePreviousStep}>
                                ← previous question
                            </button>
                            <button className="orange-button" onClick={handleSuggestService}>
                                see your service suggestion →
                            </button>
                        </div>
                    </div>
                </div>

                <div className={`quiz-step step-${step}`}>
                    <div className="suggestions-container bg-northBeige flex flex-col items-center justify-center pb-20 pt-20">

                        {suggestedService === "Buff & Coat" && (
                            <div className="suggest-buff">
                                <h1 className="northOrange">Your suggested service is:</h1>
                                <h1 className="northBlue">Buff & Coat</h1>
                            </div>
                        )}

                        {suggestedService === "Sand & Finish" && (
                            <div className="suggest-sand">
                                <h1 className="northOrange">Your suggested service is:</h1>
                                <h1 className="northBlue">Sand & Finish</h1>
                            </div>
                        )}

                        {suggestedService === "Repair, sand, & finish" && (
                            <div className="suggest-repair-sand">
                                <h1 className="northOrange">Your suggested service is:</h1>
                                <h1 className="northBlue">Repair, sand, & finish</h1>
                            </div>
                        )}

                        {suggestedService === "Sand, stain, & finish" && (
                            <div className="suggest-sand-stain">
                                <h1 className="northOrange">Your suggested service is:</h1>
                                <h1 className="northBlue">Sand, stain, & finish</h1>
                            </div>
                        )}

                        {suggestedService === "Repair, sand, stain, & finish" && (
                            <div className="suggest-repair-sand-stain">
                                <h1 className="northOrange">Your suggested service is:</h1>
                                <h1 className="northBlue">Repair, sand, stain, & finish</h1>
                            </div>
                        )}

                        {suggestedService === "Contact Bart to find out what your floor needs!" && (
                            <div className="suggest-unsure">
                                <h1 className="northOrange">It seems like you can use some help.</h1>
                                <h1 className="northBlue">Contact Bart to find out what your floor needs!</h1>
                            </div>
                        )}
                    </div>
                </div>
            </div>

        </div>
    )
}
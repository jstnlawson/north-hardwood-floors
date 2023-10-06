"use client";
import React, { useState } from "react";
import "./QuizModal.css";



export default function QuizModal() {

    const [step, setStep] = useState(1);

    const handleNextStep = () => {
        if (step < 3) {
            setStep(step + 1);
        }
    };

    const handlePreviousStep = () => {
        if (step > 1) {
            setStep(step - 1);
        }
    };

    return (
        <div className="questions-container flex flex-row overflow-hidden">
            <div className={`quiz-step step-${step}`}>
                <div className="question-one-container bg-northBeige flex flex-col items-center justify-center pb-20">
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
                                    Light wear patterns
                                </span>
                            </div>
                            <div className="flex flex-row m-4">
                                <input type="checkbox" className="quiz-checkbox" />
                                <span className="text-xs text-northBlue">
                                    Lots of noticeable
                                    <br />
                                    scratches
                                </span>
                            </div>
                            <div className="flex flex-row m-4">
                                <input type="checkbox" className="quiz-checkbox" />
                                <span className="text-xs text-northBlue">
                                    Unsure
                                </span>
                            </div>
                        </div>
                        <div className="flex flex-col ml-24">
                            <div className="flex flex-row m-4">
                                <input type="checkbox" className="quiz-checkbox" />
                                <span className="text-xs text-northBlue">
                                    Finish is dull
                                </span>
                            </div>
                            <div className="flex flex-row m-4">
                                <input type="checkbox" className="quiz-checkbox" />
                                <span className="text-xs text-northBlue">
                                    There are gray areas on
                                    <br />
                                    the floors
                                </span>
                            </div>
                        </div>
                    </div>
                    <button className="quiz-button" onClick={handleNextStep}>next question →</button>
                </div>
            </div>

            <div className={`quiz-step step-${step}`}>
                <div className="question-two-container bg-northBeige flex flex-col items-center justify-center pb-20">
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
                                    I see some "cupping" -
                                    <br />
                                    curling up at the edges of
                                    <br />
                                    boards
                                </span>
                            </div>
                            <div className="flex flex-row m-4">
                                <input type="checkbox" className="quiz-checkbox" />
                                <span className="text-xs text-northBlue">
                                    There are some broken
                                    <br />
                                    boards
                                </span>
                            </div>
                            <div className="flex flex-row m-4">
                                <input type="checkbox" className="quiz-checkbox" />
                                <span className="text-xs text-northBlue">
                                    Unsure
                                </span>
                            </div>
                        </div>
                        <div className="flex flex-col ml-24">
                            <div className="flex flex-row m-4">
                                <input type="checkbox" className="quiz-checkbox" />
                                <span className="text-xs text-northBlue">
                                    There is some dark
                                    <br />
                                    discoloration (stains) in
                                    <br />
                                    areas
                                </span>
                            </div>
                            <div className="flex flex-row m-4">
                                <input type="checkbox" className="quiz-checkbox" />
                                <span className="text-xs text-northBlue">
                                    There are some deep
                                    <br />
                                    gouges or dents in some
                                    <br />
                                    boards
                                </span>
                            </div>
                            <div className="flex flex-row m-4">
                                <input type="checkbox" className="quiz-checkbox" />
                                <span className="text-xs text-northBlue">
                                    The integrity of the
                                    <br />
                                    boards seems intact
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
                <div className="question-two-container bg-northBeige flex flex-col items-center justify-center pb-20">
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
                                    I'd like to bring out the 
                                    <br />
                                    natural color of the wood
                                </span>
                            </div>
                            <div className="flex flex-row m-4">
                                <input type="checkbox" className="quiz-checkbox" />
                                <span className="text-xs text-northBlue">
                                    I'm unsure of what color I
                                    <br />
                                    want my floors to be
                                </span>
                            </div>
                        </div>
                        <div className="flex flex-col ml-24">
                            <div className="flex flex-row m-4">
                                <input type="checkbox" className="quiz-checkbox" />
                                <span className="text-xs text-northBlue">
                                    I am interested in a specific
                                    <br />
                                    stain color for my floors
                                </span>
                            </div>
                            <div className="flex flex-row m-4">
                                <input type="checkbox" className="quiz-checkbox" />
                                <span className="text-xs text-northBlue">
                                    I don't want to change the
                                    <br />
                                    color of my floors
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="quiz-button-container flex flex-row">
                        <button className="quiz-button" onClick={handlePreviousStep}>
                            ← previous question
                        </button>
                        <button className="orange-button">
                            see your service suggestion →
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
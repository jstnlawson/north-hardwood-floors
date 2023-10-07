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
    const answer2c = "Not sure";
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
        const buffFalse = [answer1b, answer1e, answer2a, answer2b, answer2d, answer2e, answer3c];
        const sandTrue = [answer1b, answer1e, answer2a, answer2b, answer2c, answer2d, answer2e, answer2f, answer3a, answer3b, answer3c, answer3d];
        const sandFalse = [answer1a, answer1c, answer1d];
        const repairTrue = [answer2a, answer2b, answer2d, answer2e];
        const stainTrue = [answer3c];
        

        const isBuffTrueSelected = buffTrue.some((option) =>
            selectedAnswers.includes(option)
        );
        const isBuffFalseSelected = buffFalse.some((option) =>
            selectedAnswers.includes(option)
        );

        const isSandTrueSelected = sandTrue.some((option) =>
            selectedAnswers.includes(option)
        );
        const isSandFalseSelected = sandFalse.some((option) =>
            selectedAnswers.includes(option)
        );

        const isRepairTrueSelected = repairTrue.some((option) =>
            selectedAnswers.includes(option)
        );

        const isStainTrueSelected = stainTrue.some((option) =>
            selectedAnswers.includes(option)
        );
        

        if (isBuffTrueSelected && !isBuffFalseSelected) {
            setSuggestedService("Buff & Coat");
        } 
        if (isSandTrueSelected && !isSandFalseSelected) {
            setSuggestedService("Sand & Finish")
        } 
        if (isSandTrueSelected && !isSandFalseSelected && isRepairTrueSelected) {
            setSuggestedService("Repair, sand, & finish")
        } 
        if (isSandTrueSelected && !isSandFalseSelected && isRepairTrueSelected && isStainTrueSelected) {
            setSuggestedService("Repair, sand, stain, & finish")
        } 
        else {setSuggestedService("Contact Bart to find out what your floor needs!")}

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
                                    <input 
                                        type="checkbox" 
                                        className="quiz-checkbox" 
                                        value={answer1a} // Set the value to the corresponding answer
                                        checked={selectedAnswers.includes(answer1a)} // Check if the answer is already selected
                                        onChange={handleCheckboxChange}/>
                                    <span className="text-xs text-northBlue">
                                        {answer1a}
                                    </span>
                                </div>
                                <div className="flex flex-row m-4">
                                    <input 
                                        type="checkbox" 
                                        className="quiz-checkbox" 
                                        value={answer1b} 
                                        checked={selectedAnswers.includes(answer1b)} 
                                        onChange={handleCheckboxChange}/>
                                    <span className="text-xs text-northBlue">
                                        {answer1b}
                                    </span>
                                </div>
                                <div className="flex flex-row m-4">
                                    <input
                                        type="checkbox" 
                                        className="quiz-checkbox" 
                                        value={answer1c} 
                                        checked={selectedAnswers.includes(answer1c)} 
                                        onChange={handleCheckboxChange}/>
                                    <span className="text-xs text-northBlue">
                                        {answer1c}
                                    </span>
                                </div>
                            </div>
                            <div className="flex flex-col ml-24">
                                <div className="flex flex-row m-4">
                                    <input 
                                        type="checkbox" 
                                        className="quiz-checkbox" 
                                        value={answer1d} 
                                        checked={selectedAnswers.includes(answer1d)} 
                                        onChange={handleCheckboxChange}/>
                                    <span className="text-xs text-northBlue">
                                        {answer1d}
                                    </span>
                                </div>
                                <div className="flex flex-row m-4">
                                    <input 
                                        type="checkbox" 
                                        className="quiz-checkbox" 
                                        value={answer1e} 
                                        checked={selectedAnswers.includes(answer1e)} 
                                        onChange={handleCheckboxChange}/>
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
                                    <input 
                                        type="checkbox" 
                                        className="quiz-checkbox" 
                                        value={answer2a} 
                                        checked={selectedAnswers.includes(answer2a)} 
                                        onChange={handleCheckboxChange}/>
                                    <span className="text-xs text-northBlue">
                                        {answer2a}
                                    </span>
                                </div>
                                <div className="flex flex-row m-4">
                                    <input 
                                        type="checkbox" 
                                        className="quiz-checkbox" 
                                        value={answer2b} 
                                        checked={selectedAnswers.includes(answer2b)} 
                                        onChange={handleCheckboxChange}/>
                                    <span className="text-xs text-northBlue">
                                        {answer2b}
                                    </span>
                                </div>
                                <div className="flex flex-row m-4">
                                    <input 
                                        type="checkbox" 
                                        className="quiz-checkbox" 
                                        value={answer2c} 
                                        checked={selectedAnswers.includes(answer2c)} 
                                        onChange={handleCheckboxChange}/>
                                    <span className="text-xs text-northBlue">
                                        {answer2c}
                                    </span>
                                </div>
                            </div>
                            <div className="flex flex-col ml-24">
                                <div className="flex flex-row m-4">
                                    <input 
                                        type="checkbox" 
                                        className="quiz-checkbox" 
                                        value={answer2d} 
                                        checked={selectedAnswers.includes(answer2d)} 
                                        onChange={handleCheckboxChange}/>
                                    <span className="text-xs text-northBlue">
                                        {answer2d}
                                    </span>
                                </div>
                                <div className="flex flex-row m-4">
                                    <input 
                                        type="checkbox" 
                                        className="quiz-checkbox" 
                                        value={answer2e} 
                                        checked={selectedAnswers.includes(answer2e)} 
                                        onChange={handleCheckboxChange}/>
                                    <span className="text-xs text-northBlue">
                                        {answer2e}
                                    </span>
                                </div>
                                <div className="flex flex-row m-4">
                                    <input 
                                        type="checkbox" 
                                        className="quiz-checkbox" 
                                        value={answer2f} 
                                        checked={selectedAnswers.includes(answer2f)} 
                                        onChange={handleCheckboxChange}/>
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
                                    <input 
                                        type="checkbox" 
                                        className="quiz-checkbox" 
                                        value={answer3a} 
                                        checked={selectedAnswers.includes(answer3a)} 
                                        onChange={handleCheckboxChange}/>
                                    <span className="text-xs text-northBlue">
                                        {answer3a}
                                    </span>
                                </div>
                                <div className="flex flex-row m-4">
                                    <input 
                                        type="checkbox" 
                                        className="quiz-checkbox" 
                                        value={answer3b} 
                                        checked={selectedAnswers.includes(answer3b)} 
                                        onChange={handleCheckboxChange}/>
                                    <span className="text-xs text-northBlue">
                                        {answer3b}
                                    </span>
                                </div>
                            </div>
                            <div className="flex flex-col ml-24">
                                <div className="flex flex-row m-4">
                                    <input 
                                        type="checkbox" 
                                        className="quiz-checkbox" 
                                        value={answer3c} 
                                        checked={selectedAnswers.includes(answer3c)} 
                                        onChange={handleCheckboxChange}/>
                                    <span className="text-xs text-northBlue">
                                        {answer3c}
                                    </span>
                                </div>
                                <div className="flex flex-row m-4">
                                    <input 
                                        type="checkbox" 
                                        className="quiz-checkbox" 
                                        value={answer3d} 
                                        checked={selectedAnswers.includes(answer3d)} 
                                        onChange={handleCheckboxChange}/>
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
                                <h1 className="text-northOrange">Your suggested service is:</h1>
                                <h1 className="text-northBlue">Buff & Coat</h1>
                            </div>
                        )}

                        {suggestedService === "Sand & Finish" && (
                            <div className="suggest-sand">
                                <h1 className="text-northOrange">Your suggested service is:</h1>
                                <h1 className="text-northBlue">Sand & Finish</h1>
                            </div>
                        )}

                        {suggestedService === "Repair, sand, & finish" && (
                            <div className="suggest-repair-sand">
                                <h1 className="text-northOrange">Your suggested service is:</h1>
                                <h1 className="text-northBlue">Repair, sand, & finish</h1>
                            </div>
                        )}

                        {suggestedService === "Sand, stain, & finish" && (
                            <div className="suggest-sand-stain">
                                <h1 className="text-northOrange">Your suggested service is:</h1>
                                <h1 className="text-northBlue">Sand, stain, & finish</h1>
                            </div>
                        )}

                        {suggestedService === "Repair, sand, stain, & finish" && (
                            <div className="suggest-repair-sand-stain">
                                <h1 className="text-northOrange">Your suggested service is:</h1>
                                <h1 className="text-northBlue">Repair, sand, stain, & finish</h1>
                            </div>
                        )}

                        {suggestedService === "Contact Bart to find out what your floor needs!" && (
                            <div className="suggest-unsure">
                                <h1 className="text-northOrange">It seems like you can use some help.</h1>
                                <h1 className="text-northBlue">Contact Bart to find out what your floor needs!</h1>
                            </div>
                        )}

                    </div>
                </div>
            </div>

        </div>
    )
}
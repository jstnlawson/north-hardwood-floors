"use client";
import React, { useState } from "react";



export default function QuizModal() {

    return (
        <div>
            <div className="question-one-container bg-northBeige flex flex-col items-center justify-center">
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
                            <input type="checkbox" className="quiz-checkbox"/>
                            <span className="text-xs text-northBlue">Light wear patterns</span>
                        </div>
                        <div className="flex flex-row m-4">
                            <input type="checkbox" className="quiz-checkbox"/>
                            <span className="text-xs text-northBlue">Light wear patterns</span>
                        </div>
                        <div className="flex flex-row m-4">
                            <input type="checkbox" className="quiz-checkbox"/>
                            <span className="text-xs text-northBlue">Light wear patterns</span>
                        </div>
                    </div>
                    <div className="flex flex-col ml-24">
                        <div className="flex flex-row m-4">
                            <input type="checkbox" className="quiz-checkbox"/>
                            <span className="text-xs text-northBlue">Light wear patterns</span>
                        </div>
                        <div className="flex flex-row m-4">
                            <input type="checkbox" className="quiz-checkbox"/>
                            <span className="text-xs text-northBlue">Light wear patterns</span>
                        </div>
                        <div className="flex flex-row m-4">
                            <input type="checkbox" className="quiz-checkbox"/>
                            <span className="text-xs text-northBlue">Light wear patterns</span>
                        </div>
                    </div>
                </div>
                <button className="quiz-button">next question →</button>
            </div>

        </div>
    )
}
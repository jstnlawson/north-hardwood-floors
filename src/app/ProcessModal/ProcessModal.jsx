'use client';
import React, { useState } from "react";
import "./ProcessModal.css";
import Prep from "./Prep";
import DuringConstruction from "./DuringConstruction";
import DryTime from "./DryTime";


export default function ProcessModal () {

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
        <div className="modal-overlay">
            <div className="steps-container flex flex-row overflow-hidden">
            <div className={`quiz-step step-${step}`}>
                <Prep handleNextStep={handleNextStep}/>
            </div>
            <div className={`quiz-step step-${step}`}>
                <DuringConstruction handleNextStep={handleNextStep}/>
            </div>
            <div className={`quiz-step step-${step}`}>
                <DryTime />
            </div>
            </div>
        </div>
    )
}
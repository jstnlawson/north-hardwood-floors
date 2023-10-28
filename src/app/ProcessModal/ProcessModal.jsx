'use client';
import React, { useState } from "react";
import { IoMdClose } from 'react-icons/io';
import "./ProcessModal.css";
import Prep from "./Prep";
import DuringConstruction from "./DuringConstruction";
import DryTime from "./DryTime";


export default function ProcessModal({ handleShowProcess }) {

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


        <div className="modal-overlay-dark">

            <div className="absolute  top-4 ml-5 sm:right-5 cursor-pointer sm:text-white text-northBlue z-10" onClick={handleShowProcess}>
                <IoMdClose
                    size={30}
                     />
            </div>

            <div className="steps-container flex flex-row overflow-hidden">



                <div className={`process-steps step-${step}`}>
                    <Prep
                        handleNextStep={handleNextStep}
                        handleShowProcess={handleShowProcess} />
                </div>
                <div className={`process-steps step-${step}`}>
                    <DuringConstruction
                        handleNextStep={handleNextStep}
                        handlePreviousStep={handlePreviousStep}
                        handleShowProcess={handleShowProcess} />
                </div>
                <div className={`process-steps step-${step}`}>
                    <DryTime 
                    handlePreviousStep={handlePreviousStep}
                    handleShowProcess={handleShowProcess} />
                </div>
            </div>
        </div>
    )
}
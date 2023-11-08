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

            <div className="absolute  top-5 ml-5 right-5 cursor-pointer  text-white z-10 hidden sm:block" >
                <IoMdClose
                    size={40}
                    onClick={handleShowProcess}
                />
            </div>

            <div className="absolute top-2 ml-2 cursor-pointer sm:hidden text-northBlue  z-10">
                <IoMdClose
                    size={30}
                    onClick={handleShowProcess} 
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
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

            <div className="absolute right-5 top-15 mt-4 cursor-pointer z-10" onClick={handleShowProcess}>
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
                        handleShowProcess={handleShowProcess} />
                </div>
                <div className={`process-steps step-${step}`}>
                    <DryTime handleShowProcess={handleShowProcess} />
                </div>
            </div>
        </div>
    )
}
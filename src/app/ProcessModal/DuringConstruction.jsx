import React from "react";
import Image from "next/image";
import { IoMdClose } from 'react-icons/io';
import isoHeadphones1 from 'public/images/isoHeadphones1.jpeg';
import isoHeadphones2 from 'public/images/isoHeadphones2.jpeg';
import "./ProcessModal.css"

export default function DuringConstruction({ handleNextStep, handlePreviousStep, handleShowProcess}) {

    return (
        <div className="bg-northLightBlue flex flex-col justify-center items-center w-screen sm:h-[80vh] h-[100vh] p-3">
            <div>
                <h2 className="contact-heading text-northBlue ml-4 sm:ml-0 text-sm sm:mt-4">STEP 2</h2>
                <h1 className="text-northBlue sm:mb-4">During Construction</h1>
            </div>
            <div className="flex flex-row justify-around">
                <div>
                    <Image
                        src={isoHeadphones1}
                        width={350}
                        height={350}
                        alt="Picture of person putting on headphones"
                        className="sm:m-1 sm:mr-4 sm:p-0 pl-6 pr-3 transition-opacity opacity-0 duration-[1s]"
                        onLoadingComplete={(image) => image.classList.remove("opacity-0")}

                    />
                </div>
                <div>
                    <Image
                        src={isoHeadphones2}
                        width={350}
                        height={350}
                        alt="Picture of person with headphones on"
                        className="sm:m-1 sm:mr-4 sm:p-0 pl-3 pr-6 transition-opacity opacity-0 duration-[3s]"
                        onLoadingComplete={(image) => image.classList.remove("opacity-0")}
                    />
                </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-around">
                <div className="sm:w-1/3 p-1 sm:p-7">
                    <h2 className="text-northOrange">Install and Sanding:</h2>
                    <div className="text-northBlue text-sm">
                        <p className="paragraph-wrap">
                            This is the loud/dusty part and lasts 2-3 days for most projects. The floor can be walked on
                            freely at this stage.
                        </p>
                    </div>
                </div>
                <div className="sm:w-1/3 p-1 sm:p-7">
                    <h2 className="text-northOrange">Fine Sanding:</h2>
                    <div className="text-northBlue text-sm">
                        <p className="paragraph-wrap">
                            It looks like we're ready to start coating but there's 
                            still lot's to do before the final stage. This usually lasts 1-2 days.
                        </p>
                    </div>
                </div>
                <div className="sm:w-1/3 p-1 sm:p-7">
                    <h2 className="text-northOrange">Applying stain and finish:</h2>
                    <div className="text-northBlue text-sm">
                        <p className="paragraph-wrap">
                            Between coats no one can be on the floors for 4 to 12 hours. Bart will
                            give you an outline of the coating schedule and keep you up to date as it goes. Typical timeline 2-3 days.
                        </p>
                    </div>
                </div>
            </div>
            <div className=" flex mb-6">
            <button className="orange-button mr-8" onClick={handlePreviousStep}>← back</button>
            <button className="orange-button ml-8" onClick={handleNextStep}>next →</button>
            </div>
        </div>
    )
}
"use client";
import React, { useState, useEffect } from "react";
import QuizModal from "../QuizModal/QuizModal";
import Image from "next/image";
import drumSander from 'public/images/drumSander.png';
import buffer from 'public/images/buffer.png';
import weave from 'public/images/weave.jpeg';
import "./Quiz.css"


export default function Quiz({ hideHeader, setHideHeader }) {

    const [showQuiz, setShowQuiz] = useState(false);

    const handleShowQuiz = () => {
        setShowQuiz(!showQuiz)
        setHideHeader(!hideHeader)
    }

    return (
        <div id="quiz" className="quiz-container flex items-center justify-center p-10 bg-northBeige w-100">
            <div className="flex flex-col  items-center">
                {/* <div className="guidance-container flex justify-center items-center">
                    <h2 className="text-northBlue text-center mb-10">TH<span className="the-guidance">E GUIDAN</span>CE</h2>
                </div> */}
            <div className="images-text-container flex flex-col items-center">
                <div className="flex flex-row ">
                    <div>
                        <Image
                            src={drumSander}
                            // width={200}
                            // height={200}
                            alt='floor sander'
                            className="md:m-1"
                        />
                    </div>
                    <div>
                        <Image
                            src={buffer}
                            // width={200}
                            // height={200}
                            
                            alt='floor buffer'
                            className="md:m-1"
                        />
                    </div>
                    <div>
                        <Image
                            src={weave}
                            height={217}
                            alt='floor repair'
                            className="md:m-1 "
                        />
                    </div>
                </div>

                <div className="flex flex-row ">
                    <div className="quiz-text-container flex flex-col items-center  p-6 bg-white">
                        <h1 className="text-northBlue text-center">
                            Unsure of what service you need?
                        </h1>
                        <p className="text-northBlue text-center mt-1 mb-1">
                            Answer some questions about your floors to receive
                            
                            
                            a personalized service suggestion.
                            
                            <br />
                            
                            <span className="text-sm">
                            An in-home consultation will be needed to know exactly what your
                            
                            
                            floor requires but this may get you started (and, it's fun!).
                            </span>
                        </p>
                        <button className="orange-button" onClick={handleShowQuiz}>service suggestion quiz →</button>
                    </div>
                </div>
            </div>
            </div>
            {showQuiz &&
                <QuizModal handleShowQuiz={handleShowQuiz} />}
        </div>
    )
}
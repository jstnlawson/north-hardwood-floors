import React from "react";


export default function Quiz() {



    return(
        <div className="quiz-container flex flex-col items-center justify-center p-10 bg-northBeige w-100">
            <h1 className="text-northBlue">
                Unsure of what service you need?
            </h1>
            <p className="text-northBlue text-center mt-1 mb-1">
                Answer some questions about your floors to receive 
                <br />
                a personalized service suggestion.
            </p>
            <p className="text-northBlue text-xs text-center mt-1 mb-1">
                An in-home consultation will be needed to know exactly what your 
                <br />
                floor requires but this may get you started (and, it's fun!).
            </p>
            <button className="orange-button">take the service suggestion quiz →</button>
        </div>
    )
}
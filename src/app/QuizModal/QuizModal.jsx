"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import buffer from "public/images/buffer.png";
import drumSander from "public/images/drumSander.png";
import weave from "public/images/weave.jpeg";
import squareStain from "public/images/squareStain.jpeg";
import "./QuizModal.css";
import ContactForm from "../ContactForm/ContactForm";
import { IoMdClose } from "react-icons/io";

export default function QuizModal({ handleShowQuiz }) {
  const [step, setStep] = useState(1);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [suggestedService, setSuggestedService] = useState("");
  const [suggestedServiceText, setSuggestedServiceText] = useState("");
  const [selectedAnswersStep1, setSelectedAnswersStep1] = useState([]);
  const [selectedAnswersStep2, setSelectedAnswersStep2] = useState([]);
  const [selectedAnswersStep3, setSelectedAnswersStep3] = useState([]);

  const answer1a = "Light wear patterns";
  const answer1b = "Lots of noticeable scratches";
  const answer1c = "Unsure";
  const answer1d = "Finish is dull";
  const answer1e = "There are gray areas on the floors";
  const answer2a = "I see 'cupping' - curling at the edges of boards";
  const answer2b = "There are some broken boards";
  const answer2c = "Not sure";
  const answer2d = "There is some discoloration (stains)";
  const answer2e = "There are deep gouges or dents";
  const answer2f = "The integrity of the boards is intact";
  const answer3a = "I'd like to bring out the natural color of the wood";
  const answer3b = "I'm unsure of what color I want my floors to be";
  const answer3c = "I am interested in a specific color for my floors";
  const answer3d = "I don't want to change the color of my floors";

  const handleCheckboxChange = (event) => {
    if (event && event.target) {
    const selectedOption = event.target.value;

    setSelectedAnswers((prevSelected) => {
      const updatedSelected = prevSelected.includes(selectedOption)
        ? prevSelected.filter((option) => option !== selectedOption)
        : [...prevSelected, selectedOption];

      if (step === 1) {
        setSelectedAnswersStep1(updatedSelected);
      } else if (step === 2) {
        setSelectedAnswersStep2(updatedSelected);
      } else if (step === 3) {
        setSelectedAnswersStep3([selectedOption]);
      }

      return updatedSelected;
    });
}
  };

  const handleNextStep = () => {
    if (step < 5) {
      // console.log(`Step: ${step}`);
      // console.log(`Selected Answers Step 2: ${selectedAnswersStep2}`);
      // console.log(`Selected Answers Step 3: ${selectedAnswersStep3}`);
      if (step === 1 && selectedAnswersStep1.length === 0) {
        alert("Please select at least one option in Step 1.");
        return;
      } else if (step === 2 && selectedAnswersStep2.length === 0) {
        alert("Please select at least one option in Step 2.");
        return;
      } else if (step === 3 && selectedAnswersStep3.length !== 1) {
        alert("Please select exactly one option in Step 3.");
        return;
      }
      setStep(step + 1);
    }
  };

  const handlePreviousStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleSuggestService = () => {
    const buffTrue = [
      answer1a,
      answer1c,
      answer1d,
      answer2c,
      answer2f,
      answer3a,
      answer3b,
      answer3d,
    ];
    const buffFalse = [
      answer1b,
      answer1c,
      answer1e,
      answer2a,
      answer2b,
      answer2d,
      answer2e,
      answer3c,
    ];
    const sandTrue = [
      answer1a,
      answer1b,
      answer1c,
      answer1d,
      answer1e,
      answer2a,
      answer2b,
      answer2c,
      answer2d,
      answer2e,
      answer2f,
      answer3a,
      answer3b,
      answer3c,
      answer3d,
    ];
    const repairTrue = [answer2a, answer2b, answer2d, answer2e];
    const stainTrue = [answer3c];
    const unsureTrue = [answer1c, answer2c, answer3b];

    const isBuffTrueSelected = buffTrue.some((option) =>
      selectedAnswers.includes(option)
    );
    const isBuffFalseSelected = buffFalse.some((option) =>
      selectedAnswers.includes(option)
    );
    const isSandTrueSelected = sandTrue.some((option) =>
      selectedAnswers.includes(option)
    );
    const isRepairTrueSelected = repairTrue.some((option) =>
      selectedAnswers.includes(option)
    );
    const isStainTrueSelected = stainTrue.some((option) =>
      selectedAnswers.includes(option)
    );
    const isUnsureTrueSelected = unsureTrue.some((option) =>
      selectedAnswers.includes(option)
    );
    if (isSandTrueSelected && isRepairTrueSelected && isStainTrueSelected) {
      setSuggestedService("Repair, sand, stain, & finish");
      setSuggestedServiceText("Repair, sand, stain, & finish");
    } else if (isSandTrueSelected && isRepairTrueSelected) {
      setSuggestedService("Repair, sand, & finish");
      setSuggestedServiceText("Repair, sand, & finish");
    } else if (isBuffTrueSelected && !isBuffFalseSelected) {
      setSuggestedService("Buff & Coat");
      setSuggestedServiceText("Buff & Coat");
    } else if (isSandTrueSelected && isStainTrueSelected) {
      setSuggestedService("Sand, stain, & finish");
      setSuggestedServiceText("Sand, stain, & finish");
    } else if (isUnsureTrueSelected) {
      setSuggestedService("Contact Bart to find out what your floor needs!");
      setSuggestedServiceText(
        "Contact Bart to find out what your floor needs!"
      );
    } else if (isSandTrueSelected) {
      setSuggestedService("Sand & Finish");
      setSuggestedServiceText("Sand & Finish");
    } else {
      setSuggestedService("Contact Bart to find out what your floor needs!");
      setSuggestedServiceText("Contact Bart.");
    }
    handleNextStep();
  };

  return (
    <div className="modal-overlay-dark flex">
      <div className="absolute top-5 ml-5 right-5 cursor-pointer  text-white  z-10 hidden sm:block">
        <IoMdClose
          size={40}
          onClick={handleShowQuiz}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleShowQuiz();
            }
          }}
          tabIndex={0}
        />
      </div>

      <div className="absolute top-2 ml-2 cursor-pointer sm:hidden text-northBlue  z-10">
        <IoMdClose
          size={30}
          onClick={handleShowQuiz}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleShowQuiz();
            }
          }}
          tabIndex={0}
        />
      </div>

      <div className="all-questions-container flex flex-row overflow-hidden items-center">
        <div className={`quiz-step step-${step}`}>
          <div className="question-container bg-northBeige flex flex-col items-center justify-center sm:h-[80vh] h-[100vh] p-3">
            <span className="uppercase font-bold text-xs text-northBlue text-center">
              1 of 3
            </span>
            <h1 className="text-northBlue text-center mx-1">
              How would you describe your floor's finish (the surface)?
            </h1>
            <span className="text-xs sm:text-northBlue text-black text-center m-4 ">
              click all that apply
            </span>

            <fieldset>
              <legend className="visually-hidden">
                How would you describe your floor's finish (the surface)?
              </legend>
              <div className="flex flex-row ">
                <div className="flex flex-col sm:mr-16 ">
                  <div className="flex flex-row m-4">
                    <input
                      type="checkbox"
                      id="checkbox1a"
                      className="quiz-checkbox"
                      value={answer1a}
                      checked={selectedAnswers.includes(answer1a)}
                      onChange={handleCheckboxChange}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          handleCheckboxChange(e);
                        }
                      }}
                      tabIndex={0}
                      aria-labelledby="label-1a"
                    />
                    <label
                      id="label-1a"
                      htmlFor="checkbox1a"
                      className="text-xs sm:text-northBlue text-black w-28"
                    >
                      {answer1a}
                    </label>
                  </div>
                  <div className="flex flex-row m-4">
                    <input
                      type="checkbox"
                      id="checkbox1b"
                      className="quiz-checkbox"
                      value={answer1b}
                      checked={selectedAnswers.includes(answer1b)}
                      onChange={handleCheckboxChange}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          handleCheckboxChange(e);
                        }
                      }}
                        tabIndex={0}
                        aria-labelledby="label-1b"
                    />
                    <label
                    id="label-1b"
                      htmlFor="checkbox1b"
                      className="text-xs sm:text-northBlue text-black w-28"
                    >
                      {answer1b}
                    </label>
                  </div>
                  <div className="flex flex-row m-4">
                    <input
                      type="checkbox"
                      id="checkbox1c"
                      className="quiz-checkbox"
                      value={answer1c}
                      checked={selectedAnswers.includes(answer1c)}
                      onChange={handleCheckboxChange}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                            handleCheckboxChange(e);
                            }
                        }}
                            tabIndex={0}
                            aria-labelledby="label-1c"
                    />
                    <label
                    id="label-1c"
                      htmlFor="checkbox1c"
                      className="text-xs sm:text-northBlue text-black w-28"
                    >
                      {answer1c}
                    </label>
                  </div>
                </div>
                <div className="flex flex-col sm:ml-16">
                  <div className="flex flex-row m-4">
                    <input
                      type="checkbox"
                      id="checkbox1d"
                      className="quiz-checkbox"
                      value={answer1d}
                      checked={selectedAnswers.includes(answer1d)}
                      onChange={handleCheckboxChange}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                            handleCheckboxChange(e);
                            }
                        }}
                            tabIndex={0}
                            aria-labelledby="label-1d"
                    />
                    <label
                    id="label-1d"
                      htmlFor="checkbox1d"
                      className="text-xs sm:text-northBlue text-black w-28"
                    >
                      {answer1d}
                    </label>
                  </div>
                  <div className="flex flex-row m-4">
                    <input
                      type="checkbox"
                      id="checkbox1e"
                      className="quiz-checkbox"
                      value={answer1e}
                      checked={selectedAnswers.includes(answer1e)}
                      onChange={handleCheckboxChange}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                            handleCheckboxChange(e);
                            }
                        }}
                            tabIndex={0}
                            aria-labelledby="label-1e"
                    />
                    <label
                    id="label-1e"
                      htmlFor="checkbox1e"
                      className="text-xs sm:text-northBlue text-black w-28"
                    >
                      {answer1e}
                    </label>
                  </div>
                </div>
              </div>
            </fieldset>
            <button className="quiz-button" onClick={handleNextStep}>
              next →
            </button>
          </div>
        </div>

        <div className={`quiz-step step-${step}`}>
          <div className="question-container bg-northBeige flex flex-col items-center justify-center sm:h-[80vh] h-[100vh] p-3">
            <span className="uppercase font-bold text-xs text-northBlue text-center">
              2 of 3
            </span>
            <h1 className="text-northBlue text-center mx-1 ">
              How is the floor board condition (beneath the surface)?
            </h1>
            <span className="text-xs sm:text-northBlue text-black  text-center m-4">
              click all that apply
            </span>
            <div className="flex flex-row">
              <div className="flex flex-col sm:mr-16">
                <div className="flex flex-row m-4">
                  <input
                    type="checkbox"
                    id="checkbox2a"
                    className="quiz-checkbox"
                    value={answer2a}
                    checked={selectedAnswers.includes(answer2a)}
                    onChange={handleCheckboxChange}
                  />
                  <label
                    htmlFor="checkbox2a"
                    className="text-xs sm:text-northBlue text-black w-28"
                  >
                    {answer2a}
                  </label>
                </div>
                <div className="flex flex-row m-4">
                  <input
                    type="checkbox"
                    id="checkbox2b"
                    className="quiz-checkbox"
                    value={answer2b}
                    checked={selectedAnswers.includes(answer2b)}
                    onChange={handleCheckboxChange}
                  />
                  <label
                    htmlFor="checkbox2b"
                    className="text-xs sm:text-northBlue text-black w-28"
                  >
                    {answer2b}
                  </label>
                </div>
                <div className="flex flex-row m-4">
                  <input
                    type="checkbox"
                    id="checkbox2c"
                    className="quiz-checkbox"
                    value={answer2c}
                    checked={selectedAnswers.includes(answer2c)}
                    onChange={handleCheckboxChange}
                  />
                  <label
                    htmlFor="checkbox2c"
                    className="text-xs sm:text-northBlue text-black w-28"
                  >
                    {answer2c}
                  </label>
                </div>
              </div>
              <div className="flex flex-col sm:ml-16">
                <div className="flex flex-row m-4">
                  <input
                    type="checkbox"
                    id="checkbox2d"
                    className="quiz-checkbox"
                    value={answer2d}
                    checked={selectedAnswers.includes(answer2d)}
                    onChange={handleCheckboxChange}
                  />
                  <label
                    htmlFor="checkbox2d"
                    className="text-xs sm:text-northBlue text-black w-28"
                  >
                    {answer2d}
                  </label>
                </div>
                <div className="flex flex-row m-4">
                  <input
                    type="checkbox"
                    id="checkbox2e"
                    className="quiz-checkbox"
                    value={answer2e}
                    checked={selectedAnswers.includes(answer2e)}
                    onChange={handleCheckboxChange}
                  />
                  <label
                    htmlFor="checkbox2e"
                    className="text-xs sm:text-northBlue text-black w-28"
                  >
                    {answer2e}
                  </label>
                </div>
                <div className="flex flex-row m-4">
                  <input
                    type="checkbox"
                    id="checkbox2f"
                    className="quiz-checkbox"
                    value={answer2f}
                    checked={selectedAnswers.includes(answer2f)}
                    onChange={handleCheckboxChange}
                  />
                  <label
                    htmlFor="checkbox2f"
                    className="text-xs sm:text-northBlue text-black w-28"
                  >
                    {answer2f}
                  </label>
                </div>
              </div>
            </div>
            <div className="quiz-button-container flex flex-row">
              <button className="quiz-button mr-8" onClick={handlePreviousStep}>
                ← back
              </button>
              <button className="quiz-button ml-8" onClick={handleNextStep}>
                next →
              </button>
            </div>
          </div>
        </div>

        <div className={`quiz-step step-${step}`}>
          <div className="question-container bg-northBeige flex flex-col items-center justify-center sm:h-[80vh] h-[100vh] p-3">
            <span className="uppercase font-bold text-xs text-northBlue text-center">
              3 of 3
            </span>
            <h1 className="text-northBlue text-center mx-1">
              What are your thoughts on the color of your floor?
            </h1>
            <span className="text-xs sm:text-northBlue text-black text-center  m-4">
              choose one
            </span>
            <div className="flex flex-row">
              <div className="flex flex-col sm:mr-16">
                <div className="flex flex-row m-4">
                  <input
                    type="checkbox"
                    id="checkbox3a"
                    className="quiz-checkbox"
                    value={answer3a}
                    checked={selectedAnswers.includes(answer3a)}
                    onChange={handleCheckboxChange}
                  />
                  <label
                    htmlFor="checkbox3a"
                    className="text-xs sm:text-northBlue text-black w-28"
                  >
                    {answer3a}
                  </label>
                </div>
                <div className="flex flex-row m-4">
                  <input
                    type="checkbox"
                    id="checkbox3b"
                    className="quiz-checkbox"
                    value={answer3b}
                    checked={selectedAnswers.includes(answer3b)}
                    onChange={handleCheckboxChange}
                  />
                  <label
                    htmlFor="checkbox3b"
                    className="text-xs sm:text-northBlue text-black w-28"
                  >
                    {answer3b}
                  </label>
                </div>
              </div>
              <div className="flex flex-col sm:ml-16">
                <div className="flex flex-row m-4">
                  <input
                    type="checkbox"
                    id="checkbox3c"
                    className="quiz-checkbox"
                    value={answer3c}
                    checked={selectedAnswers.includes(answer3c)}
                    onChange={handleCheckboxChange}
                  />
                  <label
                    htmlFor="checkbox3c"
                    className="text-xs sm:text-northBlue text-black w-28"
                  >
                    {answer3c}
                  </label>
                </div>
                <div className="flex flex-row m-4">
                  <input
                    type="checkbox"
                    id="checkbox3d"
                    className="quiz-checkbox"
                    value={answer3d}
                    checked={selectedAnswers.includes(answer3d)}
                    onChange={handleCheckboxChange}
                  />
                  <label
                    htmlFor="checkbox3d"
                    className="text-xs sm:text-northBlue text-black w-28"
                  >
                    {answer3d}
                  </label>
                </div>
              </div>
            </div>
            <div className="quiz-button-container flex flex-row">
              <button className="quiz-button mr-8" onClick={handlePreviousStep}>
                ← back
              </button>
              <button
                className="quiz-button ml-8"
                onClick={handleSuggestService}
              >
                service suggestion →
              </button>
            </div>
          </div>
        </div>

        <div className={`quiz-step step-${step}`}>
          <div className="suggestions-container bg-northLightBlue flex flex-col items-center justify-center sm:h-[80vh] h-[100vh] p-3">
            {suggestedService === "Buff & Coat" && (
              <div className="suggest-buff flex flex-col justify-center items-center">
                <h1 className="text-northOrange text-center sm:mb-2">
                  Suggested service is:
                </h1>
                <h1 className="text-northBlue text-center mb-4">Buff & Coat</h1>

                <div className="flex flex-col items-center">
                  <div className="">
                    <Image
                      src={buffer}
                      width={267}
                      height={217}
                      className="m-1"
                      alt="floor buffer"
                    />
                  </div>
                  <div className="flex items-center ">
                    <button
                      className="orange-button mr-8"
                      onClick={handlePreviousStep}
                    >
                      ← back
                    </button>
                    <button
                      className="orange-button ml-8"
                      onClick={handleNextStep}
                    >
                      set up estimate →
                    </button>
                  </div>
                </div>
              </div>
            )}

            {suggestedService === "Sand & Finish" && (
              <div className="suggest-sand flex flex-col justify-center items-center">
                <h1 className="text-northOrange text-center sm:mb-2">
                  Suggested service is:
                </h1>
                <h1 className="text-northBlue text-center mb-4">
                  Sand & Finish
                </h1>

                <div className="flex flex-col items-center">
                  <div className="">
                    <Image
                      src={drumSander}
                      width={267}
                      height={217}
                      className="m-1"
                      alt="floor sander"
                    />
                  </div>
                  <div className="flex items-center ">
                    <button
                      className="orange-button mr-8"
                      onClick={handlePreviousStep}
                    >
                      ← back
                    </button>
                    <button
                      className="orange-button ml-8"
                      onClick={handleNextStep}
                    >
                      set up estimate →
                    </button>
                  </div>
                </div>
              </div>
            )}

            {suggestedService === "Repair, sand, & finish" && (
              <div className="suggest-repair-sand flex flex-col justify-center items-center">
                <h1 className="text-northOrange text-center sm:mb-2">
                  Suggested service is:
                </h1>
                <h1 className="text-northBlue text-center mb-4">
                  Repair, sand, & finish
                </h1>

                <div className="flex flex-col items-center">
                  <div className="sm:h-56 flex mt-4">
                    <Image
                      src={weave}
                      width={267}
                      height={217}
                      sizes="(max-width: 640px) 40vw"
                      className="m-1"
                      alt="floor repair"
                    />
                    <Image
                      src={drumSander}
                      width={267}
                      height={217}
                      sizes="(max-width: 640px) 40vw"
                      className="m-1"
                      alt="floor sander"
                    />
                  </div>
                  <div className="flex items-center ">
                    <button
                      className="orange-button mr-8"
                      onClick={handlePreviousStep}
                    >
                      ← back
                    </button>
                    <button
                      className="orange-button ml-8"
                      onClick={handleNextStep}
                    >
                      set up estimate →
                    </button>
                  </div>
                </div>
              </div>
            )}

            {suggestedService === "Sand, stain, & finish" && (
              <div className="suggest-sand-stain flex flex-col justify-center items-center">
                <h1 className="text-northOrange text-center sm:mb-2">
                  Suggested service is:
                </h1>
                <h1 className="text-northBlue text-center mb-4">
                  Sand, stain, & finish
                </h1>

                <div className="flex flex-col items-center">
                  <div className="sm:h-56 flex mt-4">
                    <Image
                      src={drumSander}
                      width={267}
                      height={217}
                      sizes="(max-width: 640px) 40vw"
                      className="m-1"
                      alt="floor sander"
                    />
                    <Image
                      src={squareStain}
                      width={267}
                      height={217}
                      sizes="(max-width: 640px) 40vw"
                      className="m-1"
                      alt="stained floor"
                    />
                  </div>
                  <div className="flex items-center ">
                    <button
                      className="orange-button mr-8"
                      onClick={handlePreviousStep}
                    >
                      ← back
                    </button>
                    <button
                      className="orange-button ml-8"
                      onClick={handleNextStep}
                    >
                      set up estimate →
                    </button>
                  </div>
                </div>
              </div>
            )}

            {suggestedService === "Repair, sand, stain, & finish" && (
              <div className="suggest-repair-sand-stain flex flex-col justify-center items-center">
                <h1 className="text-northOrange text-center mb-2">
                  Suggested service is:
                </h1>
                <h1 className="text-northBlue text-center mb-4">
                  Repair, sand, stain, & finish
                </h1>

                <div className="flex flex-col items-center">
                  <div className="sm:h-56 flex mt-4">
                    <Image
                      src={weave}
                      height={217}
                      width={267}
                      sizes="(max-width: 815px) 30vw"
                      className="m-1 transition-opacity opacity-0 duration-[1s]"
                      onLoadingComplete={(image) =>
                        image.classList.remove("opacity-0")
                      }
                      alt="floor repair"
                    />
                    <Image
                      src={drumSander}
                      width={267}
                      height={217}
                      sizes="(max-width: 815px) 30vw"
                      className="m-1 transition-opacity opacity-0 duration-[2s]"
                      onLoadingComplete={(image) =>
                        image.classList.remove("opacity-0")
                      }
                      alt="floor sander"
                    />
                    <Image
                      src={squareStain}
                      width={267}
                      height={217}
                      sizes="(max-width: 815px) 30vw"
                      className="m-1 transition-opacity opacity-0 duration-[3s] "
                      onLoadingComplete={(image) =>
                        image.classList.remove("opacity-0")
                      }
                      alt="stained floor"
                    />
                  </div>
                </div>
                <div className="flex items-center ">
                  <button
                    className="orange-button mr-8"
                    onClick={handlePreviousStep}
                  >
                    ← back
                  </button>
                  <button
                    className="orange-button ml-8"
                    onClick={handleNextStep}
                  >
                    set up estimate →
                  </button>
                </div>
              </div>
            )}

            {suggestedService ===
              "Contact Bart to find out what your floor needs!" && (
              <div className="suggest-unsure p-5">
                <h1 className="text-northOrange">Suggested service is:</h1>
                <h1 className="text-northBlue text-center my-4">
                  Contact Bart!
                </h1>

                <div className="flex items-center justify-center">
                  <button
                    className="orange-button mr-8"
                    onClick={handlePreviousStep}
                  >
                    ← back
                  </button>

                  <button
                    className="orange-button ml-8"
                    onClick={handleNextStep}
                  >
                    set up estimate →
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className={`quiz-step step-${step}`}>
          <ContactForm
            handleShowQuiz={handleShowQuiz}
            suggestedServiceText={suggestedServiceText}
            setSuggestedServiceText={setSuggestedServiceText}
            handlePreviousStep={handlePreviousStep}
          />
        </div>
      </div>
    </div>
  );
}

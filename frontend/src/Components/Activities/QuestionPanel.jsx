import React, { useEffect, useState } from "react";
import questionData from "../../assets/data/questionData";
import feeling from "../../assets/images/feeling.svg";

const QuestionPanel = () => {
  const [checked, setChecked] = useState(undefined);
  const question = questionData[0];
  const totalQuestions = questionData.length;

  useEffect(() => {
    console.log(question);
  });

  function onSelect() {
    console.log("Radio button change");
  }

  // Function to handle the exit button click
  function onExit() {
    const shouldExit = window.confirm(
      "Are you sure you want to exit the Mental Health Check-in?"
    );

    if (shouldExit) {
      // If the user confirms, navigate back to the Question.jsx page
      window.location.href = "/question";
    }
  }

  return (
    <div className="relative">
      <div className="absolute inset-0 flex items-center justify-end z-[-1]">
        <img src={feeling} alt="none" className="w-72 h-auto" />
      </div>

      {/* Exit button */}
      <button
        onClick={onExit}
        className="absolute top-2 right-2 px-2 py-1 rounded-full focus:outline-none flex items-center"
      >
        <p className="mr-2">Exit Mental Health Check-in</p>
        <i className="ri-close-circle-line text-3xl"></i>
      </button>

      <div className="flex justify-center items-center h-screen">
        {/* Centered content */}
        <div>
          <h3 className="mb-5 text-3xl font-[700] text-gray-900">
            {question.question}
          </h3>
          <p className="text-lg text-gray-500 mb-3">
            {question.id}/{totalQuestions}
          </p>
          <ul key={question.id} className="grid w-full gap-6 md:grid-cols-2">
            {/* 1st */}
            {question.options.map((q, i) => (
              <li key={i}>
                <input
                  type="radio"
                  id={`q${i}-option`}
                  name="option"
                  defaultValue="hosting-big"
                  className="hidden peer"
                />
                <label
                  htmlFor={`q${i}-option`}
                  className="inline-flex 
                items-center justify-between w-full p-5 text-gray-500 bg-bgColor border border-gray-200 rounded-lg cursor-pointer peer-checked:border-veryColor peer-checked:text-brightColor hover:text-gray-600 hover:bg-gray-100"
                >
                  <div className="block">
                    <div className="w-full text-lg font-semibold">{q}</div>
                  </div>
                  <i className="ri-arrow-right-line w-5 h-5 ml-3"></i>
                </label>
              </li>
            ))}
            {/* 2nd */}

            {/* 3rd */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default QuestionPanel;

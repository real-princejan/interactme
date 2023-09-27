import React from "react";
import QuestionPanel from "./QuestionPanel";

const Quiz = () => {
  // function button next handler
  function onNext() {
    console.log("On Next click");
  }

  return (
    <div className="container">
      {/* Display Questions */}
      <div className="relative">
        <QuestionPanel />

        {/* Button */}
        <div className="absolute bottom-0 left-0 w-full p-4">
          <div className="flex m-2">
            <button
              onClick={onNext}
              className="text-insideColor rounded-l border-l hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer hover:opacity-90 bg-greenColor border duration-200 ease-in-out border-gray-600 transition"
            >
              <div className="flex leading-5">
                Next
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  height="100%"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-chevron-right w-5 h-5 ml-1"
                >
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;

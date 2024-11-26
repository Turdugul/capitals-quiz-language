import React from "react";

type ResultProps = {
  correctAnswers: number;
  wrongAnswers: number;
  totalQuestions: number;
  handleRestart: () => void;
  language: "en" | "ky";
};

const Result: React.FC<ResultProps> = ({
  correctAnswers,
  wrongAnswers,
  handleRestart,
  language,
  totalQuestions,
}) => {
  return (
    <>
    <div className="container  mt-4 space-x-2">
      {correctAnswers || wrongAnswers ? (
        <div className="flex px-2 gap-1  justify-evenly items-center">
          <div className="sm:flex-1 sm:m-2">
            <p className="mb-2">
              <span className="text-green-500">
                {' '}
                {language === "en"
          ? `Correct: ${correctAnswers}/${totalQuestions}`
          : `Туура: ${correctAnswers}/${totalQuestions}`}
              </span>
            </p>
            <p className="mb-2">
              <span className="text-red-500">
              {language === "en"
          ? `Wrong: ${wrongAnswers}/${totalQuestions}`
          : `Ката: ${wrongAnswers}/${totalQuestions}`}
              </span>
            </p>
          </div>
          <button
            onClick={handleRestart}
            className="p-2 m-1 xs:p-0 bg-green-500 rounded-xl text-white hover:bg-green-700 dark:bg-green-400 dark:hover:bg-gren-500 transition"
          >
           {language === "en" ? "Restart" : "Кайра башта"}
          </button>
        </div>
      ) : (
        ''
      )}
    </div>
    </>
  );
};

export default Result;

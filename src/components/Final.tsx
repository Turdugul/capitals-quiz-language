import React from 'react';

type FinalProps = {
  correctAnswers: number;
  totalQuestions: number;
  handleRestart: () => void;
  language: "en" | "ky";
};

const Final: React.FC<FinalProps> = ({ correctAnswers, totalQuestions, language,  handleRestart }) => {
  const text = {
    en: {
      congratulations: "Congratulations! 🎉",
      correctAnswerText: `You correctly answered ${correctAnswers} question out of ${totalQuestions}.`,
      perfectScore: `Wow! A perfect score of ${totalQuestions} capitals!`,
      restart: "Restart"
    },
    ky: {
      congratulations: "Куттуктайбыз! 🎉",
      correctAnswerText: `Сиз  ${totalQuestions} суроонун ичинен ${correctAnswers}  суроого туура жооп бердиңиз.`,
      perfectScore: `Wow! Сиздин эң жогорку упайыңыз! ${totalQuestions} борборлор!`,
      restart: "Кайра башта"
    }
  };
  const selectedText = text[language];  
  return (
    <div className="container flex flex-col p-4 text-center">
      <h1 className="text-2xl font-bold text-green-600">{selectedText.congratulations}</h1>
      <p className="text-lg mt-2">
      {selectedText.correctAnswerText}

      </p>
      <div>
         </div> <button onClick={handleRestart} className="mt-4 p-2 bg-blue-500 text-white rounded">{selectedText.restart}</button>
    </div>
  );
};

export default Final;

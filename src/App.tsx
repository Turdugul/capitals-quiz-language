import React, { useReducer, useEffect, useState } from "react";
import Questions from "./components/Questions";
import Result from "./components/Result";
import ThemeToggle from "./components/ThemeToggle";
import translations from "./data/translations";
import { countries } from "./data/countries";
import Final from "./components/Final";


type State = {
  currentCountryIndex: number;
  correctAnswers: number;
  wrongAnswers: number;
  isCorrect: boolean | null;
  isFinished: boolean; 
};

const initialState: State = {
  currentCountryIndex: 0,
  correctAnswers: 0,
  wrongAnswers: 0,
  isCorrect: null,
  isFinished: false,
};

type Action =
  | { type: "ANSWER"; isCorrect: boolean }
  | { type: "NEXT_COUNTRY" }
  | { type: "RESET" }
  | { type: "FINISH" }; 

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "ANSWER":
      return {
        ...state,
        isCorrect: action.isCorrect,
        correctAnswers: state.correctAnswers + (action.isCorrect ? 1 : 0),
        wrongAnswers: state.wrongAnswers + (!action.isCorrect ? 1 : 0),
      };
    case "NEXT_COUNTRY":
      return {
        ...state,
        currentCountryIndex: state.currentCountryIndex + 1,
        isCorrect: null,
      };
    case "RESET":
      return initialState;
    case "FINISH":
        return {
          ...state,
          isFinished: true,
        };
    default:
      return state;
  }
};

const App: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [options, setOptions] = useState<string[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [language, setLanguage] = useState<"en" | "ky">("en");

  const currentCountry = countries[state.currentCountryIndex];

  useEffect(() => {
    const generateOptions = () => {
      const capitals = countries.map((c) => c.capital[language]);
      const choices = [currentCountry.capital[language]];
      while (choices.length < 4) {
        const randomCapital = capitals[Math.floor(Math.random() * capitals.length)];
        if (!choices.includes(randomCapital)) {
          choices.push(randomCapital);
        }
      }
      setOptions(choices.sort(() => Math.random() - 0.5));
    };

    generateOptions();
    setSelectedAnswer(null);
  }, [state.currentCountryIndex, language, currentCountry.capital]);

  const handleAnswer = (selectedCapital: string) => {
    setSelectedAnswer(selectedCapital);
    const isCorrect = selectedCapital === currentCountry.capital[language];
    dispatch({ type: "ANSWER", isCorrect });

    if (state.correctAnswers + state.wrongAnswers + 1 === countries.length) {
      dispatch({ type: "FINISH" });
    } else {
      setTimeout(() => dispatch({ type: "NEXT_COUNTRY" }), 1000);
    }
  };

  const handleRestart = () => dispatch({ type: "RESET" });

  return (
    <div className="min-h-screen bg-gray-200 dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex justify-center p-6">
    <div className="max-w-lg h-2/4 sm:h-2/4 w-full bg-white dark:bg-gray-700 rounded-lg shadow-2xl p-6 m-4">
      <div className="flex mb-4 flex-col items-center justify-center sm:justify-between sm:flex-row">
      <h1 className="pb-2 flex-grow text- sm:pb-2 sm:text-xl text-center sm:py-4 sm:text-left font-semibold">{translations[language].title}</h1>
        <div className="flex flex-row-reverse md:flex-row flex-none gap-4">
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value as "en" | "ky")}
               className="p-0 border text-sm sm:text-xs border-gray-300 rounded-md dark:bg-gray-700 dark:text-gray-300"
            >
              <option value="en">English</option>
              <option value="ky">Кыргызча</option>
            </select>
            <ThemeToggle />
            </div>
        </div>
        { state.isFinished ? (
          <Final
            correctAnswers={state.correctAnswers}
            totalQuestions={countries.length}
            language={language}
            handleRestart={handleRestart}
          />
        ) : (
        <>
          <Questions
            country={{
              country: currentCountry.country[language],
              capital: currentCountry.capital[language],
              flag: currentCountry.flag,
            }}
            language={language}
            options={options}
            isCorrect={state.isCorrect}
            selectedAnswer={selectedAnswer}
            handleAnswer={handleAnswer}
          />
          <Result
            correctAnswers={state.correctAnswers}
            wrongAnswers={state.wrongAnswers}
            handleRestart={handleRestart}
            totalQuestions={countries.length}
            language={language}
          />
           </>
        )}
      </div>
    </div>
  );
};

export default App;

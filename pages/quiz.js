import React, { useRef, useState } from "react";
import quizData from "../src/quizData";
import QuizManager from "../src/QuizManager";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const correctIcon = (
  <svg className="inline-block w-6 h-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <circle cx="12" cy="12" r="11" stroke="currentColor" strokeWidth="2" fill="white"/>
    <path stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" d="M7 12l3 3 7-7"/>
  </svg>
);

const wrongIcon = (
  <svg className="inline-block w-6 h-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <circle cx="12" cy="12" r="11" stroke="currentColor" strokeWidth="2" fill="white"/>
    <path stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" d="M8 8l8 8M16 8l-8 8"/>
  </svg>
);

const cardVariants = {
  initial: { opacity: 0, x: 80, scale: 0.95 },
  animate: { opacity: 1, x: 0, scale: 1, transition: { type: "spring", bounce: 0.15 } },
  exit: { opacity: 0, x: -60, scale: 0.95, transition: { duration: 0.2 } }
};

export default function QuizPage() {
  const managerRef = useRef(null);
  if (!managerRef.current) {
    managerRef.current = new QuizManager(quizData);
  }
  const [questionObj, setQuestionObj] = useState(managerRef.current.getNextQuestion());
  const [selected, setSelected] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [qKey, setQKey] = useState(0);
  const [quizComplete, setQuizComplete] = useState(false);
  const [score, setScore] = useState({ correct: 0, total: 0, percent: 0 });
  const [incorrectList, setIncorrectList] = useState([]);

  function handleSelect(idx) {
    setSelected(idx);
    setShowAnswer(true);
  }

  function nextQuestion() {
    managerRef.current.recordAnswer({
      index: questionObj.index,
      selectedIndex: selected,
    });

    const nextQ = managerRef.current.getNextQuestion();
    if (!nextQ) {
      const scoreObj = managerRef.current.getScore();
      setScore(scoreObj);
      setIncorrectList(managerRef.current.getIncorrectAnswers());
      setQuizComplete(true);
    } else {
      setSelected(null);
      setShowAnswer(false);
      setQKey(k => k + 1);
      setQuestionObj(nextQ);
    }
  }

  function restartQuiz() {
    managerRef.current.reset();
    setSelected(null);
    setShowAnswer(false);
    setQKey(0);
    setScore({ correct: 0, total: 0, percent: 0 });
    setIncorrectList([]);
    setQuizComplete(false);
    setQuestionObj(managerRef.current.getNextQuestion());
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-game-grid font-arcade px-4">
      <Link href="/" className="mb-6 self-start w-full max-w-xl">
        <button className="btn-neon px-4 py-2 text-base">← Back to Menu</button>
      </Link>
      <AnimatePresence mode="wait">
        {!quizComplete ? (
          <motion.div
            key={qKey}
            variants={cardVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="w-full max-w-xl rounded-3xl shadow-neon bg-panel border-2 border-accent animate-pulseGlow p-8 sm:p-12 flex flex-col items-center"
          >
            <h2 className="text-2xl font-bold mb-2 text-primary font-display tracking-widest drop-shadow-[0_0_10px_#00FFB2]">Quiz Challenge</h2>
            <div className="mb-4 w-full">
              <div className="font-semibold text-accent text-lg mb-6 text-center">{questionObj.question}</div>
              <ul className="space-y-4 w-full">
                {questionObj.options.map((opt, idx) => {
                  let neon =
                    selected === null
                      ? "bg-panel hover:bg-accent/10 text-primary border-accent"
                      : idx === questionObj.answer
                      ? "bg-green-100 border-gold text-green-400 shadow-neon"
                      : selected === idx
                      ? "bg-red-100 border-secondary text-red-400 shadow-neon"
                      : "bg-panel border-panel text-primary";
                  let ring =
                    selected !== null && idx === questionObj.answer
                      ? "ring-2 ring-gold"
                      : selected === idx
                      ? "ring-2 ring-secondary"
                      : "";

                  return (
                    <li key={idx}>
                      <button
                        className={`block w-full rounded-xl px-5 py-3 text-left border-2 font-bold font-arcade transition-all duration-150 ease-in-out ${neon} ${ring} ${
                          selected === null ? "cursor-pointer" : "cursor-default"
                        }`}
                        style={{
                          outline: "none",
                          transform: selected === idx ? "scale(1.04)" : undefined,
                          transition: "transform 0.12s"
                        }}
                        onClick={() => selected === null && handleSelect(idx)}
                        disabled={selected !== null}
                      >
                        {opt}
                        {selected !== null && idx === questionObj.answer && (
                          <span className="ml-2 align-middle">{correctIcon}</span>
                        )}
                        {selected !== null && idx === selected && idx !== questionObj.answer && (
                          <span className="ml-2 align-middle">{wrongIcon}</span>
                        )}
                      </button>
                    </li>
                  );
                })}
              </ul>
              {showAnswer && (
                <motion.div
                  className="mt-8 text-2xl text-center font-display"
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {selected === questionObj.answer ? (
                    <span className="text-gold font-bold flex items-center justify-center gap-2">
                      {correctIcon} Correct!
                    </span>
                  ) : (
                    <span className="text-secondary font-bold flex items-center justify-center gap-2">
                      {wrongIcon} Incorrect. The correct answer is: <b>{questionObj.options[questionObj.answer]}</b>
                      {questionObj.explanation && (
                        <div className="text-accent text-base mt-2 max-w-lg">
                          <b>Explanation: </b>{questionObj.explanation}
                        </div>
                      )}
                    </span>
                  )}
                </motion.div>
              )}
              <div className="flex justify-center mt-10">
                <button
                  onClick={nextQuestion}
                  className="btn-neon text-lg font-display px-10 py-3"
                >
                  Next Question →
                </button>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="results"
            variants={cardVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="w-full max-w-xl rounded-3xl shadow-neon bg-panel border-2 border-accent animate-pulseGlow p-8 sm:p-12 flex flex-col items-center"
          >
            <h2 className="text-3xl font-bold mb-4 text-gold font-display animate-pulse">
              Quiz Complete!
            </h2>
            <div className="mb-6 text-accent font-display text-lg animate-pulse">
              Your score:{" "}
              <span className="font-bold text-gold drop-shadow-[0_0_6px_#FFD700]">
                {score.correct}
              </span>{" "}
              / {score.total} (
              <span className="font-bold text-gold">{score.percent}%</span>)
            </div>
            {incorrectList.length > 0 ? (
              <div className="mt-4 w-full">
                <h3 className="text-xl font-bold mb-2 text-secondary font-display">
                  Review Incorrect Answers
                </h3>
                <ul className="space-y-6 w-full">
                  {incorrectList.map(({ question, selectedIndex, selectedOption }, idx) => (
                    <li key={idx} className="bg-dark rounded-xl p-5 shadow-panel text-white">
                      <div className="mb-2 font-semibold text-accent">
                        <span className="text-gold font-display">Q:</span> {question.question}
                      </div>
                      <div className="mb-1">
                        <span className="text-secondary font-bold">Your Answer:</span>{" "}
                        <span className="text-red-300">{selectedOption ?? "No answer selected"}</span>
                      </div>
                      <div className="mb-1">
                        <span className="text-gold font-bold">Correct Answer:</span>{" "}
                        <span className="text-green-400">{question.options[question.answer]}</span>
                      </div>
                      {question.explanation && (
                        <div className="mt-2 text-accent text-base">
                          <b>Explanation:</b> {question.explanation}
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <div className="my-8 font-bold text-green-400 text-xl text-center">
                🎉 You got all questions correct!
              </div>
            )}
            <div className="flex justify-center mt-10">
              <button
                onClick={restartQuiz}
                className="btn-neon text-lg font-display px-10 py-3"
              >
                Restart Quiz
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

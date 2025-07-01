import React, { useRef, useState } from "react";
import quizData from "../quizData";
import QuizManager from "../QuizManager";

export default function QuizPage() {
  const managerRef = useRef(new QuizManager(quizData));
  const [question, setQuestion] = useState(managerRef.current.getNextQuestion());
  const [selected, setSelected] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);

  function handleSelect(idx) {
    setSelected(idx);
    setShowAnswer(true);
  }

  function nextQuestion() {
    setSelected(null);
    setShowAnswer(false);
    setQuestion(managerRef.current.getNextQuestion());
  }

  // Handle finished quiz (no more options)
  if (!question.options || question.options.length === 0) {
    return (
      <div className="max-w-xl mx-auto mt-10 font-sans p-4 text-center">
        <h2 className="text-3xl font-bold mb-6 text-primary">Quiz Finished!</h2>
        <button 
          onClick={() => {
            managerRef.current = new QuizManager(quizData);
            setQuestion(managerRef.current.getNextQuestion());
            setSelected(null);
            setShowAnswer(false);
          }}
          className="mt-4 px-8 py-3 text-lg bg-primary text-dark rounded-xl font-semibold shadow-neon hover:scale-105 transition-transform"
        >
          Restart Quiz
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto mt-10 font-sans p-4 bg-panel border-2 border-accent rounded-2xl shadow-panel">
      <h2 className="text-2xl font-display font-bold mb-4 text-primary drop-shadow-[0_0_10px_#00FFB2]">Quiz</h2>
      <div className="mb-6">
        <div className="font-semibold mb-2 text-accent">Question:</div>
        <div className="text-lg mb-4">{question.question}</div>
        <ul className="flex flex-col gap-2">
          {question.options.map((opt, idx) => (
            <li key={idx}>
              <button
                className={`w-full text-left px-4 py-3 rounded-lg border font-semibold transition-all
                  ${selected === idx
                    ? (idx === question.answer 
                        ? "bg-primary/20 border-gold text-gold" 
                        : "bg-secondary/20 border-secondary text-secondary")
                    : "bg-panel border-accent text-primary hover:bg-accent/10"}
                  ${showAnswer ? "cursor-default" : "cursor-pointer"}
                `}
                onClick={() => !showAnswer && handleSelect(idx)}
                disabled={showAnswer}
                aria-pressed={selected === idx}
              >
                {opt}
              </button>
            </li>
          ))}
        </ul>
        {showAnswer && (
          <div className="my-4 text-lg font-bold">
            {selected === question.answer ? (
              <span className="text-gold">🎉 Correct!</span>
            ) : (
              <span className="text-secondary">❌ Incorrect. The correct answer is: <b>{question.options[question.answer]}</b></span>
            )}
          </div>
        )}
        <button 
          onClick={nextQuestion}
          className="mt-2 px-6 py-2 bg-accent text-dark rounded-xl shadow font-semibold hover:scale-105 transition-transform"
        >
          Next Question
        </button>
      </div>
    </div>
  );
}

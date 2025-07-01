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
      <div style={{maxWidth:600,margin:"2rem auto",fontFamily:"sans-serif",padding:"1rem"}}>
        <h2>Quiz Finished!</h2>
        <button 
          onClick={() => {
            managerRef.current = new QuizManager(quizData);
            setQuestion(managerRef.current.getNextQuestion());
            setSelected(null);
            setShowAnswer(false);
          }}
          style={{
            marginTop:"1rem",
            padding:"0.75rem 2rem",
            fontSize:"1rem",
            background:"#333",
            color:"#fff",
            border:"none",
            borderRadius:8,
            cursor:"pointer"
          }}>
          Restart Quiz
        </button>
      </div>
    );
  }

  return (
    <div style={{maxWidth:600,margin:"2rem auto",fontFamily:"sans-serif",padding:"1rem"}}>
      <h2>Quiz</h2>
      <div style={{marginBottom:"1.5rem"}}>
        <strong>Question:</strong>
        <div style={{fontSize:"1.2rem",margin:"1rem 0"}}>{question.question}</div>
        <ul style={{listStyle:"none",padding:0}}>
          {question.options.map((opt, idx) => (
            <li key={idx} style={{marginBottom:"0.5rem"}}>
              <button
                style={{
                  width: "100%",
                  textAlign: "left",
                  padding: "0.75rem",
                  background: selected === idx 
                    ? (idx === question.answer ? "#a0e3a0" : "#f7bcbc") 
                    : "#f6f6f6",
                  border: "1px solid #ddd",
                  borderRadius: 8,
                  cursor: showAnswer ? "default" : "pointer",
                  fontWeight: selected === idx ? "bold" : "normal"
                }}
                onClick={() => !showAnswer && handleSelect(idx)}
                disabled={showAnswer}
              >
                {opt}
              </button>
            </li>
          ))}
        </ul>
        {showAnswer && (
          <div style={{margin:"1rem 0",fontSize:"1.1rem"}}>
            {selected === question.answer ? (
              <span style={{color:"green"}}>Correct!</span>
            ) : (
              <span style={{color:"red"}}>Incorrect. The correct answer is: <b>{question.options[question.answer]}</b></span>
            )}
          </div>
        )}
        <button 
          onClick={nextQuestion} 
          style={{
            marginTop:"1rem",
            padding:"0.75rem 2rem",
            fontSize:"1rem",
            background:"#333",
            color:"#fff",
            border:"none",
            borderRadius:8,
            cursor:"pointer"
          }}>
          Next Question
        </button>
      </div>
    </div>
  );
}

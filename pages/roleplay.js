import { useState } from "react";
import Link from "next/link";

// Sound effects (using small .mp3 or .wav files in your public/sounds folder)
const correctSound = typeof Audio !== "undefined" ? new Audio("/sounds/correct.mp3") : null;
const wrongSound = typeof Audio !== "undefined" ? new Audio("/sounds/wrong.mp3") : null;
const advanceSound = typeof Audio !== "undefined" ? new Audio("/sounds/advance.mp3") : null;

// Scenarios array as provided (single-step and multi-step scenarios)
const scenarios = [
  {
    title: "Temporary Privileges Dilemma",
    steps: [
      {
        prompt: "A provider’s application is missing a DEA certificate. The department chair wants to grant temporary privileges for convenience while they wait. What should you do?",
        options: [
          { text: "Grant temporary privileges for convenience.", feedback: "Incorrect. Temp privileges are for urgent care or pending approval, not for convenience.", correct: false },
          { text: "Decline and explain that temp privileges are only for urgent care or pending approval.", feedback: "Correct! This follows TJC and hospital policy.", correct: true },
          { text: "Send application to the board immediately.", feedback: "Incorrect. App must be complete first.", correct: false },
          { text: "Ignore and wait for the certificate.", feedback: "Not best practice. Communicate the requirement.", correct: false }
        ]
      }
    ]
  },
  // ... (rest of the scenarios as in previous assistant message)
];

function flattenScenarios(scenarios) {
  return scenarios.reduce((sum, sc) => sum + sc.steps.length, 0);
}

export default function Roleplay() {
  const [scenarioIdx, setScenarioIdx] = useState(0);
  const [stepIdx, setStepIdx] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [complete, setComplete] = useState(false);
  const [showScoreAnim, setShowScoreAnim] = useState(false);

  const scenario = scenarios[scenarioIdx];
  const step = scenario.steps[stepIdx];

  function handleOption(optIdx) {
    setSelected(optIdx);
    if (step.options[optIdx].correct) {
      setScore((s) => s + 1);
      if (correctSound) correctSound.play();
    } else {
      if (wrongSound) wrongSound.play();
    }
  }

  function next() {
    const opt = step.options[selected];
    if (advanceSound) advanceSound.play();
    if (opt && typeof opt.nextStep === "number") {
      setStepIdx(opt.nextStep);
      setSelected(null);
      return;
    }
    if (stepIdx === scenario.steps.length - 1 || (opt && opt.nextStep == null)) {
      if (scenarioIdx === scenarios.length - 1) {
        setComplete(true);
        setShowScoreAnim(true);
        setTimeout(() => setShowScoreAnim(false), 2000);
      } else {
        setScenarioIdx(scenarioIdx + 1);
        setStepIdx(0);
        setSelected(null);
      }
    } else {
      setStepIdx(stepIdx + 1);
      setSelected(null);
    }
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-game-grid font-arcade px-4">
      <Link href="/" className="mb-6 self-start w-full max-w-xl">
        <button className="btn-neon px-4 py-2 text-base">← Back to Menu</button>
      </Link>
      <div className="w-full max-w-xl bg-panel border-2 border-accent rounded-3xl shadow-neon p-8 sm:p-12 flex flex-col items-center animate-pulseGlow">
        <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-primary font-display tracking-widest drop-shadow-[0_0_10px_#00FFB2]">
          Role-Play Simulation
        </h2>
        <div className="mb-6 text-secondary font-display text-lg animate-pulse">
          Score:{" "}
          <span
            className={`font-bold text-gold drop-shadow-[0_0_6px_#FFD700] transition-transform ${showScoreAnim ? "scale-125" : ""}`}
          >
            {score}
          </span>{" "}
          / {flattenScenarios(scenarios)}
        </div>
        {complete ? (
          <div className="text-center">
            <h3 className="text-2xl mb-4 font-bold text-secondary animate-pulse font-display">
              Simulation Complete!
            </h3>
            <p className="text-lg mb-4 font-arcade">
              Your final score:{" "}
              <span className="font-bold text-gold drop-shadow-[0_0_6px_#FFD700]">
                {score}
              </span>{" "}
              / {flattenScenarios(scenarios)}
            </p>
            <Link href="/">
              <button className="btn-neon text-lg px-8 py-3">Back to Menu</button>
            </Link>
          </div>
        ) : (
          <>
            <div className="mb-2 text-lg text-accent font-semibold text-center font-display">
              {scenario.title}
            </div>
            <div className="mb-6 font-medium text-primary text-lg text-center">{step.prompt}</div>
            <ul className="space-y-4 w-full">
              {step.options.map((opt, idx) => (
                <li key={idx}>
                  <button
                    className={`block w-full rounded-xl px-5 py-3 text-left border-2 font-bold font-arcade transition-all duration-150 ${
                      selected === idx
                        ? opt.correct
                          ? "bg-green-100 border-gold text-green-400 shadow-neon"
                          : "bg-red-100 border-secondary text-secondary shadow-neon"
                        : "bg-panel hover:bg-accent/10 text-primary border-accent"
                    } ${selected !== null ? "cursor-default" : "cursor-pointer"}`}
                    onClick={() => selected === null && handleOption(idx)}
                    disabled={selected !== null}
                  >
                    {opt.text}
                  </button>
                </li>
              ))}
            </ul>
            {selected !== null && (
              <div className="mt-6 text-lg text-center font-display text-accent animate-pulse">
                {step.options[selected].feedback}
              </div>
            )}
            {selected !== null && (
              <div className="flex justify-center mt-8">
                <button
                  onClick={next}
                  className="btn-neon text-lg font-display px-10 py-3"
                >
                  {scenarioIdx === scenarios.length - 1 &&
                  (stepIdx === scenario.steps.length - 1 ||
                    (step.options[selected] && step.options[selected].nextStep == null))
                    ? "See Results"
                    : "Next"}
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </main>
  );
}

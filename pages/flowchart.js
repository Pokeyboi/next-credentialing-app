import { useState } from "react";
import Link from "next/link";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";

const correctSteps = [
  "Application received",
  "Verify completeness (no blanks)",
  "Primary Source Verification (PSV) and competency verification",
  "Chief of Service/Dept Chair recommendation",
  "Executive Committee (MEC) recommendation",
  "Board approval",
  "Notify applicant"
];

function shuffle(arr) {
  let a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function FlowChart() {
  const [steps, setSteps] = useState(shuffle(correctSteps));
  const [checked, setChecked] = useState(false);
  const [correct, setCorrect] = useState(false);

  function onDragEnd(result) {
    if (!result.destination) return;
    const newSteps = Array.from(steps);
    const [removed] = newSteps.splice(result.source.index, 1);
    newSteps.splice(result.destination.index, 0, removed);
    setSteps(newSteps);
    setChecked(false);
  }

  function handleCheck() {
    setChecked(true);
    setCorrect(steps.every((s, i) => s === correctSteps[i]));
  }

  function handleReplay() {
    setSteps(shuffle(correctSteps));
    setChecked(false);
    setCorrect(false);
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-game-grid font-arcade px-4">
      <Link href="/" className="mb-6 self-start">
        <button className="btn-neon px-4 py-2 text-base">
          ← Back to Menu
        </button>
      </Link>
      <div className="w-full max-w-lg bg-panel border-2 border-accent rounded-3xl shadow-neon p-8 flex flex-col items-center animate-pulseGlow">
        <h2 className="text-2xl font-display font-bold mb-4 text-primary drop-shadow-[0_0_10px_#00FFB2]">
          Credentialing Flow-Chart Puzzle
        </h2>
        <p className="mb-6 text-accent text-center font-semibold">
          <b>Drag and drop</b> the steps to put the credentialing process in the correct order.
        </p>
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="steps">
            {(provided) => (
              <ul
                ref={provided.innerRef}
                {...provided.droppableProps}
                className="flex flex-col gap-3 w-full"
              >
                {steps.map((step, idx) => (
                  <Draggable key={step} draggableId={step} index={idx}>
                    {(provided, snapshot) => (
                      <li
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className={`bg-panel px-4 py-3 rounded-xl shadow-neon font-arcade border-2 transition-all flex items-center gap-2 text-lg ${
                          checked
                            ? step === correctSteps[idx]
                              ? "border-gold text-gold"
                              : "border-secondary text-secondary"
                            : "border-accent text-primary"
                        } ${snapshot.isDragging ? "scale-105 bg-accent/10" : ""}`}
                      >
                        <span className="text-accent font-bold">{idx + 1}.</span>
                        {step}
                      </li>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
        </DragDropContext>
        <div className="flex gap-4 mt-8">
          <button
            className="btn-neon px-6 py-2 text-lg"
            onClick={handleCheck}
            disabled={checked}
          >
            Check Order
          </button>
          <button
            className="px-6 py-2 bg-gray-100 text-fuchsia-600 rounded-xl shadow font-semibold hover:bg-gray-200 transition"
            onClick={handleReplay}
          >
            Replay
          </button>
        </div>
        {checked && (
          <div className="mt-6 text-xl font-bold text-center font-display animate-pulse">
            {correct ? (
              <span className="text-gold drop-shadow-[0_0_6px_#FFD700]">🎉 Correct! Well done.</span>
            ) : (
              <span className="text-secondary">❌ Some steps are out of order. Try again!</span>
            )}
          </div>
        )}
        <div className="mt-6 text-accent text-sm text-center font-display">
          <b>Credentialing Steps:</b><br />
          1. Application received<br />
          2. Verify completeness<br />
          3. PSV/competency<br />
          4. Chief of Service/Dept Chair<br />
          5. MEC<br />
          6. Board approval<br />
          7. Notify applicant
        </div>
      </div>
    </main>
  );
}

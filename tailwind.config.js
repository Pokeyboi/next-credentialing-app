import { useState } from "react";
import Link from "next/link";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";

// Define your correct steps
const correctSteps = [
  "Application received",
  "Verify completeness (no blanks)",
  "Primary Source Verification (PSV) and competency verification",
  "Chief of Service/Dept Chair recommendation",
  "Executive Committee (MEC) recommendation",
  "Board approval",
  "Notify applicant"
];

// Fisher-Yates shuffle
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
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100 font-sans px-4">
      <div className="w-full max-w-lg bg-white border-2 border-blue-400 rounded-3xl shadow-lg p-8 flex flex-col items-center">
        <Link href="/" className="mb-6 self-start">
          <button type="button" className="px-4 py-2 bg-blue-100 text-blue-700 rounded shadow hover:bg-blue-200 transition">
            ← Back to Menu
          </button>
        </Link>
        <h2 className="text-2xl font-bold mb-4 text-blue-600">
          Credentialing Flow-Chart Puzzle
        </h2>
        <p className="mb-6 text-blue-400 text-center font-semibold">
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
                        className={`px-4 py-3 rounded-xl shadow font-semibold border-2 transition-all flex items-center gap-2 text-lg ${
                          checked
                            ? step === correctSteps[idx]
                              ? "border-yellow-400 text-yellow-600 bg-yellow-50"
                              : "border-red-400 text-red-500 bg-red-50"
                            : "border-blue-400 text-blue-800 bg-white"
                        } ${snapshot.isDragging ? "scale-105 bg-blue-100" : ""}`}
                      >
                        <span className="text-blue-500 font-bold">{idx + 1}.</span>
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
            type="button"
            className="px-6 py-2 bg-gradient-to-r from-blue-400 to-fuchsia-500 text-white rounded-xl shadow font-semibold hover:scale-105 transition"
            onClick={handleCheck}
            disabled={checked}
          >
            Check Order
          </button>
          <button
            type="button"
            className="px-6 py-2 bg-gray-100 text-fuchsia-600 rounded-xl shadow font-semibold hover:bg-gray-200 transition"
            onClick={handleReplay}
          >
            Replay
          </button>
        </div>
        {checked && (
          <div className="mt-6 text-xl font-bold text-center animate-pulse">
            {correct ? (
              <span className="text-yellow-600">🎉 Correct! Well done.</span>
            ) : (
              <span className="text-red-500">❌ Some steps are out of order. Try again!</span>
            )}
          </div>
        )}
        <div className="mt-6 text-blue-400 text-sm text-center">
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

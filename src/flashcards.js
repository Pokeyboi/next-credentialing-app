import React, { useState } from "react";
import { flashcards } from "../src/flashcards";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function FlashcardsPage() {
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  function nextCard() {
    setFlipped(false);
    setIndex((index + 1) % flashcards.length);
  }

  function prevCard() {
    setFlipped(false);
    setIndex((index - 1 + flashcards.length) % flashcards.length);
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-game-grid font-arcade px-4">
      <Link href="/" className="mb-6 self-start w-full max-w-xl">
        <button className="btn-neon px-4 py-2 text-base">
          ← Back to Menu
        </button>
      </Link>
      <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-primary text-center font-display drop-shadow-[0_0_10px_#00FFB2]">
        Credentialing Flashcards
      </h1>
      <div className="flex gap-6 mb-8">
        <button className="btn-neon bg-secondary text-white px-8 py-3" onClick={prevCard}>
          Prev
        </button>
        <button className="btn-neon bg-primary text-dark px-8 py-3" onClick={nextCard}>
          Next
        </button>
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={index + (flipped ? "b" : "a")}
          className={`relative w-[350px] h-[220px] flex flex-col items-center justify-center rounded-2xl shadow-neon bg-panel border-2 border-accent animate-pulseGlow cursor-pointer select-none text-xl font-arcade transition-transform duration-300`}
          style={{ perspective: 1000 }}
          onClick={() => setFlipped(f => !f)}
          initial={{ rotateY: flipped ? 180 : 0 }}
          animate={{ rotateY: flipped ? 180 : 0 }}
          exit={{ opacity: 0, transition: { duration: 0.2 } }}
          transition={{ duration: 0.5 }}
        >
          <div className={`absolute w-full h-full flex items-center justify-center p-8 text-center text-accent ${flipped ? 'invisible' : 'visible'}`}>
            {flashcards[index].front}
          </div>
          <div className={`absolute w-full h-full flex items-center justify-center p-8 text-center text-primary ${flipped ? 'visible' : 'invisible'}`} style={{transform: 'rotateY(180deg)'}}>
            {flashcards[index].back}
          </div>
        </motion.div>
      </AnimatePresence>
      <div className="mt-5 text-secondary font-display text-lg animate-pulse">Click card to flip</div>
    </main>
  );
}

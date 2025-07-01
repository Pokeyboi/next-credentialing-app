import { quizData } from "./quizData";

// Fisher-Yates shuffle
function shuffle(array) {
  let arr = array.slice();
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function getRandomizedQuestion(originalQuestion) {
  // Shuffle the options, but keep track of the new answer index
  const optionPairs = originalQuestion.options.map((opt, idx) => ({
    text: opt,
    origIdx: idx,
  }));
  const shuffled = shuffle(optionPairs);

  // Find the new index of the correct answer
  const newAnswerIndex = shuffled.findIndex(
    (o) => o.origIdx === originalQuestion.answer
  );

  return {
    ...originalQuestion,
    options: shuffled.map((o) => o.text),
    answer: newAnswerIndex,
  };
}

export class QuizManager {
  constructor(data) {
    this.originalData = data;
    this._resetQuestionOrder();
  }

  _resetQuestionOrder() {
    this.questionOrder = shuffle(this.originalData.map((_, idx) => idx));
    this.currentQuestionIdx = 0;
    this.incorrectAnswers = [];
    this.correctCount = 0;
    this.totalCount = this.questionOrder.length;
  }

  reset() {
    this._resetQuestionOrder();
  }

  getNextQuestion() {
    if (this.currentQuestionIdx >= this.questionOrder.length) {
      return null;
    }
    const questionIdx = this.questionOrder[this.currentQuestionIdx++];
    return {
      index: questionIdx,
      ...getRandomizedQuestion(this.originalData[questionIdx]),
    };
  }

  recordAnswer({ index, selectedIndex }) {
    const question = this.originalData[index];
    if (selectedIndex === question.answer) {
      this.correctCount += 1;
    } else {
      this.incorrectAnswers.push({
        question,
        selectedIndex,
        selectedOption: selectedIndex !== null && selectedIndex !== undefined
          ? question.options[selectedIndex]
          : null,
      });
    }
  }

  getScore() {
    return {
      correct: this.correctCount,
      total: this.totalCount,
      percent: Math.round((this.correctCount / this.totalCount) * 100)
    };
  }

  getIncorrectAnswers() {
    return this.incorrectAnswers;
  }
}

console.clear();

const cards = [
  {
    id: "1",
    isBookmarked: false,
    question: "How often can I use <header>?",
    answer: "As often as you like.",
    tags: ["html", "elements", "basic"],
  },
  {
    id: "2",
    isBookmarked: false,
    question: "How often can I use <aside>?",
    answer: "As often as you like.",
    tags: ["html", "elements", "basic"],
  },
  {
    id: "3",
    isBookmarked: true,
    question: "On which types can I use destructuring assignment?",
    answer: "On Objects and Arrays",
    tags: ["js", "next", "advanced"],
  },
];

const lowerCaseAnswers = cards.map((answer) => {
  return answer.answer.toLowerCase();
}); // ['as often as you like.', ...]
console.log(lowerCaseAnswers);

const questionsAndAnswersTogether = cards.map((fusion) => {
  const together = `${fusion.question} - ${fusion.answer}`;
  return together;
});
// ["How often can I use <header>? - As often as you like.", ...]
console.log(questionsAndAnswersTogether);

const questionAndAnswer = cards.map((card) => {
  return { question: card.question, answer: card.answer };
  // const together = `question: ${fusion.question}, answer: ${fusion.answer}`;
  // return together;
});

// Hier object returnen nicht mit text
// [{ question: 'How often can I use <header>?', answer: 'As often as you like.'}, {...}]
console.log(questionAndAnswer);

export { lowerCaseAnswers, questionsAndAnswersTogether, questionAndAnswer };

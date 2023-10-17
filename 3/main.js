// const questions = [
//   {
//       question: "რა არის 2 + 2?",
//       answers: ["3", "4", "5"],
//       correctAnswer: "4",
//   },
//   {
//       question: "რა არის 7 x 3?",
//       answers: ["21", "12", "18"],
//       correctAnswer: "21",
//   },
//   {
//       question: "რა არის 8 - 4?",
//       answers: ["4", "2", "5"],
//       correctAnswer: "4",
//   },
// ];

// let currentQuestion = 0;
// let score = 0;

// const questionElement = document.getElementById("question");
// const answersElement = document.getElementById("answers");
// const resultElement = document.getElementById("result");

// function loadQuestion() {
//   const currentQuestionData = questions[currentQuestion];
//   questionElement.textContent = currentQuestionData.question;

//   for (let i = 0; i < currentQuestionData.answers.length; i++) {
//       const answerButton = document.getElementById(`answer${i + 1}`);
//       answerButton.textContent = currentQuestionData.answers[i];
//       answerButton.addEventListener("click", () => checkAnswer(answerButton));
//   }
// }

// function checkAnswer(selectedAnswer) {
//   const currentQuestionData = questions[currentQuestion];
//   if (selectedAnswer.textContent === currentQuestionData.correctAnswer) {
//       resultElement.textContent = "სწორი პასუხი!";
//       score++;
//   } else {
//       resultElement.textContent = "არასწორი პასუხი";
//   }

//   currentQuestion++;
//   if (currentQuestion < questions.length) {
//       loadQuestion();
//   } else {
//       showFinalResult();
//   }
// }

// function showFinalResult() {
//   questionElement.textContent = "თამაში დასრულდა!";
//   answersElement.style.display = "none";
//   resultElement.textContent = `თქვენ დააგროვეთ ${score} სწორი პასუხი სულ ${questions.length}-დან.`;
// }

// loadQuestion();



const questions = [
  {
      question: "რა არის 2 + 2?",
      answers: ["3", "4", "5"],
      correctAnswer: "4",
  },
  {
      question: "რა არის 7 x 3?",
      answers: ["21", "12", "18"],
      correctAnswer: "21",
  },
  {
      question: "რა არის 8 - 4?",
      answers: ["4", "2", "5"],
      correctAnswer: "4",
  },
];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById("question");
const answersElement = document.getElementById("answers");
const resultElement = document.getElementById("result");

function loadQuestion() {
  const currentQuestionData = questions[currentQuestion];
  questionElement.textContent = currentQuestionData.question;

  for (let i = 0; i < currentQuestionData.answers.length; i++) {
      const answerButton = document.getElementById(`answer${i + 1}`);
      answerButton.textContent = currentQuestionData.answers[i];
      answerButton.addEventListener("click", () => checkAnswer(answerButton));
  }
}

function checkAnswer(selectedAnswer) {
  const currentQuestionData = questions[currentQuestion];
  if (selectedAnswer.textContent === currentQuestionData.correctAnswer) {
      resultElement.textContent = "სწორი პასუხი!";
      score++;
  } else {
      resultElement.textContent = "არასწორი პასუხი";
      selectedAnswer.style.backgroundColor = "red";
  }

  currentQuestion++;
  if (currentQuestion < questions.length) {
      loadQuestion();
  } else {
      showFinalResult();
  }
}

function showFinalResult() {
  questionElement.textContent = "თამაში დასრულდა!";
  answersElement.style.display = "none";
  resultElement.textContent = `თქვენ დააგროვეთ ${score} სწორი პასუხი სულ ${questions.length}-დან.`;
}

loadQuestion();
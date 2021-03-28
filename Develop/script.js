// const startQuiz = []

const startButton = document.getElementById("start-button");
const nextButton = document.getElementById("next-button");
const timerSpanElement = document.getElementById("timer");
const questionsContainer = document.getElementById("questions-container");
const introduction = document.getElementById("introduction");
const answerButtonsElement = document.getElementById("answer-buttons");
const container = document.getElementById("container");
let currentQuestionIndex = 0;
var timer = 60;

const questions = [
  {
    title: "Commonly used data types DO NOT INCLUDE:",
    choices: ["Strings", "Booleans", "Alerts", "Numbers"],
    correctAnswer: "Alerts",
  },

  {
    title: "The condition in an if an else statement is enclosed within:",
    choices: ["Quotes", "Curly Braces", "Parenthesis", "Square Brackets"],
    correctAnswer: "Curly Braces",
  },

  {
    title: "Arrays in Javascript can be used to store:",
    choices: [
      "Numbers & Strings",
      "Other Arrays",
      "Bookmarks",
      "All of the above",
    ],
    correctAnswer: "Curly Braces",
  },

  {
    title:
      "String values must be enclosed within__________ when being assigned to variables:",
    choices: ["Commas", "Curly Braces", "Parenthesis", "Quotes"],
    correctAnswer: "Curly Braces",
  },

  {
    title:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    choices: ["Javascript", "Terminal Bash", "for loops", "console,log"],
    correctAnswer: "Alerts",
  },
];

function startQuiz() {
  introduction.classList.add("hide");
  container.classList.remove("hide");
  displayQuestion();
  timerSpanElement.innerHTML = `Timer: ${timer}`;
  setInterval(function () {
    timerSpanElement.innerHTML = `Timer: ${timer--}`;
  }, 1000);
}

startButton.addEventListener("click", startQuiz);
nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  displayQuestion();
});

function displayQuestion() {
  var currentQuestion = questions[currentQuestionIndex];
  document.getElementById("questions").innerHTML = currentQuestion.title;
  var answers = currentQuestion.choices;
  var buttonGrid = document.createElement("div");
  for (let index = 0; index < answers.length; index++) {
    const element = answers[index];
    const button = document.createElement("button");
    button.classList.add("button");
    button.innerText = element;
    buttonGrid.appendChild(button);
  }
  answerButtonsElement.appendChild(buttonGrid);
}

// function showQuestion(question) {
//   questionElement.innerText = question.quq;
//   question.answers.forEach((answer) => {
//     const button = document.createElement("button");
//     button.classList.add("button");
//     if (answer.correct) {
//       button.dataset.correct = answer.correct;
//     }
//     button.addEventListener("click", selectAnswer);
//     answer.ButtonsElement.appendChild(button);
//   });
// }

// function resetState() {
//   next.Button.classList.add("hide");
//   while (answerButtonsElement.firstChild) {
//     answerButtonsElement.removeChild(answerButtonsElement.firstChild);
//   }
// }

// function selectAnswer(e) {
//   const selectedButton = e.target;
//   const correct = selectedButton.dataset.correct;
//   setStatusClass(document.body, correct);
//   Array.from(answerButtonsElement.children).forEach((button) => {
//     setStatusClass(button.dataset.correct);
//   });
//   next.Button.classList.remove("hide");
// }

// function setStatusClass(element, correct) {
//   clearStatusClass(element);
//   if (correct) {
//     element.classList.add("correct");
//   } else {
//     element.classList.add("incorrect");
//   }
// }

// function clearStatusClass(element) {
//   element.classList.remove("correct");
//   element.classList.remove("incorrect");
// }

// > function createChoice(choices) { }

// const verifyChoice = (question-1)
//   const target = question-1.;

//   if (target.matches ("button")) {
//     const answer = target.getAttribute ("data-answer")
//   }
// }

// // need to render each question

// const questions = [
//   {
//     title: "Commonly used data types DO NOT INCLUDE:",
//     choices: ["Strings", "Booleans", "Alerts", "Numbers" ],
//     correctAnswer:"Alerts"

//     title: "The condition in an if an else statement is enclosed within:",
//     choices: ["Quotes", "Curly Braces", "Parenthesis", "Square Brackets" ],
//     correctAnswer:"Curly Braces"

//     title: "Arrays in Javascript can be used to store:",
//     choices: ["Numbers & Strings", "Other Arrays", "Bookmarks", "All of the above" ],
//     correctAnswer:"Curly Braces"

//     title: "String values must be enclosed within__________ when being assigned to variables:",
//     choices: ["Commas", "Curly Braces", "Parenthesis", "Quotes" ],
//     correctAnswer:"Curly Braces"

//     title: "A very useful tool used during development and debugging for printing content to the debugger is:",
//     choices: ["Javascript", "Terminal Bash", "for loops", "console,log" ],
//     correctAnswer:"Alerts"

//   }
// ]

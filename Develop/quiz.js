// Question Bank

const questionBank = [
  {
    question: "Commonly used data types DO NOT INCLUDE:",
    option: ["Strings", "Booleans", "Alerts", "Numbers"],
    answer: "Alerts",
  },

  {
    question: "The condition in an if an else statement is enclosed within:",
    option: ["Quotes", "Curly Braces", "Parenthesis", "Square Brackets"],
    answer: "Curly Braces",
  },

  {
    question: "Arrays in Javascript can be used to store:",
    option: ["Numbers", "Other Arrays", "Strings", "All of the above"],
    answer: "All of the above",
  },
];

const question = document.getElementById("question");
const quizContainer = document.getElementById("quiz-container");
const scorecard = document.getElementById("scoreboard");
const option0 = document.getElementById("option0");
const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const option3 = document.getElementById("option3");
const next = document.querySelector(".next");
const points = document.getElementById("score");
const span = document.querySelectorAll("span");
const i = 0;
const score = 0;

//function to display questions
function displayQuestion() {

  for (var a = 0; a < span.length; a++) {
    span[a].style.background = "none";
  }
  question.innerHTML = "Question " + (i + 1) + " " + questionBank[i].question;
  option0.innerHTML = questionBank[i].option[0];
  option1.innerHTML = questionBank[i].option[1];
  option2.innerHTML = questionBank[i].option[2];
  option3.innerHTML = questionBank[i].option[3];
  stat.innerHTML =
    "Question" + " " + (i + 1) + " " + "of" + " " + questionBank.length;
}

// Timer

const verifyChoice = (event) => {
  const target = event.target;
  const currentTarget = event.currentTarget;
  if (target.matches(“button”)) {
    const answer = target.getAttribute(“data-answer”);
    const correctAnswer = currentTarget.getAttribute(“data-answer”);
    if (answer === correctAnswer) {
      index += 1;
      quizContainer.removeChild(document.getElementById(“questions-container”));
      renderQuestion();
    } else {
      alert(“Incorrect - Try Again”);
      timerValue -= 5;
    }
  }
  
// function to calculate score

function calcScore(e) {
  if (e.innerHTML === questionBank[i].answer && score < questionBank.length) {
    score = score + 1;
  }

  setTimeout(nextQuestion, 300);
}

//function to display next question

function nextQuestion() {
  if (i < questionBank.length - 1) {
    i = i + 1;
    displayQuestion();
  } else {
    points.innerHTML = score + "/" + questionBank.length;
    quizContainer.style.display = "none";
    scorecard.style.display = "block";
  }
}

// click events to next button

next.addEventListener("click", nextQuestion);

// Back to Quiz button
function backToQuiz() {
  location.reload();
}

// fucntion to check answer

function checkAnswers() {
  var answerBank = document.getElementById("answerBank");
  var answers = document.getElementById("answers");
  answerBank.style.display = "block";
  scorecard.style.display = "none";
  for (var a = 0; a < questionBank.length; a++) {
    var list = document.createElement("li");
    list.innerHTML = questionBank[a].answer;
    answers.appendChild(list);
  }
}
displayQuestion();

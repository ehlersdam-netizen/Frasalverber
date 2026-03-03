const questions = [
  {
    question: "Jeg kan ikke ____ mere. Det er for hårdt.",
    answers: ["holde ud", "holde af", "holde med"],
    correct: 0
  },
  {
    question: "Det ____ hvad du beslutter.",
    answers: ["afhænger af", "kommer af", "består af"],
    correct: 0
  }
];

let currentQuestion = 0;

const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const nextBtn = document.getElementById("nextBtn");

function loadQuestion() {
  const q = questions[currentQuestion];
  questionEl.innerText = q.question;
  answersEl.innerHTML = "";

  q.answers.forEach((answer, index) => {
    const button = document.createElement("button");
    button.innerText = answer;
    button.onclick = () => checkAnswer(index);
    answersEl.appendChild(button);
  });
}

function checkAnswer(index) {
  if (index === questions[currentQuestion].correct) {
    alert("Korrekt!");
  } else {
    alert("Forkert!");
  }
}

nextBtn.onclick = () => {
  currentQuestion++;
  if (currentQuestion >= questions.length) {
    currentQuestion = 0;
  }
  loadQuestion();
};

loadQuestion();

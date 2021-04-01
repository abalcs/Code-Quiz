// Variables
let highscores = document.querySelector('#highsores');
let timer = document.querySelector('#timer');

let intro = document.querySelector('#intro');
let startButton = document.querySelector('#start');

let question = document.querySelector('#question');
let choices = document.querySelector('#choices');
let answer = document.querySelector('#answer');

let end = document.querySelector('#end');
let score = document.querySelector('#score');
let initials = document.querySelector('#initials');

let qindex = 0;

// Q & A
let questions = [
  {
    question: "What does JS stand for?",
    choices: ["Juicy Steak", "January Swimming", "Javascript", "Jalapeno Strips"],
    answer: "3"
  },
  {
    question: "Is javascript coming naturally to me?",
    choices: ["No", "No", "No", "No"],
    answer: "2"
  },
  {
    question: "How long does the common octopus live?",
    choices: ["20-30 years", "5-10 years", "3-5 years", "1-2 years"],
    answer: "4"
  },
  {
    question: "Who is the greatest Quarterback of all time?",
    choices: ["Tom Brady", "Ryan Leaf", "Bobby Boucher", "What's a quarterback?"],
    answer: "1"
  },
  {
    question: "What does the 'ES' in ES6 stand for?",
    choices: ["Even Stevens", "Enlightened Spirits", "Ecma Script", "Electronic Signals"],
    answer: "3"
  }
];

let secondsLeft = 60;
let timerInterval;
let userScore = 0;

// When start button clicked, game starts
startButton.addEventListener('click', function() {
  startTimer()
  startGame()
})

function startTimer() {
  // Sets interval in variable
    timerInterval = setInterval(function() {
    secondsLeft--;
    timer.textContent = "Time Left: " + secondsLeft; 
  
    if(secondsLeft < 1) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      alert("You ran out of time!")
    }
  }, 1000);
}

function startGame() {
  document.querySelector("#intro").style.display = "none";
  document.querySelector("#begin").style.display = "block";
  getQuestion();
}


function getQuestion() {
  question.textContent = questions[qindex].question
  for (let i = 0; i < questions[qindex].choices.length; i++) {
    const button = document.createElement("button");
    button.textContent = questions[qindex].choices[i];
    button.id = (i + 1).toString()
    button.addEventListener('click', checkAnswer);
    question.append(button);
  }
}

function checkAnswer(event) {
  const usersAnswer = event.target.id
  if (usersAnswer === questions[qindex].answer) {
    answer.textContent = "Correct!"
    userScore += 10;
  } else {
    answer.textContent = "Answer is Wrong"
    secondsLeft -= 10;
  }
  qindex++;
  if (qindex < questions.length) {
    getQuestion()
  } else { 
    endGame()
  } 
}

function endGame() {
  clearInterval(timerInterval);
  document.querySelector("#begin").style.display = "none";
  document.querySelector("#end").style.display = "block";
  //display the score
  userScore.appendChild(score);
}
  //create event handler for the submit button and point it at the save score function.  See event handlier for button

  function saveScore() {

}


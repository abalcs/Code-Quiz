// Variables
let highscores = document.querySelector('#highscores');
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
let secondsLeft = 60;
let timerInterval;
let userScore = 0;

let list = localStorage.getItem('val')
highscores.append(list)

// Q & A
let questions = [
  {
    question: "What does JS stand for?",
    choices: ['Juicy Steak', "January Swimming", "Javascript", "Jalapeno Strips"],
    answer: "3"
  },
  {
    question: "What does DOM stand for?",
    choices: ["Document Objective Model", "Document Object Model", "Document of Null", "Data Obselete Negative"],
    answer: "2"
  },
  {
    question: "Which would you use to store items in an array?",
    choices: ["/*", "{}", "<>", "[]"],
    answer: "4"
  },
  {
    question: "Which would you use to store objects?",
    choices: ["{}", "[]", "()", "<>"],
    answer: "1"
  },
  {
    question: "What does the 'ES' in ES6 stand for?",
    choices: ["Even Stevens", "Enlightened Spirits", "Ecma Script", "Electronic Signals"],
    answer: "3"
  }
];

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
      endGame();
      alert("You ran out of time!");
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

    button.style.background = '#0275d8'
    button.style.color = 'white'
    button.style.width = '200px'
    button.style.textAlign = 'center'
    button.style.margin = '10px'
    button.style.padding = '10px'
    button.style.animation = 'fadeIn 2s'
    button.style.boxShadow = '0px 5px 15px lightgrey'

    button.classList.add('wrap')
    button.classList.add('rounded')

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
    answer.textContent = "Answer is Incorrect"
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
  userScore += secondsLeft
  score.append(userScore);

}

submit.addEventListener('click', function(event) {
  event.target.disabled = true;
  saveScore();
})

function saveScore() {
  let val = document.querySelector('input').value

  localStorage.setItem('val', val + ` ` + ` ` + userScore)

  location.reload()
}



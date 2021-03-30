// Variables
let highscores = document.querySelector('#highsores');
let time = document.querySelector('#time');
let intro = document.querySelector('#intro');
let startButton = document.querySelector('#start');
let begin = document.querySelector('#begin');
let question = document.querySelector('#question');
let choices = document.querySelector('#choices');
let answer = document.querySelector('#answer');
let end = document.querySelector('#end');
let score = document.querySelector('#score');
let submit = document.querySelector('#submit');

let timeRemaining = 60;
let questionCount = 0;
let correct = [];

// Q & A
let questions = [
  {
    question: "What does JS stand for?",
    choices: ["Juicy Steak", "January Swimming", "Javascript", "Jalapeno Strips"],
    answer: "3"
  },
  {
    question: "Is javascript coming naturally to me?",
    choices: ["Yes", "No", "Yes", "Yes"],
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


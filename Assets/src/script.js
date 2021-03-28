// Variables
let highscores = document.querySelector('#highsores');
let time = document.querySelector('#time');
let intro = document.querySelector('#intro');
let start = document.querySelector('#start');
let begin = document.querySelector('#begin');
let question = document.querySelector('#question');
let choices = document.querySelector('#choices');
let answer = document.querySelector('#answer');
let end = document.querySelector('#end');
let score = document.querySelector('#score');
let submit = document.querySelector('#submit');

let timeRemaining = [60];

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
    question: "What number question is this?",
    choices: ["5th", "1st", "2nd", "3rd"],
    answer: "4"
  },
  {
    question: "Who is the greatest Quarterback of all time?",
    choices: ["Tom Brady", "Ryan Leaf", "Bobby Boucher", "Don't know"],
    answer: "1"
  },
  {
    question: "What does the 'ES' in ES6 stand for?",
    choices: ["Even Stevens", "Enlightened Spirits", "Ecma Script", "Electronic Signals"],
    answer: "3"
  }
];



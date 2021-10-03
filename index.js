var readLineSync = require('readline-sync')
var userName = readLineSync.question("What is your name? ");
console.log("Welcome " + userName + " to DO YOU KNOW KHUSHTAR");
var score = 0
var highScores= [
  {
    name: "Shivam",
    score: 3,
  },

  {
    name: "Akash",
    score: 2,
  },
  {
    name: "Rishav",
    score: 1
  }
]
function quiz(question, answer) {
  var userAnswer = readLineSync.question(question)
  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("You are right")
    score++;
  } else {
    console.log("You are Wrong!")
  }
  console.log("Current score: " + score)
}
var questions = [{
  question: "Where do I live? ",
  answer: "Jamshedpur"
},
 {
  question: "Where do I work? ",
  answer: "Wipro"
},
{
  question: "Who is my favourite super hero? ",
  answer: "superman"
},
{
  question: "What is my favourite hobby? ",
  answer: "Workout"
},
{
  question: "What is my favourite sport? ",
  answer: "cricket"
}]

function game() {
  for (var i=0; i<questions.length; i++) {
    var currentQuestion = questions[i];
    quiz(currentQuestion.question, currentQuestion.answer)
  }
}

function showScores() {
  console.log("YAY! You SCORED: ", score);

  console.log("Check out the high scores, if you should be there ping me and I'll update it");
  highScores.map(score => console.log(score.name, " : ", score.score))
}
game()
showScores()
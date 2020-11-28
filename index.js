var readlineSync = require('readline-sync');
const chalk = require('chalk');
var userName = readlineSync.question('Enter Your Name Here : ');
var userScore = 0;
var userData=[{
  name: 'Raj',
  score: 5
}]
console.log('\nWelcome '+userName.toUpperCase()+' !\nDO YOU KNOW ME ? \n');

function play(question,answer) {
  var userAnswer = readlineSync.question(chalk.blue(question));
  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log(chalk.greenBright.bold('CORRECT'));
    userScore++;
  }else {
    console.log(chalk.redBright.bold('WRONG'));
  }
  console.log("score : " + userScore);
  console.log("_________________________\n");
}


var questions = [{
  question: "Q1. What's my full name ? \nAns : ",
  answer: "Raj Mishra"
},
{
  question: "Q2. where do I live ? \nAns : ",
  answer: "Raipur"
},
{
  question: "Q3. In which year I was born ? \nAns : ",
  answer: "1999"
},
{
  question: "Q4. what is my favourite color ? \nAns : ",
  answer: "Black"
},
{
  question: "Q5. what is my favourite sport ? \nAns : ",
  answer: "Cricket"
},];

for(var i=0;i<questions.length;i++) {
  var currentQuestion = questions[i];
  play(currentQuestion.question,currentQuestion.answer);
}

console.log('Your Score  \n'+userName+' : '+userScore+'\n');
console.log('High Score  \n'+'Raj : '+'5');

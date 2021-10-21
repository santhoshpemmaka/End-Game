var readlineSync = require('readline-sync');

var userName = readlineSync.question("What is your Name? ");

console.log(`Welcome ${userName} to do you know Santhosh Pemmaka?`);
var currentScore = 0;

var highScore = [
  {
    name : 'Santhosh',
    score : 5
  },
  {
    name : 'Varashith',
    score : 4
  }
]
function playGame(question, answer) {
  var userAnswer = readlineSync.question(question);
  if(userAnswer.toUpperCase() == answer.toUpperCase()){
    console.log("Right");
    currentScore +=1;
  }
  else{
    console.log("Wrong");
  }
  console.log(`Current Score is : ${currentScore}`);
  console.log('----------------------');
}

var questions = [
  {
  question : 'Where do I live? ',
  answer : 'Bangalore'
},
{
  question : 'What is favourite food? ',
  answer : 'Chicken'

},
{
  question : 'where do I work? ',
  answer : "IBM"
}]

for(var i =0;i<questions.length;i++){
  playGame(questions[i].question,questions[i].answer);
}


console.log(`YAY! You SCORED: ${currentScore}`);
console.log("Check out the high scores, if you should be there ping me and I'll update it");
for(var i=0;i<highScore.length;i++){
  console.log(`${highScore[i].name}    :  ${highScore[i].score}`);
}
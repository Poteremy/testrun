let questions = []
let title = document.getElementById('title');

let quiz = {
  title: "",
  questions: questions
}

function Question (question, answerOne, answerTwo) {
  this.question = question;
  this.answerOne = answerOne;
  this.answerTwo = answerTwo
}

document.querySelector('#submitTitle').addEventListener('click', function() {
  quiz.title = title.value
  document.querySelector('.quizTitle').innerHTML = title.value
  document.querySelector('.qtitle').classList.add('hidden')
  document.querySelector('.questionset').classList.remove('hidden')
})
let question = document.getElementById('question');
let answerone = document.getElementById('answerOne');
let answertwo = document.getElementById('answerTwo');

document.querySelector('#submitQuestions').addEventListener('click', function() {
  questions.push(new Question(question.value, answerone.value, answertwo.value))
  question.value = ''
  answerone.value = ''
  answertwo.value = ''
  console.log(quiz)
})
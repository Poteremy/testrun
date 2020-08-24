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
  document.querySelector('.questions').classList.remove('hidden')
  document.querySelector('.buttons').classList.remove('hidden')
})

function setAttributes(element, attributes) {
  Object.keys(attributes).forEach(function(name) {
    element.setAttribute(name, attributes[name])
  })
}

let i = 2
document.querySelector('#add').addEventListener('click', function() {
  let div = document.createElement('div')
  let q = document.createElement('input')
  let aOne = document.createElement('input')
  let aTwo = document.createElement('input')
  let h = document.createElement('h1')
  div.setAttribute('class', 'questionset')
  h.innerHTML = `Question ${i}`
  setAttributes(q, {
    type: 'text',
    placeholder: 'Question',
  })
  setAttributes(aOne, {
    type: 'text',
    placeholder: 'Answer Choice 1',
  })
  setAttributes(aTwo, {
    type: 'text', 
    placeholder: 'Answer Choice 2',
  })
  div.appendChild(h)
  div.appendChild(q)
  div.appendChild(aOne)
  div.appendChild(aTwo)
  document.querySelector('.questions').appendChild(div)
  i++
})

document.querySelector('#submitQuestions').addEventListener('click', function() {
  document.querySelectorAll('.questionset').forEach(el => {
    let n = 3
    let question = el.children[n-2]
    let answerone = el.children[n-1]
    let answertwo = el.children[n]
      
    questions.push(new Question(question.value, answerone.value, answertwo.value))
  }) 
  console.log(quiz)
})

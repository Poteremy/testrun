let questions = []
let title = document.getElementById('title');
let correct


let quiz = {
  title: "",
  questions: questions
}

function Question (question, answerOne, answerTwo, correct) {
  this.question = question;
  this.answerOne = answerOne;
  this.answerTwo = answerTwo;
  this.correct = correct

}

document.querySelector('#submitTitle').addEventListener('click', function() {
  quiz.title = title.value
  document.querySelector('.quizTitle').innerHTML = title.value
  document.querySelector('.qtitle').classList.add('hidden')
  document.querySelector('.questions').classList.remove('hidden')
  document.querySelector('.buttons').classList.remove('hidden')
})

// Set Attributes Helper Function
function setAttributes(element, attributes) {
  Object.keys(attributes).forEach(function(name) {
    element.setAttribute(name, attributes[name])
  })
}

//Add Questions
let i = 2
document.querySelector('#add').addEventListener('click', function() {
  let div = document.createElement('div')
  let q = document.createElement('input')
  let aOne = document.createElement('input')
  let aTwo = document.createElement('input')
  let h = document.createElement('h1')
  let s = document.createElement('span')
  let icheck = document.createElement('input')

  div.setAttribute('class', 'questionset')

  h.innerHTML = `Question ${i}`

  setAttributes(q, {
    type: 'text',
    placeholder: 'Question',
  })

  setAttributes(aOne, {
    type: 'text',
    placeholder: 'Answer Choice 1'
  })

  setAttributes(aTwo, {
    type: 'text', 
    placeholder: 'Answer Choice 2'
  })

  div.appendChild(h)
  div.appendChild(q)
  div.appendChild(aOne)
  div.appendChild(aTwo)
  document.querySelector('.questions').appendChild(div)
  i++
})

//Submit Questions
document.querySelector('#submitQuestions').addEventListener('click', function() {
  document.querySelectorAll('.questionset').forEach(el => {
    let question = el.querySelector('.question')
    let answerone = el.querySelector('.answerOne')
    let answertwo = el.querySelector('.answerTwo')

    el.querySelectorAll('.checkbox').forEach(check => {
      check.nextElementSibling.correct = false
      if(check.checked) {
        check.nextElementSibling.correct = true
      }
    })
    
    questions.push(new Question(question.value, answerone.value, answertwo.value, correct))
  }) 
  console.log(quiz)
  
})

//Load First Question
let t = 0
document.querySelector('#play').addEventListener('click', function() {
  document.querySelector('.questions').classList.add('hidden')
  document.querySelector('.buttons').classList.add('hidden')
  document.querySelector('#play').classList.add('hidden')
  document.querySelector('.set').classList.remove('hidden')
  document.querySelector('#question').innerHTML = questions[t].question
  document.querySelector('#aOne').innerHTML = questions[t].answerOne
  document.querySelector('#aTwo').innerHTML = questions[t].answerTwo
})

//Load Next Question
document.querySelector('#next').addEventListener('click', function() {
  t++
  document.querySelector('#question').innerHTML = questions[t].question
  document.querySelector('#aOne').innerHTML = questions[t].answerOne
  document.querySelector('#aTwo').innerHTML = questions[t].answerTwo

// No More Questions
  if(t == questions.length -1) {
    document.querySelector('#next').innerHTML = 'Done'
  }
})

document.querySelector('.display').addEventListener('click', function() {
  document.querySelectorAll('.choices').forEach(choice => {
    if(choice.checked){
      console.log(choice.nextElementSibling.correct)
    }
  })
})



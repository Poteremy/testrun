let questions = []
let title = document.getElementById('title');
let correct
let points = 0
let pointBonus = 10


let quiz = {
  title: "",
  questions: questions
}

function Question (question, answerOne, answerTwo, answerThree, answerFour, correct) {
  this.question = question;
  this.answerOne = answerOne;
  this.answerTwo = answerTwo;
  this.answerThree = answerThree;
  this.answerFour = answerFour
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
  let a = document.createElement('input')
  let h = document.createElement('h1')
  let s = document.createElement('span')
  let icheck = document.createElement('input')

  div.setAttribute('class', 'questionset')

  h.setAttribute('class', 'qnum')

  h.innerHTML = `Question ${i}`

  setAttributes(q, {
    type: 'text',
    placeholder: 'Question',
    class: 'question'
  })

  setAttributes(s, {
    class: 'option'
  })

  setAttributes(icheck, {
    type: 'checkbox',
    class: 'checkbox'
  })

  div.appendChild(h)
  div.appendChild(q)
  let x = 1
  do {
    s.appendChild(icheck)
    setAttributes(a, {
      type: 'text',
      placeholder: `Answer Choice ${x}`,
      class: `input answer${x}`
    })
    s.appendChild(a)
    div.appendChild(s.cloneNode(true))
    x++
  } while(x<5) 

  document.querySelector('.questions').appendChild(div)

  
  i++
})

//Submit Questions
document.querySelector('#submitQuestions').addEventListener('click', function() {
  document.querySelectorAll('.questionset').forEach(el => {
    let question = el.querySelector('.question')
    let answerone = el.querySelector('.answer1')
    let answertwo = el.querySelector('.answer2')
    let answerthree = el.querySelector('.answer3')
    let answerfour = el.querySelector('.answer4')

    el.querySelectorAll('.checkbox').forEach(check => {
      check.nextElementSibling.correct = false
      if(check.checked) {
        check.nextElementSibling.correct = true
      }
    })

    if(el.querySelector('.answer1').correct) {
      correct = el.querySelector('.answer1').value
    } else if (el.querySelector('.answer2').correct) {
      correct = el.querySelector('.answer2').value
    } else if (el.querySelector('.answer3').correct) {
      correct = el.querySelector('.answer3').value
    } else if (el.querySelector('.answer4').correct) {
      correct = el.querySelector('.answer4').value
    }

    questions.push(new Question(question.value, answerone.value, answertwo.value, answerthree.value, answerfour.value, correct))
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
  document.querySelector('#aThree').innerHTML = questions[t].answerThree
  document.querySelector('#aFour').innerHTML = questions[t].answerFour
})

//Load Question Delay
function getIt() {
  document.querySelectorAll('.choices').forEach(choice => {
    choice.checked = false
  })
  t++
  document.querySelector('#question').innerHTML = questions[t].question
  document.querySelector('#aOne').innerHTML = questions[t].answerOne
  document.querySelector('#aTwo').innerHTML = questions[t].answerTwo
  document.querySelector('#aThree').innerHTML = questions[t].answerThree
  document.querySelector('#aFour').innerHTML = questions[t].answerFour
}

//Load Next Question
document.querySelector('#next').addEventListener('click', function() {
  checkAnswer()
  setTimeout(getIt, 1500 )
  
// No More Questions
  if(t == questions.length -1) {
    document.querySelector('#next').innerHTML = 'Done'
  }
})


//Check Answer
function checkAnswer() {
  let first = document.getElementById('first');
  let second = document.getElementById('second');
  let third = document.getElementById('third');
  let fourth = document.getElementById('fourth');
  let score = document.getElementById('score');

  if(first.checked) {
    if(first.nextElementSibling.innerHTML == questions[t].correct) {
      points = points + pointBonus
      score.innerHTML = `Score: ${points}`
    } else console.log('no')
  }

  if(second.checked) {
    if(second.nextElementSibling.innerHTML == questions[t].correct) {
      points = points + pointBonus
      score.innerHTML = `Score: ${points}`
    } else console.log('no')
  }

  if(third.checked) {
    if(third.nextElementSibling.innerHTML == questions[t].correct) {
      points = points + pointBonus
      score.innerHTML = `Score: ${points}`
    } else console.log('no')
  }

  if(fourth.checked) {
    if(fourth.nextElementSibling.innerHTML == questions[t].correct) {
      points = points + pointBonus
      score.innerHTML = `Score: ${points}`
    } else console.log('no')
  }}


const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')

const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const questionContainerElement = document.getElementById('question-container');

let shuffledQuestions, currentQuestionIndex


startButton.addEventListener('click', startGame)
nextButton.addEventListener('click',() =>{
    currentQuestionIndex++
    setNextQuestion()
} )

function startGame() {
    startButton.classList.add('hide')
    
    shuffledQuestions = questions.sort(() => Math.random() - 0.5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
   
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
           
            button.dataset.correct = answer.correct
            
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
   
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach((button) => {
        setStatusClassB(button, button.dataset.correct)

    })
    if(shuffledQuestions.length > currentQuestionIndex + 1){
    nextButton.classList.remove('hide')
    }else{
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
        questionContainerElement.classList.add('hide')
        
        
    }
}

function setStatusClass(element, correct){
    clearStatusClass(element)
   // console.log(element)
    
    if(correct === "true"){
        element.classList.add('correct')
       
    }else{
        element.classList.add('wrong')
    }

}

function setStatusClassB(element, correct){
    clearStatusClass(element)
  
    


    if(correct === "true"){
   
        element.classList.add('correct')
    }else{
        element.classList.add('wrong')   
    }
}


function clearStatusClass(element){
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const questions = [
    {
        question: ' which pair of friends never kissed in the series',
        answers: [
            {
                text: 'joey and phoebe', correct: false
            },
            {
                text: 'chandler and rachel', correct: false
            },
            {
                text: 'ross and monica', correct: false
            },
            {
                text: 'joey and monica', correct: true
            }
        ]
    },
    {
        question: ' Ross dated all except',
        answers: [
            {
                text: 'mona', correct: false
            },
            {
                text: 'kathy', correct: true
            },
            {
                text: 'charlie', correct: false
            },
            {
                text: 'elizabeth', correct: false
            }
        ]
    },
    {
        question: ' Rachel\'s best movie', 
        answers: [
            {
                text: 'weekend at bernie\'s', correct: true
            },
            {
                text: 'mac and cheese', correct: false
            },
            {
                text: ' dangerous liasons', correct: false
            },
            {
                text: 'die hard', correct: false
            }
        ]
    }, 
    {
        question: ' what name did mike threathen phoebe that he was going to bear if she didn\'t change her\'s back',
        answers: [
            {
                text: 'trash', correct: false
            },
            {
                text: 'waste bin', correct: false
            },
            {
                text: 'crap bag', correct: true
            },
            {
                text: 'banana hammock', correct: false
            }
        ]
    },
    {
        question: ' where did chandler and monica first hookup',
        answers: [
            {
                text: 'vegas', correct: false
            },
            {
                text: 'central perk', correct: false
            },
            {
                text: 'athlantic city', correct: false
            },
            {
                text: 'england', correct: true
            }
        ]
    },
    {
        question: '...Chandler, Frank III, What is the name of the third child among phoebe\'s triplets',
        answers: [
            {
                text: 'leslie', correct: true
            },
            {
                text: 'emma', correct: false
            },
            {
                text: 'ben', correct: false
            },
            {
                text: 'joey', correct: false
            }
        ]
    },
    {
        question: ' Name of the old man that live in the appartment below monica\'s',
        answers: [
            {
                text: 'mr hemmings', correct: false
            },
            {
                text: 'mr heckles', correct: true
            },
            {
                text: 'mr malfoy', correct: false
            },
            {
                text: 'mr trigger', correct: false
            }
        ]
    },
    {
        question: ' ross married all of these except',
        answers: [
            {
                text: 'rachel', correct: false
            },
            {
                text: 'emily', correct: false
            },
            {
                text: 'phoebe', correct: true
            },
            {
                text: 'carol', correct: false
            }
        ]
    },
    {
        question: ' what did joey do for trigger to prevent the eviction of monica and rachel',
        answers: [
            {
                text: 'dance practice', correct: true
            },
            {
                text: 'wash his toilet', correct: false
            },
            {
                text: 'unclog the gabbage shoot', correct: false
            },
            {
                text: 'sang him "happy birthday"', correct: false
            }
        ]
    },
    {
        question: ' which one of the friends hated Thanksgiving',
        answers: [
            {
                text: 'rachel', correct: false
            },
            {
                text: 'chandler', correct: true
            },
            {
                text: 'phebs', correct: false
            },
            {
                text: 'joey', correct: false
            }
        ]
    },
    {
        question: ' which of joey\'s sisters did chandler kiss',
        answers: [
            {
                text: 'gina', correct: false
            },
            {
                text: 'dina', correct: false
            },
            {
                text: 'mary angela', correct: true
            },
            {
                text: 'mary therese', correct: false
            }
        ]
    },
    {
        question: ' what was chandler\'s middle name',
        answers: [
            {
                text: 'maxwell', correct: false
            },
            {
                text: 'manuel', correct: false
            },
            {
                text: 'miguel', correct: false
            },
            {
                text: 'muriel', correct: true
            }
        ]
    }
]
const quizForm = document.querySelector('.quiz-form')
const options = quizForm.querySelector('.options')
const question = quizForm.querySelector('.lead')
const nextBtn = document.querySelector('#next')
const prevBtn = document.querySelector('#previous')

export let nQuestion = 0;
export let nCorrect = 0;

export let listOfQuestions = [
    {
        question:"What is Software?",
        options: ["Software is set of programs",
            "Software is set of programs, documentation & configuration of data",
            "None of the mentioned",
            "Software is documentation and configuration of data"
        ],
        correctAnswer:"Software is set of programs, documentation & configuration of data"
    },
    {
        question:"Which of the following statement is incorrect about software engineering?",
        options: ["Software engineering belongs to Computer science",
            "Software engineering is a part of more general form of System Engineering",
            "Computer science belongs to Software engineering",
            "Software engineering is concerned with the practicalities of developing and delivering useful software"
        ],
        correctAnswer:"Computer science belongs to Software engineering"
    },
    {
        question:"The fundamental notions of software engineering does not account for?",
        options: ["Software processes",
            "Software security",
            "Software reuse",
            "Software validation"
        ],
        correctAnswer:"Software validation"
    },
    {
        question:"Which of these are not among the eight principles followed by Software Engineering Code of Ethics and Professional Practice?",
        options: ["PUBLIC",
                "PROFESSION",
                "PRODUCT",
                "ENVIRONMENT"
            ],
            correctAnswer:"Environment"
    },
    {
        question:"Which of these software engineering activities are not a part of software processes?",
        options: ["Software dependence",
            "Software validation",
            "Software development",
            "Software specification"
        ],
        correctAnswer:"Software dependence"
    },
    {
        question:"SDLC stands for?",
        options: ["Software Deveopment Life cycle",
            "System Development life cycle",
            "Software Design life cycle",
            "System Design life cycle"
        ],
        correctAnswer:"Software Deveopment Life cycle"
    },
    {
        question:"Who was first to proposed the Cleanroom philosophy in software engineering?",
        options: ["Mills",
            "Dyer",
            "Linger",
            "All of the Mentioned"
        ],
        correctAnswer:"All of the Mentioned"
    }     
]
function generateQuestion(presentQuestion){
    options.innerHTML =  `
    ${
        (() => {
    let options = ''
    // let question = ''
    Object.keys(presentQuestion).forEach((key) => {
                   let markup = ''
                   if(key === 'question'){
                       question.innerHTML = `${presentQuestion[key]}`
                   }
                    else if(key === 'options'){
                        markup +=  presentQuestion[key].map((option,ind) => {return `<div class="form-check my-5 text-white-50"> \n\t<input type="radio" name="o${nQuestion}" value="${option}">
    <label class="mx-2 form-check-label">${option}</label>\n</div>`}).join('')
                    }
                       options += markup
        })
    return options

    })()
        }
    `
}
// console.log(generateQuestion(listOfQuestions[1]))
function pageLoad(){
    generateQuestion(listOfQuestions[nQuestion])
    prevBtn.disabled = true
    
}
Window.onload = pageLoad()

let answers = []
console.log(answers)
nextBtn.addEventListener('click',(e)=>{
    e.preventDefault()
    let generatedOptions = Array.from(options.querySelectorAll('.form-check')).map((option)=>{
        return Array.from(option.children).map((item)=>{
            return (item.tagName == 'INPUT') ?  item.checked  : (item.tagName == 'LABEL') ? item.innerText : ''
        })
    })
    console.log(generatedOptions)
    for(let i of generatedOptions){
        if(i[0] === true && nQuestion <= listOfQuestions.length){
            answers.push(i[1])
            nQuestion+= 1
            generateQuestion(listOfQuestions[nQuestion])
        }
        else{
            alert('please select an option')
            continue
        }
    }
})

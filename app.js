const quizForm = document.querySelector('.quiz-form')
const options = quizForm.querySelector('.options')
const question = quizForm.querySelector('.lead')


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
    options.innerHTML +=  `
    ${
        (() => {
    let options = ''
    // let question = ''
    Object.keys(presentQuestion).forEach((key) => {
                   let markup = ''
                   if(key === 'question'){
                       question.innerHTML += `${presentQuestion[key]}`
                   }
                    else if(key === 'options'){
                        markup +=  presentQuestion[key].map((option,ind) => {return `<div class="form-check my-5 text-white-50"> \n\t<input type="radio" name="q${ind+1}" value="${option}">
    <label class="mx-2 form-check-label">${option}</label>\n</div>`}).join('')
                    }
                       options += markup
        })
    return options

    })()
        }
    `
}

Window.onload = generateQuestion(listOfQuestions[nQuestion])
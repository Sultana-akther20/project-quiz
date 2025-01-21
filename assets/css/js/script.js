const quizs=[{
    question: "What is the capital of city of England?",
    answers: [
        { text: "London", correct: true},
        { text: "Barmingham", correct: false},
        { text: "Luton", correct: false},
        { text: "Manchester", correct: false},
    ]
},
{
    question: "What currency is called in the UK?",
    answers: [
        { text: "Euro", correct: false},
        { text: "Pounds Sterling", correct: true},
        { text: "Dollar", correct: false},
        { text: "Taka", correct: false},
    ]   
},
{
    question: "Which one is UK's timezone?",
    answers: [
        { text: "GMT", correct: true},
        { text: "EST", correct: false},
        { text: "CET", correct: false},
        { text: "PST", correct: false},
    ]     
},
{
    question: "What does BBC stand for??",
    answers: [
        { text: "British Bigest Cat ", correct: false},
        { text: "British Baking Contest", correct: false},
        { text: "Best Broadcasting Channel", correct: false},
        { text: "British Broadcasting Corporation", correct: true},
    ]     
},
{
    question: "When is Halloween?",
    answers: [
        { text: "28 FEB", correct: false},
        { text: "14 FEB", correct: false},
        { text: "31 OCT", correct: true},
        { text: "25 DEC", correct: false},
    ]     
},
{
    question: "What is the largest country in the UK?",
    answers: [
        { text: "Northern Ireland", correct: false},
        { text: "England", correct: true},
        { text: "Wales", correct: false},
        { text: "Scotland", correct: false},
    ]        
}
];

const questionElement = document.getElementById("question");
const answerElement = document.getElementById("div");
const nextElement = document.getElementsByClassName("next")[0];

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextElement.innerHTML="Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = quizs[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach((answer) => {
        const button = document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        
        answerElement.appendChild(button);
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextElement.style.display = "none";
    while(answerElement.firstChild){
        answerElement.removeChild(answerElement.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerElement.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");

        }
        button.disabled = true;
    });
    nextElement.style.display = "block";
    }

    function showScore(){
        resetState();
        questionElement.innerHTML = `your score ${score} out of ${quizs.length}!`;
        nextElement.innerHTML="Play Again";
        nextElement.style.display ="block";
    }
    function handleNextButton(){
        currentQuestionIndex++;
        if(currentQuestionIndex < quizs.length){
            showQuestion();
        }else{
            showScore();
        }
        }
    
    nextElement.addEventListener("click", ()=>{
        if(currentQuestionIndex < quizs.length){
            handleNextButton();
        }else{
startQuiz();
        }
        
    });
startQuiz();

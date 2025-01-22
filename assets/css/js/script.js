//used array to set the question and answer
const quizs=[{
    question: "What is the capital city of England?",
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
//connecting javascript to html
const questionElement = document.getElementById("question");
const answerElement = document.getElementById("div");
const nextElement = document.getElementsByClassName("next")[0];

//set the variable to start from 0
let currentIndex = 0;
let score = 0;

function randomQuestion(){
    for(let i = quizs.length - 1;
        i > 0; i--){
            const j =Math.floor(Math.random() * (i + 1));
            [quizs[i], quizs[j]] =[quizs[j], quizs[i]];
        }
}
//function for starting quiz from beginning and call show function to show first question
function startQuiz(){
    randomQuestion();
    currentIndex = 0;
    score = 0;
    nextElement.innerHTML="Next";
    showQuestion();
}



//function for showing question
function showQuestion(){
    resetState();
    let currentQuestion = quizs[currentIndex];
    let questionNo = currentIndex + 1;
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
        questionElement.innerHTML = `you scored ${score} out of ${quizs.length}!`;
        nextElement.innerHTML="Restart The Quiz";
        nextElement.style.display ="block";
    }
    function handleNextButton(){
        currentIndex++;
        if(currentIndex < quizs.length){
            showQuestion();
        }else{
            showScore();
        }
        }
    
    nextElement.addEventListener("click", ()=>{
        if(currentIndex < quizs.length){
            handleNextButton();
        }else{
startQuiz();
        }
        
    });
startQuiz();

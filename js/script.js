$(document).ready(function () {
    const currentPage = window.location.pathname;
    if (currentPage.includes("index.html")) {

        //act on submition behavior, check the typed username and display a wellcome message to start the quiz
        const $form = $("#form");
        if ($form.length) {
            $form.on("submit", function (e) {
                e.preventDefault();


                const userName = $("#username").val();
                if (userName) {
                    alert(`Welcome ${userName} to the quiz about UK.`);
                    window.location.href = "quiz.html";
                }
            });
        }
    }
    if (currentPage.includes("quiz.html")) {

        //used array to set the question and answer
        const quiz = [{
            question: "What is the capital city of England?",
            answers: [
                { text: "London", correct: true },
                { text: "Barmingham", correct: false },
                { text: "Luton", correct: false },
                { text: "Manchester", correct: false },
            ]
        },
        {
            question: "What currency is called in the UK?",
            answers: [
                { text: "Euro", correct: false },
                { text: "Pounds Sterling", correct: true },
                { text: "Dollar", correct: false },
                { text: "Taka", correct: false },
            ]
        },
        {
            question: "Which one is UK's timezone?",
            answers: [
                { text: "GMT", correct: true },
                { text: "EST", correct: false },
                { text: "CET", correct: false },
                { text: "PST", correct: false },
            ]
        },
        {
            question: "What does BBC stand for??",
            answers: [
                { text: "British Bigest Cat ", correct: false },
                { text: "British Baking Contest", correct: false },
                { text: "Best Broadcasting Channel", correct: false },
                { text: "British Broadcasting Corporation", correct: true },
            ]
        },
        {
            question: "When is Halloween?",
            answers: [
                { text: "28 FEB", correct: false },
                { text: "14 FEB", correct: false },
                { text: "31 OCT", correct: true },
                { text: "25 DEC", correct: false },
            ]
        },
        {
            question: "What is the largest country in the UK?",
            answers: [
                { text: "Northern Ireland", correct: false },
                { text: "England", correct: true },
                { text: "Wales", correct: false },
                { text: "Scotland", correct: false },
            ]
        },
        {
            question: "What is the name of the corrent king?",
            answers: [
                { text: "King George V", correct: false },
                { text: "King George VI", correct: false },
                { text: "King Charles III", correct: true },
                { text: "King Edward VIII", correct: false },
            ]
        },
        {
            question: "When queen Elizabeth II died?",
            answers: [
                { text: "2000", correct: false },
                { text: "1952", correct: false },
                { text: "1990", correct: false },
                { text: "2022", correct: true },
            ]
        },
        {
            question: "How many countries are with uk?",
            answers: [
                { text: "3", correct: false },
                { text: "4", correct: true },
                { text: "6", correct: false },
                { text: "5", correct: false },
            ]
        },
        {
            question: "How many years did Queen Elizabeth rule?",
            answers: [
                { text: "Over 70 years", correct: true },
                { text: "71 years", correct: false },
                { text: "60 years", correct: false },
                { text: "over 65years", correct: false },
            ]
        }

        ];

        //connecting javascript to html
        const $questionElement = $("#question");
        const $answerElement = $("#div");
        const $nextElement = $("#next");

        //set the variables to start from 0
        let currentIndex = 0;
        let score = 0;

        //randomise the questions
        const randomQuestion = () => {
            quiz.sort(() => Math.random() - 0.5);
        };

        //function for starting quiz from beginning and call show function to show first question and set the score and sets the next button
        const startQuiz = () => {
            randomQuestion();
            currentIndex = 0;
            score = 0;
            $nextElement.text("Next").hide();
            showQuestion();
        };



        //function for showing question, reset the previous state and display the question
        const showQuestion = () => {
            resetFunction();
            const currentQuestion = quiz[currentIndex];
            const questionNo = currentIndex + 1;
            $questionElement.text(`${questionNo}. ${currentQuestion.question}`);

            //arraw function create a button for each answer and sets to the answer text.
            currentQuestion.answers.forEach((answer) => {
                const $button = $("<button>")
                    .addClass("btn")
                    .text(answer.text)
                    .data("correct", answer.correct)
                    .on("click", selectAnswer);
                //append the button and custom data for correct answer and handle answer selection dynamically
                $answerElement.append($button);
            });
        };

        //restFunction clears the state for next question
        const resetFunction = () => {
            $nextElement.hide();
            $answerElement.empty();
        };

        //this function check the answer is true or false and set the colour as sets and increment the scores
        const selectAnswer = (e) => {
            const $selectedBtn = $(e.target);
            const isCorrect = $selectedBtn.data("correct");
            if (isCorrect) {
                $selectedBtn.addClass("correct");
                score++;
            } else {
                $selectedBtn.addClass("incorrect");
            }
            //enable next button, disebled the buttons after clicking the answer and highlight the correct answer
            $answerElement.children().each(function () {
                const $btn = $(this);
                if ($btn.data("correct")) {
                    $btn.addClass("correct");

                }
                $btn.prop("disabled", true);
            });
            $nextElement.show();
        };
        //showScore showes the final score in a message after clearing the state 
        const showScore = () => {
            resetFunction();
            $questionElement.text(`you scored ${score} out of ${quiz.length}!`);
            $nextElement.text("Restart The Quiz").show();
        };
        $nextElement.on("click", function () {
            if($nextElement.text() === "Restart The Quiz"){
                startQuiz();
            }else{
            currentIndex++;
            if (currentIndex < quiz.length) {
                showQuestion();
            } else {
                showScore();
            }
            }
        });
        startQuiz();

    }
});



//start the quiz after script is loaded  







//for testinhg
module.exports = { randomQuestion, startQuiz, showQuestion, resetFunction, selectAnswer, showScore, handleNextButton, };

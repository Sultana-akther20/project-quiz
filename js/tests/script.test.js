/**
 * @jest-environment jsdom
 */


const {randomQuestion, startQuiz, showQuestion, resetFunction, selectAnswer, showScore,handleNextButton,}= require("../script.js");

beforeAll(() => {
    let fs =require("fs");
    let fileContents = fs.readFileSync("index.html", "utf-8");
    document.open();
    document.write(fileContents);
    document.close();
});

describe("Quiz Tests", () => {
    let questionElement, answerElement, nextElement;
    beforeEach(() => {
        document.body.innerHTML=`<div id="question"></div> <div id="div"></div> <button id="next"></button>`;
        questionElement=document.getElementById("question");
        answerElement=document.getElementById("div");
        nextElement=document.getElementById("next");
    })
    describe("randomQuestion function", () => {
    });
    });

    //test("shuffles the quiz array", () => {
       // const quiz=[{ question: 'Q1', answers:
           // [{text:'A1', correct:true}]},
           // { question: 'Q2', answers:[{ text:'A2', correct: false}]},
        //];
        //const randomiseQuiz=[...quiz];
       // randomQuestion(randomiseQuiz);
       // expect(randomiseQuiz).not.toEqual(quiz);
       // expect(randomiseQuiz).toHaveLength(quiz.length);

    //});
//});
//});

const { removeLinesBeforeExternalMatcherTrap } = require("jest-snapshot/build/utils.js");
const {randomQuestion, startQuiz, showQuestion, resetFunction, selectAnswer, showScore,handleNextButton,}= require("../script.js");
const { before } = require("lodash");


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
    test("randomQuestion for the quiz array", () => {
        const randomise=
    expectExport("randomQuestion" in randomise).toBe(true);

    });
});
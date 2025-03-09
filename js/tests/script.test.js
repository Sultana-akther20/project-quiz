/**
 * @jest-environment jsdom
 */
const $ = require("jquery");
global.$ = global.jquery = $;
//import { showScore } from "../script.js";
//import { removeLinesBeforeExternalMatcherTrap } from "jest-snapshot/build/utils.js";
const {showScore}=require("../script.js");
//const { removeLinesBeforeExternalMatcherTrap } = require("jest-snapshot/build/utils.js");
//import { showScore } from "../script.js";
   
    describe("showScore function", () => {
        beforeEach(() =>{
        document.body.innerHTML = `<div id = 'question'></div><button id ='next'></button>`;
        });
        test("should show the score after finishing the quiz", () =>{
            const $questionElement = $ ("#question");
            const $nextElement = $ ("#next");
            const quizLength = 10;
            let score = 5;

            showScore(score, quizLength)

            expect($questionElement.text()).toBe(`you scored ${score} out of ${quizLength}!`);
            expect($nextElement.text()).toBe("Restart The quiz");
            expect($nextElement.css("display")).not.toBe("none");
        });
    });
    
    

    
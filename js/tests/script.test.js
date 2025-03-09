/**
 * @jest-environment jsdom
 */
const {JSDOM}=require("jsdom");
const {showScore} = require("../script.js");
const dom = new JSDOM(`<!DOCTYPE html><html><body><div id= "question"></div><button id="next"></button></body></html>`);
const $ = require("jquery")(new JSDOM(`<!DOCTYPE html><html><body></body></html>`).window);
//const $ = require("jquery");
global.window = dom.window;
global.document=dom.window.document;
global.$ = require("jquery")(global.window);
//import { showScore } from "../script.js";
//import { removeLinesBeforeExternalMatcherTrap } from "jest-snapshot/build/utils.js";
/*const script = require("../script.js");
console.log("Imported script:", script);
if (!script.showScore){
    throw new Error("showscore is not define");
}
const {showScore} = script;*/
   
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
            expect($nextElement.text()).toBe("Restart The Quiz");
            expect($nextElement.css("display")).not.toBe("none");
        });
    });
    
    

    
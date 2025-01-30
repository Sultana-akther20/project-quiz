const $ = require("jquery");
const {showScore}= require("../script");





 document.body.innerHTML=`<div id="question"></div> <div id="div"></div> <button id="next"></button>`;
        
    describe("showScore function", () => {
        test("should show the score for after finishing the quiz", () =>{
            const $questionElement = $ ("#question");
            const $nextElement = $ ("#next");
            const quizLength = 10;
            let score = 5;

            showScore($questionElement.text()).toBe(`you scored ${score} out of ${quizLength}!`);
            expect($nextElement.text()).toBe("Restart The quiz");
            expect($nextElement.css("display")).not.toBe("none");
        });
    });
    

    
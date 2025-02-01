
const {showScore}= require("../script.js");


   
    describe("showScore function", () => {
        test("should show the score after finishing the quiz", () =>{
            const $questionElement = $ ("#question");
            const $nextElement = $ ("#next");
            const quizLength = 10;
            let score = 5;

            showScore($questionElement.text()).toBe(`you scored ${score} out of ${quizLength}!`);
            expect($nextElement.text()).toBe("Restart The quiz");
            expect($nextElement.css("display")).not.toBe("none");
        });
    });
    

    
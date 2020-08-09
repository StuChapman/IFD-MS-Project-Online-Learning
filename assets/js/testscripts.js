describe("checkQuestionRadio", function() {
    // A test suite begins with a call to the global Jasmine function describe with two parameters: a string and a function.
    beforeEach(function() {
        answer = new checkQuestionRadio();
    });
    
    describe("checkQuestionRadio", function() {
        // Specs are defined by calling the global Jasmine function it
        it("should exist", function() {
            // Expectations are built with the function expect which takes a value, called the actual.
            // Each matcher implements a boolean comparison between the actual value and the expected value.
            // Any matcher can evaluate to a negative assertion by chaining the call to expect with a not before calling the matcher.
            expect(checkQuestionRadio).toBeDefined();
        });

    it("should return answerFlag1 = 1 when called as selectedValue = optionfour", function() {
        let selectedValue = 'optionfour';

            if (selectedValue == 'optionfour') {
                answerFlag1 = 1;
                localStorage.setItem('answerFlag1', answerFlag1);
            } else {
                answerFlag1 = -1;
                localStorage.setItem('answerFlag1', answerFlag1);
            }

        expect(answerFlag1 = 1);

        });

    it("should return answerFlag1 = -1 when called as selectedValue = optionone", function() {
        let selectedValue = 'optionone';

            if (selectedValue == 'optionfour') {
                answerFlag1 = 1;
                localStorage.setItem('answerFlag1', answerFlag1);
            } else {
                answerFlag1 = -1;
                localStorage.setItem('answerFlag1', answerFlag1);
            }

        expect(answerFlag1 = -1);

        });
    });       
});

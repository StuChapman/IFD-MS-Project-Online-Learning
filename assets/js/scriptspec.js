describe("Online Learning - Question 1", function() {
    // A test suite begins with a call to the global Jasmine function describe with two parameters: a string and a function.
    beforeEach(function() {
        answer = new checkQuestionRadio(thisquestion, selectedValue);
    });
    
    describe("checkQuestionRadio", function() {
        // Specs are defined by calling the global Jasmine function it
        it("should exist", function() {
            // Expectations are built with the function expect which takes a value, called the actual.
            // Each matcher implements a boolean comparison between the actual value and the expected value.
            // Any matcher can evaluate to a negative assertion by chaining the call to expect with a not before calling the matcher.
            expect(checkQuestionRadio).toBeDefined();
        });
        
        it("should return answerFlag1 = 1 when thisquestion = 'Online Learning - Question 1' and selectedValue = 'optionfour'", function() {
            var result = checkQuestionRadio('Online Learning - Question 1', 'optionfour')
            expect(result).toBe("answerFlag1 = 1");
        });
        
    });
});
describe("Online Learning - Question 1", function() {
    // A test suite begins with a call to the global Jasmine function describe with two parameters: a string and a function.
    beforeEach(function() {
        answer = new resetAnswerFlags();
    });
    
    describe("resetAnswerFlags", function() {
        // Specs are defined by calling the global Jasmine function it
        it("should exist", function() {
            // Expectations are built with the function expect which takes a value, called the actual.
            // Each matcher implements a boolean comparison between the actual value and the expected value.
            // Any matcher can evaluate to a negative assertion by chaining the call to expect with a not before calling the matcher.
            expect(resetAnswerFlags).toBeDefined();
        });
        
        it("should return answerFlag1 = 0", function() {
            var result = resetAnswerFlags()
            expect(result).toBe("localStorage.getItem('answerFlag1') = 0");
        });
        
    });
});
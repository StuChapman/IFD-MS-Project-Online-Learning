## Testing
My approach to testing was to test each of the features for functionality (operation) and rendering (visuals) against a variety of media devices, in both portrait and landscape orientation, as well as the 4 main browsers.

I created a matrix to complete methodically to ensure all functions operated and rendered correctly.

For testing mid-build, I often logged variables to the console. This helped me see that variables were populating as designed (or not!) and that code had executed as planned.

I commented these in the scripts.js file with "// log to Console to test Functionality //" 

### Validation via [w3 validator](https://validator.w3.org/)

I received the following warning multiple times for every html file...

*Warning: The type attribute is unnecessary for JavaScript resources.*

All of the resources I could find (Stack Overflow etc.) advised that this should be used as a warning, rather than a bug ... [example](https://www.webmasterworld.com/javascript/4879097.htm).

I decided to remove the type and fully test all pages and functionality post this.

Another error; *Error: The element a must not appear as a descendant of the button element.* needed a solution, so I replaced the anchor element with the call of a function.

```javascript
<button type="button" class="btn btn-orange">
                            <a href="https://stuchapman.github.io/UCD-MS-Project-Continuous-Engagement/index.html">
                                Continue
                            </a>
                        </button>
```

was changed to.

```javascript
<button type="button" class="btn btn-orange" onclick="return goCELHome();">Continue
                        </button>
```

with the function,

```javascript
// Function: navigate to Continuous Engagament Ltd homepage //
function goCELHome() {
window.location.replace('https://stuchapman.github.io/UCD-MS-Project-Continuous-Engagement/index.html');
}
```

added in [scripts-global-variables.js](https://github.com/StuChapman/IFD-MS-Project-Online-Learning/blob/master/assets/js/scripts-global-variables.js).

### Challenges, Bugs and Errors

Whilst in build, the following: challenges, bugs and errors required solutions...

    Challenge:  User accidentally tapping Brand Image and navigating away from the application.
    Solution:   A Bootstrap Modal asking the user *"You are about to leave this site for the Continuous Engagement home page. Are you sure?"*.

    Challenge:  User navigates back and forth through test with the browser back and forward navigation, thus allowing repeated attempts at the test.
    Solution:   Create the 10 'answerFlagXXX' variables to check if this question has already been answered, an alert the user, and navigated to the next question.

    Challenge:  An uploaded .mp4 video file would not play in deployed version due to it's filesize.
    Solution:   Link to the video through YouTube API.

    Challenge:  Rendering on mobile device, landscape view (especially where a grid was used).
    Solution:   Utilise: @media screen and (orientation: portrait) and (orientation: landscape).

    Challenge:  Need to record the scores to the test questions.
    Solution:   Write variables to local storage.

    Bug:        Original method of $("#arrow_____").animate to reveal the definition of Value/Waste on definition.html caused the text within the div to constantly re-format as the div expanded to size.
    Solution:   Create masks $("#arrowmask_____").animate to reveal the definition, by shrinking the mask, rather than growing the div.

    Bug:        Images on revealed div on eightwastes.html taking time to cache, leaving previous image visible. This could be confusing to the user.
    Solution:   Add a 200ms delay after image starts loading, before div is visible.

    Bug:        It is possible to drop multiple cards on question.nine.html into a single box. This is poor user experience.
    Solution:   Once a box has been filled; change ondragover attribute to null - ( $('#' + dragcard3).attr('ondragover', ""); )

    Bug:        Question-ten.html showing as complete when it was incomplete due to the code that grabs the document title ( let thisquestion = document.title.substr(18,10); ) only grabbing 10 characters (so "Question 10" was being truncated to "Question 1").
    Solution:   Change code to ( let thisquestion = document.title.substr(18,11); ).

    Bug:        Method to check questions already answered not operating correctly when pressing the back button on mobile devices.
    Solution:   Chnge method from on 'load' to 'pageshow'.

    Bug:        Help Modal not closing on Submit.
    Solution:   Add ( " data-dismiss="modal" ) to onclick attribute.

    Error:      revealWaste() function declared twice.
    Solution:   Renamed 2nd version as popupWaste().

#### function populateSummary()

I wrote a function to read the 10 answerFlag variables from local storage, convert the value to: P for Pass, F for Fail and _ for 0.
This would then populate test-summary.html.

The challenge I had was: as there were 10 variables, I had to write the code to convert the variable 10 times. This just seemed like a very inelegant solution.

I decided to change the answerFlag variables from text to alphanumeric (i.e. answerFlagOne becomes answerFlag1 etc.). I was then able to create a loop from 1 to 10, running a single block of code 10 times.

This felt like a much cleaner way of achieving the end result. The code is below...

Before.
```javascript
function populateSummary() {
    let result;
    switch (localStorage.getItem('answerFlagOne')) {
        case '-1':
            result = 'Fail';
            break;
        case '0':
            result = 'Null';
            break;
        case '1':
            result = 'Pass';
            ++totalScore;
            break;
        default: 
            break;
    }
    $('#ansone').text(result);
    switch (localStorage.getItem('answerFlagTwo')) {
        case '-1':
            result = 'Fail';
            break;
        case '0':
            result = 'Null';
            break;
        case '1':
            result = 'Pass';
            ++totalScore;
            break;
        default: 
            break;
    }
    $('#anstwo').text(result);

    // and so on for AnswerFlagThree thru Ten ...
```
After.
```javascript
function populateSummary() {
    let totalScore = 0;
    let result;
    let answerVar;
    let answerSpan;
    let i;

    for (i = 0; i < 11; i++) {
        answerVar = 'answerFlag' + i;
        switch (localStorage.getItem(answerVar)) {
            case '-1':
                result = 'Fail';
                break;
            case '0':
                result = 'Null';
                break;
            case '1':
                result = 'Pass';
                ++totalScore;
                break;
            default: 
                break;
        }
        answerSpan = '#answer' + i;
        $(answerSpan).text(result);
    }

    $('#totalScore').text(totalScore + ' out of 10');

}
```
I used this method to replace duplicate code with a loop wherever possible.

### Testing Matrix
Bugs and issues found from testing.

1. eightwastes.html pop-up - typo on the test 'years worth of'. Changed to 'year`s worth of'.
2. question-nine.html Galaxy Fold device on Portrait view - 'mobving the work/customer around' test does not fit the card.
3. Whilst testing on Firefox, I noticed that the color of the up and down chevrons on nonvalueadd.html was wrong. I had missed this on all the other devices!


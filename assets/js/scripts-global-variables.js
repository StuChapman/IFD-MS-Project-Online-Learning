
// ********************************** Global Variables ********************************** //

//Set global variables - variables that are passed between functions //
var nextReveal = 0;
var nextRevealValue = 0;
var nextRevealWaste = 0;
var player;
var imageCount = 0;
var letterCount = 0;
var exampleStepNo = 1;

//Set global variables - flags to ensure all 8 images have been clicked before navigating from eightwastes.html //
var transportationFlag = 0;
var inventoryFlag = 0;
var motionFlag = 0;
var waitingFlag = 0;
var overproductionFlag = 0;
var overprocessingFlag = 0;
var defectsFlag = 0;
var skillsFlag = 0;

//Set global variables - array examplestep, answerindex and answertext for on example.html //
let examplearray = [
                    ['1. First thing we need to do is get the wood from the truck and bring it to our workbench.',  '2', 'Moving material (wood) around is TRANSPORTATION. Even if we cannot fully eliminate it, we should reduce it as much as possible - maybe have the truck deliver to the workbench...'],
                    ['2. Then we drill some holes in the wood to make the joints',  '1', 'Changing the shape of the work adds VALUE to it - it becomes closer to the finished product.'],
                    ['3. Next, check the holes are the right size.',  '7', 'Checking is OVERPROCESSING - we should make failsafes that ensure processes are correct every time, without the need to check.'],
                    ['4. Fasten the legs to the base with glue and allow it to dry',  '5', 'WAITING for the glue to dry is Waste. We could experiment with different methods here, like using wood screws.'],
                    ['5. Turn the chair upside-down to fit the seat-back.',  '4', 'The MOTION of turning the chair adds time. If we designed a fixture to hold the chair in place while we fit the legs and the seat-back, we could remove this.'],
                    ['6. Finally, we paint the chair.',  '1', 'Adding paint is changing the shape, so more VALUE is being added.'],
                    ['7. Last thing to do is to put the chair in the storeroom with all the others.',  '3', 'Creating INVENTORY is waste. Do we have orders for all the chairs in our storeroom? We should build to demand.']
                    ];

//Set global variables - flags for each of the dragcards on question-five.html //
var dragcard1 = null;
var dragcard2 = null;
var dragcard3 = null;
var dragcard4 = null;
var dragcard5 = null;

//Set global variables - flags for each of the questions in the test //
// 0 = incomplete, 1 = correct, -1 = incorrect //
var answerFlag1 = 0;
var answerFlag2 = 0;
var answerFlag3 = 0;
var answerFlag4 = 0;
var answerFlag5 = 0;
var answerFlag6 = 0;
var answerFlag7 = 0;
var answerFlag8 = 0;
var answerFlag9 = 0;
var answerFlag10 = 0;

//Set global variables - flags for each of the dragcards on question-five.html //
var dragcard1 = null;
var dragcard2 = null;
var dragcard3 = null;
var dragcard4 = null;
var dragcard5 = null;

//Set global variables - array for the contents of each of the orderboxes on question-nine.html //
let orderArray = [
                    ['orderbox1', 'ordercard1', 'delivering ahead of schedule', 'full'],
                    ['orderbox2', 'ordercard2', 'using the wrong resource', 'full'],
                    ['orderbox3', 'ordercard3', 'faults', 'full'],
                    ['orderbox4', 'ordercard4', 'moving the work/customer around', 'full'],
                    ['orderbox5', 'ordercard5', 'complicated processes', 'full'],
                    ['orderbox6', 'ordercard6', 'moving the worker around', 'full'],
                    ['orderbox7', 'ordercard7', 'queues', 'full'],
                    ['orderbox8', 'ordercard8', 'building up stock', 'full']
                    ];

//Set global variables - flags for each of the dragcards drop locations on question-five.html //
// 0 = unmoved, 1 = correct, -1 = incorrect //
var drag1Score = 0;
var drag1Score = 0;
var drag3Score = 0;
var drag4Score = 0;
var drag5Score = 0;

// Function: navigate to Continuous Engagament Ltd homepage //
function goCELHome() {
window.location.replace('https://stuchapman.github.io/UCD-MS-Project-Continuous-Engagement/index.html');
}
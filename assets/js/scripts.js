//Set global variables //
var nextReveal = 0;
var nextRevealValue = 0;
var nextRevealWaste = 0;
var player;
var imageCount = 0;
var letterCount = 0;

//Set global variables - flags to ensure all 8 images have been clicked before navigating from eightwastes.html //
var transportationFlag = 0;
var inventoryFlag = 0;
var motionFlag = 0;
var waitingFlag = 0;
var overproductionFlag = 0;
var overprocessingFlag = 0;
var defectsFlag = 0;
var skillsFlag = 0;

//Set global variables - flags for each of the questions in the test //
// 0 = incomplete, 1 = correct, -1 = incorrect //
var answerFlagOne = 0;
var answerFlagTwo = 0;
var answerFlagThree = 0;
var answerFlagFour = 0;
var answerFlagFive = 0;
var answerFlagSix = 0;
var answerFlagSeven = 0;
var answerFlagEight = 0;
var answerFlagNine = 0;
var answerFlagTen = 0;

//Set global variables - flags for each of the dragcards on question-nine.html //
var dragcard1 = null;
var dragcard2 = null;
var dragcard3 = null;
var dragcard4 = null;
var dragcard5 = null;

//Set global variables - flags for each of the dragcards drop locations on question-nine.html //
// 0 = unmoved, 1 = correct, -1 = incorrect //
var drag1Score = 0;
var drag1Score = 0;
var drag3Score = 0;
var drag4Score = 0;
var drag5Score = 0;

// Function: reset answerflags - ADMIN ONLY //
function resetAnswerFlags() {
localStorage.setItem('answerFlagOne', answerFlagOne);
localStorage.setItem('answerFlagTwo', answerFlagTwo);
localStorage.setItem('answerFlagThree', answerFlagThree);
localStorage.setItem('answerFlagFour', answerFlagFour);
localStorage.setItem('answerFlagFive', answerFlagFive);
localStorage.setItem('answerFlagSix', answerFlagSix);
localStorage.setItem('answerFlagSeven', answerFlagSeven);
localStorage.setItem('answerFlagEight', answerFlagEight);
localStorage.setItem('answerFlagNine', answerFlagNine);
localStorage.setItem('answerFlagTen', answerFlagTen);
}

// Function: retrieve and check quiz score progress on document load //
$(window).on('pageshow', function() {
    console.log('answerFlagOne: ' + localStorage.getItem('answerFlagOne'));
    console.log('answerFlagTwo: ' + localStorage.getItem('answerFlagTwo'));
    console.log('answerFlagThree: ' + localStorage.getItem('answerFlagThree'));
    console.log('answerFlagFour: ' + localStorage.getItem('answerFlagFour'));
    console.log('answerFlagFive: ' + localStorage.getItem('answerFlagFive'));
    console.log('answerFlagSix: ' + localStorage.getItem('answerFlagSix'));
    console.log('answerFlagSeven: ' + localStorage.getItem('answerFlagSeven'));
    console.log('answerFlagEight: ' + localStorage.getItem('answerFlagEight'));
    console.log('answerFlagNine: ' + localStorage.getItem('answerFlagNine'));
    console.log('answerFlagTen: ' + localStorage.getItem('answerFlagTen'));

    // check this question has not already been answered //
    let thisquestion = document.title.substr(18,11);
    console.log(thisquestion);
    let questionarray = [
                        ['Question 1',  'answerFlagOne', 'question-two.html'],
                        ['Question 2',  'answerFlagTwo', 'question-three.html'],
                        ['Question 3',  'answerFlagThree', 'question-four.html'],
                        ['Question 4',  'answerFlagFour', 'question-five.html'],
                        ['Question 5',  'answerFlagFive', 'question-six.html'],
                        ['Question 6',  'answerFlagSix', 'question-seven.html'],
                        ['Question 7',  'answerFlagSeven', 'question-eight.html'],
                        ['Question 8',  'answerFlagEight', 'question-nine.html'],
                        ['Question 9',  'answerFlagNine', 'question-ten.html'],
                        ['Question 10',  'answerFlagTen', 'test-summary.html']
                        ];

    let i = getIndexOfK(questionarray, thisquestion);
    // exit function if i is undefined //
    if(i == null){
        return;
    } 

    let j = questionarray[i][1];
    // log to Console to test Functionality //
    console.log(j);

    let varflag = localStorage.getItem(j);
    varflag = varflag * 1;
    console.log('varflag: ' + varflag);
    if (varflag !== 0) {
        alert("This question has already been answered. Tap 'OK' to navigate to next question");
        // navigate to next question //
        let navflag = (questionarray[i][2]);
        window.location.replace(navflag);
    }

});

// Function: find index of multidimensional array //
function getIndexOfK(arr, k) { //credit to https://jsfiddle.net/wao20/Lct1de56/ via https://stackoverflow.com/questions/16102263/to-find-index-of-multidimensional-array-in-javascript
    for (var i = 0; i < arr.length; i++) {
        var index = arr[i].indexOf(k);
        if (index > -1) {
        return i;
        }
    }
}

//Function: use emailjs account to email a question from the help? button on the header //
function sendEmail() {
    // log to Console to test Functionality //
    console.log(this.sendername.value);
    console.log(this.emailinput.value);
    console.log(this.question.value);
    console.log(document.title);

    emailjs.init("user_37585cYmkMNZRiOobd27i");

    var thispage = document.title;
    var template_params = {
    "from_name": this.sendername.value,
    "from_email": this.emailinput.value,
    "question": thispage + ": " + this.question.value
    };

    var service_id = "continuous_engagement";
    var template_id = "template_6DMLrcJu";

    emailjs.send(service_id, template_id, template_params)
    //Credit: Code Institute//
    // log to Console to test Functionality //
    .then(
        function(response) {
            console.log("success", response);
        },
        function(error) {
            console.log("FAILED", error);
        });
    return false;
}

//Function: reveal the definition for Value by clicking the word value on definition.html //
function revealValue() {
    // log to Console to test Functionality //
    console.log('Value');
    nextRevealValue++;
    nextReveal = nextRevealValue * nextRevealWaste;
    // log to Console to test Functionality //
    console.log(nextReveal);
    if (nextReveal > 0) {
    revealNext();
    }
    $("#arrowmaskwaste").animate({ //Credit: https://www.tutorialrepublic.com/codelab.php?topic=faq&file=jquery-slide-left-and-right-effect
                width: '33vw'
            });
    $("#arrowmaskvalue").animate({ //Credit: https://www.tutorialrepublic.com/codelab.php?topic=faq&file=jquery-slide-left-and-right-effect
                width: 0
            });
}

//Function: reveal the definition for Waste by clicking the word waste on definition.html //
function revealWaste() { 
    // log to Console to test Functionality //
    console.log('Waste');
    nextRevealWaste++
    // confirm that both definitions have been viewed before revealing next href //
    nextReveal = nextRevealValue * nextRevealWaste;
    // log to Console to test Functionality //
    console.log(nextReveal);
    if (nextReveal > 0) {
    revealNext();
    }
    $("#arrowmaskvalue").animate({ //Credit: https://www.tutorialrepublic.com/codelab.php?topic=faq&file=jquery-slide-left-and-right-effect
                width: '33vw'
            });
    $("#arrowmaskwaste").animate({ //Credit: https://www.tutorialrepublic.com/codelab.php?topic=faq&file=jquery-slide-left-and-right-effect
                width: 0
            });
}

//Function: revealing the nextLink after content has been interacted with //
function revealNext() {
    $("#nextLink").removeClass("hidden");
    $("#nextLink").addClass("unhidden");
}

//Function: using the play button to play and pause the Mark Onetto video on looking.html //
function playVid() { 

    let buttonText = $("#playbutton").text();
    let playText = $.trim(buttonText);
    // log to Console to test Functionality //
    console.log(playText);

    switch(playText) {
        case "play":
            player.playVideo()
            $("#playbutton").text("pause");
            break;
        case "pause":
            player.pauseVideo();
            $("#playbutton").text("play");
            break;
        default:
            break;
    }
}

//Function: reset button from pause to play when the video finishes on looking.html //
function resetPlay() {
    $("#playbutton").text("play");
}

//Function: scroll to next image on value.html //
function nextImage() {
    if (imageCount == 4) {
          imageCount == 4;
        } else {
          imageCount++;
        }
    populateImage();
}

//Function: scroll to previous image on value.html //
function prevImage() {
    if (imageCount == 0) {
          imageCount == 0;
        } else {
          imageCount--;
        }
    populateImage();
}

//Function: set the image and text on value.html //
function populateImage() {
    let getpage = document.title
    // log to Console to test Functionality //
    console.log(getpage);

    switch(getpage) {
        case "Online Learning - Value":
            imageArray = 
                [
                    ['cash', 'Crediting a loan into a Customer’s bank account'],
                    ['window', 'Cleaning the windows on a building'],
                    ['meal', 'Serving a meal to a Customer'],
                    ['tyre', 'Replacing a flat tyre on a car'],
                    ['sale', 'Selling a new insurance policy to a Customer']
                ];
            break;
        case "Online Learning - Waste":
            imageArray = 
                [
                    ['headache', 'Going past the agreed date for the loan to be credited'],
                    ['dirty', 'Removing smears left on a window after cleaning'],
                    ['overeat', 'Serving a meal to a Customer while they are still eating the previous course'],
                    ['flat', 'Not inflating the tyre to the correct pressure'],
                    ['phone', 'Telling the telephone Customer they have to go online to buy the policy']
                ];
            break;
        default:
            break;
    }

    console.log('imageCount: ' + imageCount + ' ' + imageArray[imageCount]);
    $("#valueimage").attr('src', 'assets/images/' + imageArray[imageCount][0] + '.jpg'); //Credit: https://www.juniordevelopercentral.com/jquery-change-image-src/#:~:text=jQuery%20change%20image%20src%20-%20How%20To%20Change,as%20simple%20as%20using%20the%20attr%20%2Afunction.%20 //
    // 200ms delay to allow image to cache //
    setTimeout(function() {
        $("#imagetext").text(imageArray[imageCount][1]);
        console.log('timeout');
    }, 200);

    switch(imageCount) {
        case 0:
            $("#leftcarouselarrow").css('color', '#eeeeee');
            break;
        case 1:
            $("#leftcarouselarrow").css('color', '#657486');
            break;
        case 3:
            $("#rightcarouselarrow").css('color', '#657486');
            break;
        case 4:
            $("#rightcarouselarrow").css('color', '#eeeeee');
            revealNext()
            break;
        default:
            break;
    }
}

//Function: reveal the additional text on nonvalueadd.html //
function scrollDown() {
    $('#scrollone').css('display', 'none');
    $('#scrolltwo').css('display', 'block');
    revealNext();
}

//Function: hide the additional text on nonvalueadd.html //
function scrollUp() {
    $('#scrollone').css('display', 'block');
    $('#scrolltwo').css('display', 'none');
}


//Function: handle the images on eightwastes.html ready for the popup //
function handleWaste(imagetag) {
    // log to Console to test Functionality //
    console.log(imagetag);

    let imageString = imagetag.substr(1) + 'Flag'; //Credit: https://stackoverflow.com/questions/4564414/delete-first-character-of-a-string-in-javascript
    // log to Console to test Functionality //
    console.log(imageString);    

    // as each image is clicked, populate its variable to 1 //
    switch(imageString) {
        case 'transportationFlag':
            transportationFlag = 1;
            break;
        case 'inventoryFlag':
            inventoryFlag = 1;
            break;
        case 'motionFlag':
            motionFlag = 1;
            break;
        case 'waitingFlag':
            waitingFlag = 1;
            break;
        case 'overproductionFlag':
            overproductionFlag = 1;
            break;
        case 'overprocessingFlag':
            overprocessingFlag = 1;
            break;
        case 'defectsFlag':
            defectsFlag = 1;
            break;
        case 'skillsFlag':
            skillsFlag = 1;
            break;
        default:
            console.log('did not work');
            break;
    }

    // confirm that all popups have been viewed before revealing next href //
    // as this is a product, clickCount is only 1 once all images are clicked //
    let clickCount = (transportationFlag 
                        * inventoryFlag 
                        * motionFlag 
                        * waitingFlag 
                        * overproductionFlag 
                        * overprocessingFlag 
                        * defectsFlag 
                        * skillsFlag);
    // log to Console to test Functionality //
    console.log(clickCount);    

    if (clickCount == 1) {
    revealNext();
    }

    // change opacity of clicked image to show status as clicked //
    $(imagetag).css('opacity', .25); //Credit: https://stackoverflow.com/questions/2396342/transparent-image-is-it-possible-in-js

    popupWaste(imagetag);
}

//Function: reveal and populate the detailed description of each waste on eightwastes.html //
function popupWaste(imagetag) {
    // log to Console to test Functionality //
    console.log(imagetag);

    let indexString = imagetag.substr(1);
    // log to Console to test Functionality //
    console.log(indexString);
    let wasteIndex =0;

    popupArray = 
                [
                    ['Transportation', 'Moving product or work around for no reason.', 
                        'In a restaurant, this might be; carrying all the meat downstairs to the cellar, only to have to carry it all back upstairs again to cook it.', 
                            '...or a Customer being transferred from one department to another.'],
                    ['Inventory', 'Keeping excessive stocks of product.', 
                        'In our restaurant, this might be filling the freezer with a years worth of sausages', 
                            '...or batching up change requests for approval.'],
                    ['Motion', 'Moving the worker around.', 
                        'The chef in our restaurant might have to walk to one cupboard to get the oil, then walk to the other side of the kitchen to get the salt.', 
                            '...or navigating through a number of screens of a website.'],
                    ['Waiting', 'Work or product standing still.', 
                        'Our restaurant Customers do not like spending 30 minutes waiting for thier food.', 
                            '...or this could be a queue to speak to an advisor on the phone.'],
                    ['Overproduction', 'Producing work or product ahead of schedule.', 
                        'The waiter could take out the first course before the Customer has finished thier starter.', 
                            '...or printing a batch of books before you have received orders.'],
                    ['Overprocessing', 'Work or product that is too complicated', 
                        'The chef arranging the sausages and mash into the shape of a steam locomotive!', 
                            '...or quality checks and approvals throughout a process.'],
                    ['Defects', 'Work or product that has to be repaired or discarded.', 
                        'Burning the sausages!', 
                            '...or a Customer losing patience with a website, and exiting before buying.'],
                    ['Skills', 'Using the wrong people at the wrong time.', 
                        'Asking the waiter to cook the food.', 
                            '...or asking a manager to decide how a craftsperson uses thier tools.'],
                ];
    
    switch(indexString) {
        case 'transportation':
            wasteIndex = 0;
            break;
        case 'inventory':
            wasteIndex = 1;
            break;
        case 'motion':
            wasteIndex = 2;
            break;
        case 'waiting':
            wasteIndex = 3;
            break;
        case 'overproduction':
            wasteIndex = 4;
            break;
        case 'overprocessing':
            wasteIndex = 5;
            break;
        case 'defects':
            wasteIndex = 6;
            break;
        case 'skills':
            wasteIndex = 7;
            break;
        default:
            console.log('did not work');
            break;
    }

    $('#pophead').text(popupArray[wasteIndex][0]);
    $('#poppone').text(popupArray[wasteIndex][1]);
    $('#popptwo').text(popupArray[wasteIndex][2]);
    $('#wastepopupimage').attr('src','assets/images/' + indexString + '.jpg')
    $('#poppthree').text(popupArray[wasteIndex][3]);
    // 200ms delay to allow image to cache //
    setTimeout(function() {
        $('#wastepopup').css('visibility', 'visible');
        console.log('timeout');
    }, 200);
    
}

//Function: hide the detailed description of each waste on eightwastes.html //
function popDownWaste() {
    $('#wastepopup').css('visibility', 'hidden');
}

//Function: check the answers against desired for each question-xxx.html //
function checkQuestionRadio() {
    const rbs = document.querySelectorAll('input[name="question"]'); //Credit: https://www.javascripttutorial.net/javascript-dom/javascript-radio-button/ //
    let selectedValue;
    for (const rb of rbs) {
        if (rb.checked) {
            selectedValue = rb.id;
            break;
        }
    }
    // log to Console to test Functionality //
    console.log(selectedValue);

    let thisquestion = document.title;

    // answers to radio button style questions //
    switch(thisquestion) {
        case 'Online Learning - Question 1':
            if (selectedValue == 'optionfour') {
                answerFlagOne = 1;
                localStorage.setItem('answerFlagOne', answerFlagOne);
            } else {
                answerFlagOne = -1;
                localStorage.setItem('answerFlagOne', answerFlagOne);
            }
            break;
        case 'Online Learning - Question 3':
            if (selectedValue == 'optiontwo') {
                answerFlagThree = 1;
                localStorage.setItem('answerFlagThree', answerFlagThree);
            } else {
                answerFlagThree = -1;
                localStorage.setItem('answerFlagThree', answerFlagThree);
            }
            break;
        case 'Online Learning - Question 8':
            if (selectedValue == 'optionthree') {
                answerFlagEight = 1;
                localStorage.setItem('answerFlagEight', answerFlagEight);
            } else {
                answerFlagEight = -1;
                localStorage.setItem('answerFlagEight', answerFlagEight);
            }
            break;
        default:
            console.log('did not work');
            break;
    }

}

//Function: check the answer against desired for question-two.html //
function populateMuda(letterpick) {

    // log to Console to test Functionality //
    console.log(letterpick);

    // if selected letter has already been chosen and is gray-ed out, exit function //
    let letterString = "#letterpick-" + letterpick;
    console.log($(letterString).css('color'));
    if($(letterString).css('color') == 'rgb(128, 128, 128)'){
        console.log('letter used');
        return;
    }

    $(letterString).css('color', 'gray');

    if($.trim($('#square-one').text())==''){ // Credit: https://stackoverflow.com/questions/6813227/how-do-i-check-if-an-html-element-is-empty-using-jquery //
        $('#square-one').text(letterpick);
    } else {
        if($.trim($('#square-two').text())==''){
            $('#square-two').text(letterpick);
        } else {
            if($.trim($('#square-three').text())==''){
                $('#square-three').text(letterpick);
            } else {
                if($.trim($('#square-four').text())==''){
                    $('#square-four').text(letterpick);
                }
            }
        }
    }

    // log to Console to test Functionality //
    console.log($.trim($('#square-one').text()));
    console.log($.trim($('#square-two').text()));
    console.log($.trim($('#square-three').text())); 
    console.log($.trim($('#square-four').text()));

    if (($.trim($('#square-one').text()) == 'M') 
        && ($.trim($('#square-two').text()) == 'U') 
            && ($.trim($('#square-three').text()) == 'D') 
                && ($.trim($('#square-four').text()) == 'A')){
                    console.log('yes');
                    answerFlagTwo = 1;
                } else {
                    answerFlagTwo = -1;
                    console.log('no');
                }

    // write answer to local storage //
    localStorage.setItem('answerFlagTwo', answerFlagTwo);

    letterCount = ++letterCount;
    if (letterCount == 4)  {
        revealNext();
        return;
    }

}

//Function: allow the user to reset if they want to change their answer on question-two.html //
function resetMuda() {
    $('#square-one').text('');
    $('#square-two').text('');
    $('#square-three').text('');
    $('#square-four').text('');
    $('.letterpickbox div').css('color', 'black');
}

//Function: check answers against desired question-four.html //
function checkQuestionCheckbox() {
let checkCount = 0;
    if (!$('#checkone').is(":checked") 
        && $('#checktwo').is(":checked") 
            && !$('#checkthree').is(":checked") 
                && $('#checkfour').is(":checked")) {
        answerFlagFour = 1;
    } else {
        answerFlagFour = -1;
    }

    // write answer to local storage //
    localStorage.setItem('answerFlagFour', answerFlagFour);

}

//Function: allow drag event on question-nine.html //
function drag(ev) {// credit to https://www.w3schools.com/HTML/html5_draganddrop.asp
    ev.dataTransfer.setData("text", ev.target.id);
    console.log(ev.target.id);
}

//Function: allow drop event on question-nine.html //
function allowDrop(ev) {// credit to https://www.w3schools.com/HTML/html5_draganddrop.asp
    ev.preventDefault();
}

//Function: determine drop locations on question-nine.html //
function drop(ev) {// credit to https://www.w3schools.com/HTML/html5_draganddrop.asp
    ev.preventDefault();

            $('#' + dragcard1).attr('ondragover', "");
    let data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));

    console.log(data + ": " + ev.target.id);

    switch (data) {
        case 'dragcard1': 
            dragcard1 = ev.target.id;
            // do not allow more than one card to be dropped into each box //
            $('#' + dragcard1).attr('ondragover', "");
            break;
        case 'dragcard2': 
            dragcard2 = ev.target.id;
            // do not allow more than one card to be dropped into each box //
            $('#' + dragcard2).attr('ondragover', "");
            break;
        case 'dragcard3': 
            dragcard3 = ev.target.id;
            // do not allow more than one card to be dropped into each box //
            $('#' + dragcard3).attr('ondragover', "");
            break;
        case 'dragcard4': 
            dragcard4 = ev.target.id;
            // do not allow more than one card to be dropped into each box //
            $('#' + dragcard4).attr('ondragover', "");
            break;
        case 'dragcard5': 
            dragcard5 = ev.target.id;
            // do not allow more than one card to be dropped into each box //
            $('#' + dragcard5).attr('ondragover', "");
            break;
        default: 
            break;
    }

    if (dragcard1 !== null && dragcard2 !== null && dragcard3 !== null && dragcard4 !== null && dragcard5 !== null) {
        revealNext();
    }
}
//Function: check drop locations against desired on question-nine.html //
function checkQuestionDragDrop() {
    if (dragcard1.substring(4, 8) == 'left') {
        drag1Score = 1;
    } else {
        drag1Score = -1;
    }
    if (dragcard2.substring(4, 8) == 'righ') {
        drag2Score = 1;
    } else {
        drag2Score = -1;
    }
    if (dragcard3.substring(4, 8) == 'righ') {
        drag3Score = 1;
    } else {
        drag3Score = -1;
    }
    if (dragcard4.substring(4, 8) == 'left') {
        drag4Score = 1;
    } else {
        drag4Score = -1;
    }
    if (dragcard5.substring(4, 8) == 'righ') {
        drag5Score = 1;
    } else {
        drag5Score = -1;
    }

    if (drag1Score + drag2Score + drag3Score + drag4Score + drag5Score == 5) {
        answerFlagNine = 1;
    } else {
        answerFlagNine = -1;
    }

    // write answer to local storage //
    localStorage.setItem('answerFlagNine', answerFlagNine);

}
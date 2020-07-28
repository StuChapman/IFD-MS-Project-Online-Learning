
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

//Set global variables - array examplestep, answerindex and answertext for on example.html //
let examplearray = [
                    ['1. First thing we need to do is get the wood from the truck and bring it to our workbench.',  '2', 'Moving material (wood) around is TRANSPORTATION. Even if we cannot fully eliminate it, we should reduce it as much as possible - maybe have the truck deliver to the workbench...'],
                    ['2. Then we drill some holes in the wood to make the joints',  '1', 'Changing the shape of the work adds VALUE to it - it becomes closer to the finished product.'],
                    ['3. Next, check the holes are the right size.',  '7', 'Checking is OVERPROCESSING - we should make failsafes that ensure processes are correct every time, without the need to check.'],
                    ['4. Fasten the legs to the base with glue and allow it to dry',  '5', 'WAITING for the glue to dry is Waste. We could experiment with different methods here, like using wood screws.'],
                    ['5. Turn the chair upside-down to fit the seat-back.',  '4', 'The MOTION of turning the chair adds time. If we designed a fixture to hold the chair in place while we fir the legs and the seat-back, we could remove this.'],
                    ['6. Finally, we paint the chair.',  '1', 'Adding paint is changing the shape, so more VALUE is being added.'],
                    ['7. Last thing to do is to put the chair in the storeroom with all the others.',  '3', 'Creating INVENTORY is waste. Do we have orders for all the chairs in our storeroom? We should build to demand.']
                    ];

//Set global variables - flags for each of the dragcards on question-five.html //
var dragcard1 = null;
var dragcard2 = null;
var dragcard3 = null;
var dragcard4 = null;
var dragcard5 = null;

//Set global variables - flags for each of the dragcards drop locations on question-five.html //
// 0 = unmoved, 1 = correct, -1 = incorrect //
var drag1Score = 0;
var drag1Score = 0;
var drag3Score = 0;
var drag4Score = 0;
var drag5Score = 0;

// ********************************** Interactive Learning Section Functions ********************************** //

// Function: reset answerflags - ADMIN ONLY //
function resetAnswerFlags() {
localStorage.setItem('answerFlag1', answerFlag1);
localStorage.setItem('answerFlag2', answerFlag2);
localStorage.setItem('answerFlag3', answerFlag3);
localStorage.setItem('answerFlag4', answerFlag4);
localStorage.setItem('answerFlag5', answerFlag5);
localStorage.setItem('answerFlag6', answerFlag6);
localStorage.setItem('answerFlag7', answerFlag7);
localStorage.setItem('answerFlag8', answerFlag8);
localStorage.setItem('answerFlag9', answerFlag9);
localStorage.setItem('answerFlag10', answerFlag10);
}

// Function: retrieve and check quiz score progress on document load //
$(window).on('pageshow', function() {
    console.log('answerFlag1: ' + localStorage.getItem('answerFlag1'));
    console.log('answerFlag2: ' + localStorage.getItem('answerFlag2'));
    console.log('answerFlag3: ' + localStorage.getItem('answerFlag3'));
    console.log('answerFlag4: ' + localStorage.getItem('answerFlag4'));
    console.log('answerFlag5: ' + localStorage.getItem('answerFlag5'));
    console.log('answerFlag6: ' + localStorage.getItem('answerFlag6'));
    console.log('answerFlag7: ' + localStorage.getItem('answerFlag7'));
    console.log('answerFlag8: ' + localStorage.getItem('answerFlag8'));
    console.log('answerFlag9: ' + localStorage.getItem('answerFlag9'));
    console.log('answerFlag10: ' + localStorage.getItem('answerFlag10'));

    // check this question has not already been answered //
    let thisquestion = document.title.substr(18,11);
    console.log(thisquestion);
    let questionarray = [
                        ['Question 1',  'answerFlag1', 'question-two.html'],
                        ['Question 2',  'answerFlag2', 'question-three.html'],
                        ['Question 3',  'answerFlag3', 'question-four.html'],
                        ['Question 4',  'answerFlag4', 'question-five.html'],
                        ['Question 5',  'answerFlag5', 'question-six.html'],
                        ['Question 6',  'answerFlag6', 'question-seven.html'],
                        ['Question 7',  'answerFlag7', 'question-eight.html'],
                        ['Question 8',  'answerFlag8', 'question-nine.html'],
                        ['Question 9',  'answerFlag9', 'question-ten.html'],
                        ['Question 10',  'answerFlag10', 'test-summary.html']
                        ];

    if (thisquestion == 'Test Summar') {
        populateSummary();
    }

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

    if (!(/^[a-zA-Z\s]+$/.test(this.sendername.value)) && this.sendername.value !== null) {
        alert('Please enter your name. Letters only, no numbers or special characters.');
        this.sendername.value = "";
        return;
    }

    if (!(/^\S+@\S+\.\S+$/.test(this.emailinput.value))) {
        alert('Please enter a valid email address.');
        return;
    }

    if (this.question.value.length < 10) {
        alert('Please enter a question of at least 10 characters.');
        this.sendername.value = this.sendername.value;
        return false;
    }
    
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
    .then(
        function(response) {
            alert('Email sent succesfully.', response);
        },
        function(error) {
            alert('Email failed to send. ', error);
        });

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
    nextRevealWaste++;
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
            player.playVideo();
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
    let getpage = document.title;
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
            revealNext();
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

    // confirm that all popups have been viewed before revealing next anchor //
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
    $(imagetag).css('opacity', 0.25); //Credit: https://stackoverflow.com/questions/2396342/transparent-image-is-it-possible-in-js

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

    let popupArray = [
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
    $('#wastepopupimage').attr('src','assets/images/' + indexString + '.jpg');
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

//Function: work through the steps in example.html //
function exampleSelect() {
    exampleStepNo = $.trim($('#examplestep').text().substring(0, 1));
    // log to Console to test Functionality //
    console.log(exampleStepNo);

    let answerindex = examplearray[exampleStepNo - 1][1];
    console.log(answerindex);
    let answertext = examplearray[exampleStepNo - 1][2];
    console.log(answertext);

    var exampleindex  = examplelist.selectedIndex; // Credit: https://www.codeproject.com/articles/656/using-javascript-to-handle-drop-down-list-selectio //
    console.log(exampleindex);

    if (exampleindex == answerindex) {
        $('#examplestep').text('Thats right! ' + answertext);
    } else {
        $('#examplestep').text('Not quite. ' + answertext);
    }

    if (exampleStepNo == 7) {
        $('#examplepara').text('tap next to start the Online Test...');
        $('#examplelist').css('visibility', 'hidden');
        $("#examplecarouselarrow").css('color', '#dddcdc');
        revealNext();
    } else {
        $('#examplepara').text('tap the arrow to move to the next step...');
        $('#examplelist').css('visibility', 'hidden');
        $("#examplecarouselarrow").css('color', '#657486');
    }

}

//Function: navigate to the next step in example.html //
function nextExample() {
    if ($("#examplecarouselarrow").css('color') == 'rgb(221, 220, 220)') {
        return;
    } else {
        ++exampleStepNo;
        $('#examplestep').text(examplearray[exampleStepNo - 1][0]);
        document.getElementById("examplelist").selectedIndex = "0";
        $('#examplelist').css('visibility', 'visible');
        $("#examplecarouselarrow").css('color', '#dddcdc');
    }
}

// ********************************** Question Functions ********************************** //

//Function: check the answers against desired for radio button style questions: one, three and eight //
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
                answerFlag1 = 1;
                localStorage.setItem('answerFlag1', answerFlag1);
            } else {
                answerFlag1 = -1;
                localStorage.setItem('answerFlag1', answerFlag1);
            }
            break;
        case 'Online Learning - Question 3':
            if (selectedValue == 'optiontwo') {
                answerFlag3 = 1;
                localStorage.setItem('answerFlag3', answerFlag3);
            } else {
                answerFlag3 = -1;
                localStorage.setItem('answerFlag3', answerFlag3);
            }
            break;
        case 'Online Learning - Question 8':
            if (selectedValue == 'optionthree') {
                answerFlag8 = 1;
                localStorage.setItem('answerFlag8', answerFlag8);
            } else {
                answerFlag8 = -1;
                localStorage.setItem('answerFlag8', answerFlag8);
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
                    answerFlag2 = 1;
                } else {
                    answerFlag2 = -1;
                    console.log('no');
                }

    // write answer to local storage //
    localStorage.setItem('answerFlag2', answerFlag2);

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

//Function: check answers against desired on checkbox questions: four, seven and ten //
function checkQuestionCheckbox() {

    let thisquestion = document.title;

    switch(thisquestion) {
        case 'Online Learning - Question 4':
            if (!$('#checkone').is(":checked") 
                && $('#checktwo').is(":checked") 
                    && !$('#checkthree').is(":checked") 
                        && $('#checkfour').is(":checked")) {
                answerFlag4 = 1;
                localStorage.setItem('answerFlag4', answerFlag4);
            } else {
                answerFlag4 = -1;
                localStorage.setItem('answerFlag4', answerFlag4);
            }
            break;
        case 'Online Learning - Question 7':
            if (!$('#checkone').is(":checked") 
                && !$('#checktwo').is(":checked") 
                    && $('#checkthree').is(":checked") 
                        && $('#checkfour').is(":checked")) {
                answerFlag7 = 1;
            } else {
                answerFlag7 = -1;
            }
            localStorage.setItem('answerFlag7', answerFlag7);
            break;
        case 'Online Learning - Question 10':
            if ($('#checkone').is(":checked") 
                && !$('#checktwo').is(":checked") 
                    && !$('#checkthree').is(":checked") 
                        && $('#checkfour').is(":checked")) {
                answerFlag10 = 1;
                localStorage.setItem('answerFlag10', answerFlag10);
            } else {
                answerFlag10 = -1;
                localStorage.setItem('answerFlag10', answerFlag10);
            }
            break;
    }

}

//Function: allow drag event on question-five.html //
function drag(ev) {// credit to https://www.w3schools.com/HTML/html5_draganddrop.asp
    ev.dataTransfer.setData("text", ev.target.id);
    console.log(ev.target.id);
}

//Function: allow drop event on question-five.html //
function allowDrop(ev) {// credit to https://www.w3schools.com/HTML/html5_draganddrop.asp
    ev.preventDefault();
}

//Function: determine drop locations on question-five.html //
function drop(ev) {// credit to https://www.w3schools.com/HTML/html5_draganddrop.asp
    ev.preventDefault();

    $('#' + dragcard1).attr('ondragover', "");
    let data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));

    console.log(data + ": " + ev.target.id);

    let dragVar;
    dragVar = ev.target.id;
    // do not allow more than one card to be dropped into each box //
    $('#' + dragVar).attr('ondragover', "");
    
            switch (data) {
            case 'dragcard1': 
                dragcard1 = ev.target.id;
                break;
            case 'dragcard2': 
                dragcard2 = ev.target.id;
                break;
            case 'dragcard3': 
                dragcard3 = ev.target.id;
                break;
            case 'dragcard4': 
                dragcard4 = ev.target.id;
                break;
            case 'dragcard5': 
                dragcard5 = ev.target.id;
                break;
            default: 
                break;
    }

    if (dragcard1 !== null && dragcard2 !== null && dragcard3 !== null && dragcard4 !== null && dragcard5 !== null) {
        revealNext();
    }
}

//Function: check drop locations against desired on question-five.html //
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
        answerFlag9 = 1;
    } else {
        answerFlag9 = -1;
    }

    // write answer to local storage //
    localStorage.setItem('answerFlag9', answerFlag9);

}

//Function: confirm two checkboxes have been checked before revealing submit on question-ten.html //
function checkTwo() {
    let checkCount = 0;
    if ($('#checkone').is(":checked")) {
        ++checkCount;
    }
    if ($('#checktwo').is(":checked")) {
        ++checkCount;
    }
    if ($('#checkthree').is(":checked")) {
        ++checkCount;
    }
    if ($('#checkfour').is(":checked")) {
        ++checkCount;
    }

    if (checkCount > 1) {
        revealNext();
    }

}

//Function: populate test results on test-summary.html //
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


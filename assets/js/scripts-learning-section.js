// jshint esversion: 6

// ********************************** Interactive Learning Section Functions ********************************** //

// Function: reset answerflags - ADMIN ONLY //
function resetAnswerFlags() {
    var i;
    for (i = 0; i < 11; i++) {
        localStorage.setItem('answerFlag' + i, 0);
        }
}

//Function: get the user's name and email to pass to the test pass certificate (validate at a later date) //
function logIn() {
    if (!/^[a-zA-Z]*$/g.test(this.usernamefirst.value) || this.usernamefirst.value == "") {
        alert('Please enter your first name, with no spaces or numbers.');
        this.usernamefirst.focus();
        return;
    }
    if (!/^[a-zA-Z]*$/g.test(this.usernamelast.value) || this.usernamelast.value == "") {
        alert('Please enter your last name, with no spaces or numbers.');
        this.usernamelast.focus();
        return;
    }
    if (!(/^\S+@\S+\.\S+$/.test(this.useremail.value))) {
        alert('Please enter a valid email address.');
        this.useremail.focus();
        return;
    }
    localStorage.setItem('username', this.usernamefirst.value + " " + this.usernamelast.value);
    localStorage.setItem('useremail', this.useremail.value);

    alert('Welcome ' + this.usernamefirst.value + " " + this.usernamelast.value + '. Tap ok to start.');
    window.location.replace('intro.html');
}

// Function: check quiz score progress on document load //
$(window).on('pageshow', function() {

    // check this question has not already been answered //
    let thisquestion = document.title.substr(18,11);

    let questionarray = [['Question 1',  'answerFlag1', 'question-two.html'],
                        ['Question 2',  'answerFlag2', 'question-three.html'],
                        ['Question 3',  'answerFlag3', 'question-four.html'],
                        ['Question 4',  'answerFlag4', 'question-five.html'],
                        ['Question 5',  'answerFlag5', 'question-six.html'],
                        ['Question 6',  'answerFlag6', 'question-seven.html'],
                        ['Question 7',  'answerFlag7', 'question-eight.html'],
                        ['Question 8',  'answerFlag8', 'question-nine.html'],
                        ['Question 9',  'answerFlag9', 'question-ten.html'],
                        ['Question 10',  'answerFlag10', 'test-summary.html']];

    if (thisquestion == 'Test Summar') {
        populateSummary();
    }

    if (thisquestion == 'Certificate') {
        $('#certName').text(localStorage.getItem('username'));
        $('#totalScore').text(localStorage.getItem('totalScore') + ' out of 10.');
        alert('Here is your certificate. After printing, you can simply close your browser.');
    }

    let i = getIndexOfK(questionarray, thisquestion);
    // exit function if i is undefined //
    if(i == null){
        return;
    } 

    let j = questionarray[i][1];

    let varflag = localStorage.getItem(j);
    varflag = varflag * 1;

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

    if (this.question.value.length < 10) {
        alert('Please enter a question of at least 10 characters.');
        return false;
    }
    
    emailjs.init("user_NdBWu4MZZo0BRZ6hrAbQ3");
    
    var thispage = document.title;
    var template_params = {
    "from_name": localStorage.getItem('username'),
    "from_email": localStorage.getItem('useremail'),
    "question": thispage + ": " + this.question.value
    };
    
    var service_id = "celtd";
    var template_id = "continuous_engagement_online_learning";

    emailjs.send(service_id, template_id, template_params);
    
    alert('Email sent succesfully.');

}

//Function: reveal the definition for Value by clicking the word value on definition.html //
function revealValue() {

    nextRevealValue++;
    nextReveal = nextRevealValue * nextRevealWaste;

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

    nextRevealWaste++;
    // confirm that both definitions have been viewed before revealing next href //
    nextReveal = nextRevealValue * nextRevealWaste;

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
          imageCount = 4;
        } else {
          imageCount++;
        }
    populateImage();
}

//Function: scroll to previous image on value.html //
function prevImage() {
    if (imageCount == 0) {
          imageCount = 0;
        } else {
          imageCount--;
        }
    populateImage();
}

//Function: set the image and text on value.html and waste.html //
function populateImage() {
    let getpage = document.title;

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

    $("#valueimage").attr('src', 'assets/images/' + imageArray[imageCount][0] + '.jpg'); //Credit: https://www.juniordevelopercentral.com/jquery-change-image-src/#:~:text=jQuery%20change%20image%20src%20-%20How%20To%20Change,as%20simple%20as%20using%20the%20attr%20%2Afunction.%20 //
    // 200ms delay to allow image to cache //
    setTimeout(function() {
        $("#imagetext").text(imageArray[imageCount][1]);
    }, 200);

    let colorTagLeft;
    let colorTagRight;

    switch(imageCount) {
        case 0:
            colorTagLeft = '#eeeeee';
            break;
        case 1:
            colorTagLeft = '#657486';
            break;
        case 3:
            colorTagRight = '#657486';
            break;
        case 4:
            colorTagRight = '#eeeeee';
            revealNext();
            break;
        default:
            break;
    }

    $("#leftcarouselarrow").css('color', colorTagLeft);
    $("#rightcarouselarrow").css('color', colorTagRight);
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

    let imageString = imagetag.substr(1) + 'Flag'; //Credit: https://stackoverflow.com/questions/4564414/delete-first-character-of-a-string-in-javascript

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
            break;
    }

    // confirm that all popups have been viewed before revealing next anchor //
    // as this is a product, clickCount is only 1 once all images are clicked //
    let clickCount = (transportationFlag * inventoryFlag * motionFlag * waitingFlag * overproductionFlag * overprocessingFlag * defectsFlag * skillsFlag);

    if (clickCount == 1) {
    revealNext();
    }

    // change opacity of clicked image to show status as clicked //
    $(imagetag).css('opacity', 0.25); //Credit: https://stackoverflow.com/questions/2396342/transparent-image-is-it-possible-in-js

    popupWaste(imagetag);
}

//Function: reveal and populate the detailed description of each waste on eightwastes.html //
function popupWaste(imagetag) {

    let indexString = imagetag.substr(1);
    let wasteIndex =0;

    let popupArray = [
                    ['Transportation', 'Moving product or work around for no reason.', 
                        'In a restaurant, this might be; carrying all the meat downstairs to the cellar, only to have to carry it all back upstairs again to cook it.', 
                            '...or a Customer being transferred from one department to another.'],
                    ['Inventory', 'Keeping excessive stocks of product.', 
                        'In our restaurant, this might be filling the freezer with a year`s worth of sausages', 
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
    }, 200); 
}

//Function: hide the detailed description of each waste on eightwastes.html //
function popDownWaste() {
    $('#wastepopup').css('visibility', 'hidden');
}

//Function: work through the steps in example.html //
function exampleSelect() {
    exampleStepNo = $.trim($('#examplestep').text().substring(0, 1));

    let answerindex = examplearray[exampleStepNo - 1][1];
    let answertext = examplearray[exampleStepNo - 1][2];

    var exampleindex  = examplelist.selectedIndex; // Credit: https://www.codeproject.com/articles/656/using-javascript-to-handle-drop-down-list-selectio //

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
        $('#examplepara').text('Is this step Value or Waste? If Waste, which of the 8 Wastes? Select from the list below...');
    }
}

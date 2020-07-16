//Set global variables //
var nextReveal = 0;
var nextRevealValue = 0;
var nextRevealWaste = 0;
var player;
var imageCount = 0;

//Set global variables - flags to ensure all 8 images have been clicked before navigating from eightwastes.html //
var transportationFlag = 0;
var inventoryFlag = 0;
var motionFlag = 0;
var waitingFlag = 0;
var overproductionFlag = 0;
var overprocessingFlag = 0;
var defectsFlag = 0;
var skillsFlag = 0;

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

    var buttonText = $("#playbutton").text();
    var playText = $.trim(buttonText);
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
    var getpage = document.title
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
    $("#imagetext").text(imageArray[imageCount][1]);

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
function revealWaste(imagetag) {
    // log to Console to test Functionality //
    console.log(imagetag);

    var imageString = imagetag.substr(1) + 'Flag'; //Credit: https://stackoverflow.com/questions/4564414/delete-first-character-of-a-string-in-javascript
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

    // as this is a product, clickCount is only 1 once all images are clicked //
    var clickCount = (transportationFlag 
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

    var indexString = imagetag.substr(1);
    // log to Console to test Functionality //
    console.log(indexString);
    var wasteIndex =0;

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
    $('#wastepopup').css('visibility', 'visible');
}

//Function: reveal the detailed description of each waste on eightwastes.html //
function popDownWaste() {
    $('#wastepopup').css('visibility', 'hidden');
}
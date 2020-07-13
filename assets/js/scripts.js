//Set global variables //

var nextReveal = 0;
var nextRevealValue = 0;
var nextRevealWaste = 0;

//Function: use emailjs account to email a question from the help? button on the header //
function sendEmail() {
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
    .then(
        function(response) {
            console.log("success", response);
        },
        function(error) {
            console.log("FAILED", error);
        });
    return false;
}

//Function: reveal the definition for Value by clicking to word value on definition.html //
function revealValue() { //Credit: https://www.tutorialrepublic.com/codelab.php?topic=faq&file=jquery-slide-left-and-right-effect
    console.log('Value');
    nextRevealValue++;
    revealNext();
    $("#arrowmask").animate({
                width: '30vw'
            });
    $("#arrowvalue").animate({
                width: '30vw'
            });
}

function revealWaste() { //Credit: https://www.tutorialrepublic.com/codelab.php?topic=faq&file=jquery-slide-left-and-right-effect
    console.log('Waste');
    nextRevealWaste++
    revealNext();
    $("#arrowvalue").animate({
                width: 0
            });
    $("#arrowmask").animate({
                width: 0
            });
}

//Function: revealing the nextLink after content has been interacted with //
function revealNext() {
    nextReveal = nextRevealValue * nextRevealWaste;
    console.log(nextReveal);
    if (nextReveal > 0) {
         var el = document.getElementById("nextLink");
            el.classList.remove("hidden");
            el.classList.add("unhidden");
    }
}

//Function: using the play button to play the Mark Onetto video on looking.html//
function playVid() { //Credit: https://www.w3schools.com/tags/av_met_play.asp

    var buttonText = $("#playbutton").text();
    var playText = $.trim(buttonText);
    console.log (playText);
    var vid = document.getElementById("onettovideo");

    switch(playText) {
        case "play":
            vid.play();
            $("#playbutton").text("pause");
            break;
        case "pause":
            vid.pause();
            $("#playbutton").text("play");
            break;
        default:
            break;
    }
}

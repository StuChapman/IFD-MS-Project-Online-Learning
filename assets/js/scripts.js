//Clear arrows //
    $("#arrowvalue").hide();
    $("#arrowwaste").hide();

//Function: use emailjs account to email a question from the help? button on the header //
function sendEmail() {
    console.log(this.sendername.value);
    console.log(this.emailinput.value);
    console.log(this.question.value);
    console.log(document.title);

    emailjs.init("user_37585cYmkMNZRiOobd27i")

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
function revealValue() {
    console.log('Value');
    $("#arrowwaste").hide(1000);
    $("#arrowvalue").show(1000);
}

function revealWaste() {
    console.log('Waste');
    $("#arrowvalue").hide(1000);
    $("#arrowwaste").show(1000);
}
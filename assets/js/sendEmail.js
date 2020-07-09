
function sendEmail() {
    console.log(this.sendername.value);
    console.log(this.emailinput.value);
    console.log(this.question.value);

    emailjs.init("user_37585cYmkMNZRiOobd27i")

    var template_params = {
    "from_name": this.sendername.value,
    "from_email": this.emailinput.value,
    "question": this.question.value
    }

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

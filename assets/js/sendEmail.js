//Credit: Code Institute//
function sendEmail(contactForm) {
    console.log("launched");
    emailjs.send("continuous_engagement", "template_6DMLrcJu", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailinput.value,
        "question": contactForm.question.value
    })
    .then(
        function(response) {
            console.log("success", response);
        },
        function(error) {
            console.log("FAILED", error);
        });
    return false;
}


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
            break;
    }

}

//Function: check the answer against desired for questions: two and six //
function populateMuda(letterpick) {

    // if selected letter has already been chosen and is gray-ed out, exit function //
    let letterString = "#letterpick-" + letterpick;

    if($(letterString).css('color') == 'rgb(128, 128, 128)'){
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

    let thisquestion = document.title;

    if (thisquestion == 'Online Learning - Question 2') {
        if (($.trim($('#square-one').text()) == 'M') 
            && ($.trim($('#square-two').text()) == 'U') 
                && ($.trim($('#square-three').text()) == 'D') 
                    && ($.trim($('#square-four').text()) == 'A')){
                        answerFlag2 = 1;
                    } else {
                        answerFlag2 = -1;
                    }
    // write answer to local storage //
    localStorage.setItem('answerFlag2', answerFlag2);
    }

    if (thisquestion == 'Online Learning - Question 6') {
        // allow 'directly' and 'contributes' be interchangeable on question-six.html - symantically the same sentence //
        if ((($.trim($('#square-one').text()) == 'contributes') || ($.trim($('#square-one').text()) == 'directly'))
            && (($.trim($('#square-two').text()) == 'directly') || ($.trim($('#square-two').text()) == 'contributes'))
                && ($.trim($('#square-three').text()) == 'paying') 
                    && ($.trim($('#square-four').text()) == 'for')){
                        answerFlag6 = 1;
                    } else {
                        answerFlag6 = -1;
                    }
    // write answer to local storage //
    localStorage.setItem('answerFlag6', answerFlag6);
    }

    letterCount = ++letterCount;
    if (letterCount == 4)  {
        revealNext();
        return;
    }

}

//Function: allow the user to reset if they want to change their answer on question: two and six //
function resetMuda() {
    $('#square-one').text('');
    $('#square-two').text('');
    $('#square-three').text('');
    $('#square-four').text('');
    $('.letterpickbox div').css('color', 'black');
    $('.wordpickbox div').css('color', 'black');
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
            } else {
                answerFlag4 = -1;
            }
            localStorage.setItem('answerFlag4', answerFlag4);
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
            } else {
                answerFlag10 = -1;
            }
            localStorage.setItem('answerFlag10', answerFlag10);
            break;
    }

}

//Function: allow drag event on question-five.html //
function drag(ev) {// credit to https://www.w3schools.com/HTML/html5_draganddrop.asp
    ev.dataTransfer.setData("text", ev.target.id);
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
        answerFlag5 = 1;
    } else {
        answerFlag5 = -1;
    }

    // write answer to local storage //
    localStorage.setItem('answerFlag5', answerFlag5);

}

//Function: allow drag event on question-nine.html //
function dragOrder(ev) {// credit to https://www.w3schools.com/HTML/html5_draganddrop.asp //
    ev.dataTransfer.setData("text", ev.target.id);

    let i = getIndexOfK(orderArray, ev.target.id);
    orderArray[i][3] = 'vacated';

}

//Function: determine drop locations on question-nine.html //
function order(ev) {
    ev.preventDefault();

    let i = getIndexOfK(orderArray, ev.target.id);
    let j = getIndexOfK(orderArray, 'vacated');

    // get the box, card and text that we are dragging //
    let orderboxDrag = orderArray[j][0];
    let ordercardDrag = orderArray[j][1];
    let ordertextDrag = orderArray[j][2];

    // get the box, card and text that we are need to shift from the dragged to the vacated box //
    let orderboxShift = orderArray[i][0];
    let ordercardShift = orderArray[i][1];
    let ordertextShift = orderArray[i][2];
    
    // repopulate orderArray //
    orderArray[i][1] = ordercardDrag;
    orderArray[i][2] = ordertextDrag;
    orderArray[j][3] = 'full';
    orderArray[j][1] = ordercardShift;
    orderArray[j][2] = ordertextShift;
    
    // populate the box, card and text that have been dragged and shifted //
    document.getElementById(orderboxShift).innerHTML = '<div class="ordercard align-vertically" id="' + ordercardDrag + '" draggable="true" ondragstart="dragOrder(event)" >' + ordertextDrag + '</div>';
    document.getElementById(orderboxDrag).innerHTML = '<div class="ordercard align-vertically" id="' + ordercardShift + '" draggable="true" ondragstart="dragOrder(event)" >' + ordertextShift + '</div>';

    revealNext();

}

//Function: check order against desired on question-nine.html //
function checkQuestionOrder() {
if ( orderArray[0][1] == 'ordercard4'
    && orderArray[1][1] == 'ordercard8'
    && orderArray[2][1] == 'ordercard6'
    && orderArray[3][1] == 'ordercard7'
    && orderArray[4][1] == 'ordercard1'
    && orderArray[5][1] == 'ordercard5'
    && orderArray[6][1] == 'ordercard3'
    && orderArray[7][1] == 'ordercard2') {
    answerFlag9 = 1;
    } else {
    answerFlag9 = -1; 
    }

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
    let resultColor;
    let answerVar;
    let answerSpan;
    let i;

    for (i = 0; i < 11; i++) {
        answerVar = 'answerFlag' + i;
        switch (localStorage.getItem(answerVar)) {
            case '-1':
                result = '<i class="fas fa-times"></i>';
                resultColor = 'red';
                break;
            case '0':
                result = '<i class="fas fa-minus"></i>';
                resultColor = 'gray';
                break;
            case '1':
                result = '<i class="fas fa-check"></i>';
                resultColor = 'green';
                ++totalScore;
                break;
            default: 
                break;
        }
        answerSpan = '#answer' + i;
        $(answerSpan).css('color', resultColor);
        $(answerSpan).html(result);
    }

    localStorage.setItem('totalScore', totalScore);
    $('#totalScore').text(totalScore + ' out of 10');

    if (totalScore < 7) {
        $('#retestbutton').text('Retake Test');
    }

}

//Function: either return to start of test or print certificate on test-summary.html //
function resetPrint() {

    let resetPrint = $('#retestbutton').text();

    switch (resetPrint) {
            case 'Retake Test':
                resetAnswerFlags();
                window.location.replace('test-intro.html');
                break;
            case 'Print Certificate':
                window.location.replace('test-certificate.html');
                break;
            default: 
                break;
        }

}
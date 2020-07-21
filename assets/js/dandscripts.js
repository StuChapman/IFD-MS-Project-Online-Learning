// pagetwo.html scripts

let dragOneScore = 0;
let dragTwoScore = 0;
let dragThreeScore = 0;
let dragFourScore = 0;
let dragFiveScore = 0;
let dragSixScore = 0;

function allowDrop(ev) {// credit to https://www.w3schools.com/HTML/html5_draganddrop.asp
    ev.preventDefault();
}

function drag(ev) {// credit to https://www.w3schools.com/HTML/html5_draganddrop.asp
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {// credit to https://www.w3schools.com/HTML/html5_draganddrop.asp
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));

    console.log(data + ": " + ev.target.id);

    switch (data) {
        case 'drag1': dragOneScore = ev.target.id;
        break;
        case 'drag2': dragTwoScore = ev.target.id;
        break;
        case 'drag3': dragThreeScore = ev.target.id;
        break;
        case 'drag4': dragFourScore = ev.target.id;
        break;
        case 'drag5': dragFiveScore = ev.target.id;
        break;
        case 'drag6': dragSixScore = ev.target.id;
        break;
        default: ;
    }
}

function checkAnswersDnD() {
    if (dragOneScore.startsWith('failure')) {
        console.log("correct");
        document.getElementById("drag1").style.backgroundColor = "green";
        document.getElementById("drag1").style.color = "white";
    }else{
        document.getElementById("drag1").style.backgroundColor = "red";
        document.getElementById("drag1").style.color = "white";
    }
    if (dragTwoScore.startsWith('value')) {
        console.log("correct");
        document.getElementById("drag2").style.backgroundColor = "green";
        document.getElementById("drag2").style.color = "white";
    }else{
        document.getElementById("drag2").style.backgroundColor = "red";
        document.getElementById("drag2").style.color = "white";
    }
    if (dragThreeScore.startsWith('value')) {
        console.log("correct");
        document.getElementById("drag3").style.backgroundColor = "green";
        document.getElementById("drag3").style.color = "white";
    }else{
        document.getElementById("drag3").style.backgroundColor = "red";
        document.getElementById("drag3").style.color = "white";
    }
    if (dragFourScore.startsWith('failure')) {
        console.log("correct");
        document.getElementById("drag4").style.backgroundColor = "green";
        document.getElementById("drag4").style.color = "white";
    }else{
        document.getElementById("drag4").style.backgroundColor = "red";
        document.getElementById("drag4").style.color = "white";
    }
    if (dragFiveScore.startsWith('failure')) {
        console.log("correct");
        document.getElementById("drag5").style.backgroundColor = "green";
        document.getElementById("drag5").style.color = "white";
    }else{
        document.getElementById("drag5").style.backgroundColor = "red";
        document.getElementById("drag5").style.color = "white";
    }
    if (dragSixScore.startsWith('value')) {
        console.log("correct");
        document.getElementById("drag6").style.backgroundColor = "green";
        document.getElementById("drag6").style.color = "white";
    }else{
        document.getElementById("drag6").style.backgroundColor = "red";
        document.getElementById("drag6").style.color = "white";
    }
}

var players = []
players[0] = "Majda"
players[1] = "laila"
var scores = [0, 0]
var scor1 = document.getElementById("score1");
var scor2 = document.getElementById("score2");
var case1 = document.getElementById("case1");
var case2 = document.getElementById("case2");
var case3 = document.getElementById("case3");
var case4 = document.getElementById("case4");
var case5 = document.getElementById("case5");
var case6 = document.getElementById("case6");
var case7 = document.getElementById("case7");
var case8 = document.getElementById("case8");
var case9 = document.getElementById("case9");
var pingomessage1 = document.getElementById("pingomessage1");
var pingomessage2 = document.getElementById("pingomessage2");


var message = document.querySelector(".H1")
var first1 = document.getElementById("first1");
var second2 = document.getElementById("second2")
// winners condition
var marks = ["X", "O"];

var whoseturn = 0
// players turn




function Cclick(hello) {
    hello.innerText = marks[whoseturn];


    if (whoseturn === 0) {
        whoseturn = 1
        message.innerText = "Player2 Turn";

    } else {
        whoseturn = 0
        message.innerText = "Player1 Turn";

    }


    if (case1.innerHTML !== "" && case1.innerHTML === case2.innerHTML && case1.innerHTML === case3.innerHTML) {


        if (case1.innerHTML === "X") {

            message.innerText = "player1 win";
            second2.src = "sadpingo.png"
            first1.src = "happypingo.png"
            pingomessage1.innerText = "Ollleeee!"
            pingomessage2.innerText = "Hmmmmm..!"
            scor1.textContent = scores[0] += 1;



        } else {
            message.innerText = "player2 win";
            second2.src = "happypingo.png"
            first1.src = "sadpingo.png"
            pingomessage1.innerText = "Hmmmmm..!"
            pingomessage2.innerText = "Ollleeee!"
            scor2.textContent = scores[1] += 1;



        }



    } else if (case1.innerHTML !== "" && case1.innerHTML === case4.innerHTML && case1.innerHTML === case7.innerHTML) {
        if (case1.innerHTML === "X") {

            message.innerText = "player1 win";
            second2.src = "sadpingo.png"
            first1.src = "happypingo.png"
            pingomessage1.innerText = "Ollleeee!"
            pingomessage2.innerText = "Hmmmmm..!"
            scor1.textContent = scores[0] += 1;
        } else {

            message.innerText = "player2 win";
            second2.src = "happypingo.png"
            first1.src = "sadpingo.png"
            pingomessage1.innerText = "Hmmmmm..!"
            pingomessage2.innerText = "Ollleeee!"
            scor2.textContent = scores[1] += 1;
        }


    } else if (case1.innerHTML !== "" && case1.innerHTML === case5.innerHTML && case1.innerHTML === case9.innerHTML) {


        if (case1.innerHTML === "X") {
            message.innerText = "player1 win";
            second2.src = "sadpingo.png"
            first1.src = "happypingo.png"
            pingomessage1.innerText = "Ollleeee!"
            pingomessage2.innerText = "Hmmmmm..!"
            scor1.textContent = scores[0] += 1;
        } else {
            message.innerText = "player2 win";
            second2.src = "happypingo.png"
            first1.src = "sadpingo.png"
            pingomessage1.innerText = "Hmmmmm..!"
            pingomessage2.innerText = "Ollleeee!"
            scor2.textContent = scores[1] += 1;
        }

    } else if (case2.innerHTML !== "" && case2.innerHTML === case5.innerHTML && case2.innerHTML === case8.innerHTML) {

        if (case2.innerHTML === "X") {
            message.innerText = "player1 win";
            second2.src = "sadpingo.png"
            first1.src = "happypingo.png"
            pingomessage1.innerText = "Ollleeee!"
            pingomessage2.innerText = "Hmmmmm..!"
            scor1.textContent = scores[0] += 1;
        } else {
            message.innerText = "player2 win";
            second2.src = "happypingo.png"
            first1.src = "sadpingo.png"
            pingomessage1.innerText = "Hmmmmm..!"
            pingomessage2.innerText = "Ollleeee!"
            scor2.textContent = scores[1] += 1;
        }

    } else if (case3.innerHTML !== "" && case3.innerHTML === case6.innerHTML && case3.innerHTML === case9.innerHTML) {


        if (case3.innerHTML === "X") {
            message.innerText = "player1 win";
            second2.src = "sadpingo.png"
            first1.src = "happypingo.png"
            pingomessage1.innerText = "Ollleeee!"
            pingomessage2.innerText = "Hmmmmm..!"
            scor1.textContent = scores[0] += 1;
        } else {
            message.innerText = "player2 win";
            second2.src = "happypingo.png"
            first1.src = "sadpingo.png"
            pingomessage1.innerText = "Hmmmmm..!"
            pingomessage2.innerText = "Ollleeee!"
            scor2.textContent = scores[1] += 1;
        }

    } else if (case7.innerHTML !== "" && case7.innerHTML === case8.innerHTML && case7.innerHTML === case9.innerHTML) {

        if (case7.innerHTML === "X") {
            message.innerText = "player1 win";
            second2.src = "sadpingo.png"
            first1.src = "happypingo.png"
            pingomessage1.innerText = "Ollleeee!"
            pingomessage2.innerText = "Hmmmmm..!"
            scor1.textContent = scores[0] += 1;
        } else {
            message.innerText = "player2 win";
            second2.src = "happypingo.png"
            first1.src = "sadpingo.png"
            pingomessage1.innerText = "Hmmmmm..!"
            pingomessage2.innerText = "Ollleeee!"
            scor2.textContent = scores[1] += 1;
        }

    } else if (case3.innerHTML !== "" && case3.innerHTML === case5.innerHTML && case3.innerHTML === case7.innerHTML) {

        if (case3.innerHTML === "X") {
            message.innerText = "player1 win";
            second2.src = "sadpingo.png"
            first1.src = "happypingo.png"
            pingomessage1.innerText = "Ollleeee!"
            pingomessage2.innerText = "Hmmmmm..!"
            scor1.textContent = scores[0] += 1;
        } else {
            message.innerText = "player2 win";
            second2.src = "happypingo.png"
            first1.src = "sadpingo.png"
            pingomessage1.innerText = "Hmmmmm..!"
            pingomessage2.innerText = "Ollleeee!"
            scor2.textContent = scores[1] += 1;
        }

    } else if (case4.innerHTML !== "" && case4.innerHTML === case5.innerHTML && case4.innerHTML === case6.innerHTML) {

        if (case4.innerHTML === "X") {
            message.innerText = "player1 win";
            second2.src = "sadpingo.png"
            first1.src = "happypingo.png"
            pingomessage1.innerText = "Ollleeee!"
            pingomessage2.innerText = "Hmmmmm..!"
            scor1.textContent = scores[0] += 1;
        } else {
            message.innerText = "player2 win";
            second2.src = "happypingo.png"
            first1.src = "sadpingo.png"
            pingomessage1.innerText = "Hmmmmm..!"
            pingomessage2.innerText = "Ollleeee!"
            scor2.textContent = scores[1] += 1;
        }
    } 
}


function PlayAgain() {

    case1.innerHTML = "";
    case2.innerHTML = "";
    case3.innerHTML = "";
    case4.innerHTML = "";
    case5.innerHTML = "";
    case6.innerHTML = "";
    case7.innerHTML = "";
    case8.innerHTML = "";
    case9.innerHTML = "";
    message.innerText = "Tic-Tac-Toe";
    pingomessage1.innerText = ""
    pingomessage2.innerText = ""
    second2.src = "pingo1.png"
    first1.src = "pingo1.png"

}

function reset() {

    case1.innerHTML = "";
    case2.innerHTML = "";
    case3.innerHTML = "";
    case4.innerHTML = "";
    case5.innerHTML = "";
    case6.innerHTML = "";
    case7.innerHTML = "";
    case8.innerHTML = "";
    case9.innerHTML = "";
    pingomessage1.innerText = ""
    pingomessage2.innerText = ""
    second2.src = "pingo1.png"
    first1.src = "pingo1.png"
    scor2.textContent = 0
    scor1.textContent = 0
    message.innerText = "Tic-Tac-Toe";

}




























// function Cclick(How) {


//     for (i = 1; i < 10; i++) {

//         //player2
//         if (i % 2 === 0) {

//             document.getElementById("case").textContent = "O";



//             //player1
//         } else {
//             document.getElementById("case1").textContent = "X";

//         }

//         console.log(i)
//     }


// }
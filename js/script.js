console.log("Jeg er i guessnumber")

const lblMessage = document.querySelector(".message");
const lblNumber = document.querySelector(".number");
const lblScore = document.querySelector(".score");
const lblHighScore = document.querySelector(".highscore");
const inpGuess = document.querySelector(".guess");
const btnCheck = document.querySelector(".check");
const btnAgain = document.querySelector(".again");


let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;


const displayMessage = function (message) {
    lblMessage.textContent = message;
}

btnCheck.addEventListener("click", function () {
   const guess = Number(inpGuess.value);

   if (!guess) {
       displayMessage("Not the correct number, try again!");
   } else if (guess === secretNumber) {
       displayMessage("WUHUUU YOU GUESSED THE NUMBER \u{1F973}!!!.... Now try again \u{1F601}");
       lblNumber.textContent = secretNumber;

       if (score > highscore) {
           highscore = score;
           lblHighScore.textContent = highscore;
       }

       document.body.style.backgroundImage = "url('https://media.giphy.com/media/pa37AAGzKXoek/giphy.gif')";
       document.body.style.backgroundRepeat = "no-repeat";
       document.body.style.backgroundSize = "cover";
       document.body.style.backgroundPosition = "center";

       lblNumber.style.width = "30rem";
   } else if (guess !== secretNumber) {
       if (score > 1) {
           displayMessage(guess > secretNumber ? "The Number is too high" : "The number is too low");
           score--;
           lblScore.textContent = score;
       }  else {
           displayMessage("Game over!")
           lblScore.textContent = 0;
       }
   }
});

btnAgain.addEventListener("click", function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) +1;

    displayMessage("Start guessing....");
    lblScore.textContent = score;
    lblNumber.textContent = "?";
    inpGuess.value = "";


    //document.body.style.backgroundColor = "#854faf"
    document.body.style.backgroundImage = "";
    document.body.style.backgroundColor = "#DDA0DD" ;
    lblNumber.style.width = "15rem";
});


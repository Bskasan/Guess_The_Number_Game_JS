//*************** VARIABLES **************/

const userInput = document.querySelector(".input");
const button = document.querySelector(".input-con button");
const result = document.querySelector(".result");
const imgCon = document.querySelector(".img-con");

//? Get a number between 1 and 100.
let randomNum = Math.ceil(Math.random() * 100);
let liveNum = 3;

console.log(randomNum);

//*************** EVENT LISTENER **************/
button.addEventListener("click", () => {
  console.log(userInput.value);
  let inputValue = userInput.value;
  liveNum--;
  console.log("Live: ", liveNum);

  //if input is NaN
  if (isNaN(inputValue)) {
    console.log("Please enter a number");
  }

  //Win
  if (inputValue === randomNum) {
    console.log("You win");
    result.innerText = "Congratulations!";
    imgCon.style.backgroundImage = "url('../images/congrat.gif')";
  }

  //Lower Number
  if (inputValue < randomNum) {
    console.log("Higher");
    result.innerText = "Please give higher number!";
    imgCon.style.backgroundImage = "url('../images/higher.gif')";
  }

  //Higher Number
  if (inputValue > randomNum) {
    console.log("Lower");
    result.innerText = "Please give lower number!";
    imgCon.style.backgroundImage = "url('../images/lower.gif')";
    
  }

  //if live is 0
  if (liveNum == 0) {
    console.log("You Lost");
    result.innerText = "Try Again!";
    imgCon.style.backgroundImage = "url('../images/tryagain.gif')";
  }
});

//*************** VARIABLES **************/

const userInput = document.querySelector(".input");
const button = document.querySelector(".input-con button");

//? Get a number between 1 and 100.
let randomNum = Math.ceil(Math.random() * 100);
let liveNum = 3;

//*************** EVENT LISTENER **************/
button.addEventListener("click", () => {
  console.log(userInput.value);
  let inputValue = userInput.value;
  liveNum--;
  console.log('Live: ', liveNum);

  //if input is NaN
  if (isNaN(inputValue)) {
    console.log("Please enter a number");
  }

  //Win
  if (inputValue === randomNum) {
    console.log("You win");
  }

  //Lower Number
  if (inputValue < randomNum) {
    console.log("Higher");
  }

  //Higher Number
  if (inputValue > randomNum) {
    console.log("Lower");
  }

  //if live is 0
  if(liveNum == 0){
    console.log("You Lost");
  }
});

const enterButton = document.getElementById("check-button");
const output = document.querySelector(".middle-header");

let randomNumber = Math.ceil(Math.random() * 100);

function checkNumber() {
  let input = document.querySelector(".userInput").value;
  console.log(randomNumber);
  if (input === randomNumber) {
    output.innerHTML = "You guessed right, Congrat!!!" + randomNumber;
  } else if (input > randomNumber) {
    output.innerHTML = "--- You guessed too high ---";
  } else if (input < randomNumber) {
    output.innerHTML = "--- You guessed too low ---";
  } else if (input < 1) {
    output.innerHTML = "--- Higher, it has to be between 1 and 100 ---";
  } else if (isNaN(input)) {
    output.innerHTML = "--- That's not a Number ---";
  } else {
    output.innerHTML = "--- Lower, it has to be between 1 and 100 ---";
  }
}

enterButton.addEventListener("click", () => {
    checkNumber();
})

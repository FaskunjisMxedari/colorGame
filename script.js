let mode;
let Red;
let Green;
let Blue;
let changer1;
let changer3;
let changer2;
let max;
let min;
let clicked;
let gameIsActive = true;

const maxScore = 10;
const minScore = -5;
const easyBtn = document.querySelector("#easy");
const hardBtn = document.querySelector("#hard");
const tryAgBtn = document.querySelector("#tryAg");
const clickChoose = document.querySelector("#box");
const clickBox = document.querySelectorAll(".box");
const number = document.querySelector("#score");
const gameEndDiv = document.createElement("DIV");

let score = 0;
number.innerHTML = score;

//score counter. additionaly displays enfgame or won game message
clickBox.forEach((box) => {
  box.addEventListener("click", (event) => {
    if (!gameIsActive) {
      return;
    }

    clicked = event.currentTarget;
    if (
      clicked.style.backgroundColor ===
      document.querySelector("#genesisBox").style.backgroundColor
    ) {
      generate();
      score++;
      number.innerHTML = score;
      if (score > 0) {
        number.style.color = "rgb(0, 255, 0)";
      }
    } else {
      score--;
      number.innerHTML = score;
      if (score < 0) {
        number.style.color = "red";
      }
    }

    if (score == maxScore) {
      gameIsActive = false;
      gameEndDiv.innerText = "you won!!!:)";
      document.body.appendChild(gameEndDiv);
      Object.assign(gameEndDiv.style, {
        width: "70vw",
        height: "80vh",
        backgroundColor: "rgba(88, 76, 76, 0.96)",
        position: "fixed",
        top: "5%",
        left: "17%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "300%",
        borderRadius: "35%",
      });
    } else if (score == minScore) {
      gameIsActive = false;
      gameEndDiv.innerText = "You lost!!! :(";
      document.body.appendChild(gameEndDiv);
      Object.assign(gameEndDiv.style, {
        width: "70vw",
        height: "80vh",
        backgroundColor: "rgba(227, 84, 84, 0.95)",
        position: "fixed",
        top: "5%",
        left: "17%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "300%",
        borderRadius: "35%",
      });
    }
  });
});

//game starter
function gameStarter(x) {
  score = 0;
  number.innerHTML = score;
  mode = x;
  generate();
  gameIsActive = true;
  gameEndDiv.remove();
}

//gamemode changers
easyBtn.addEventListener("click", () => gameStarter("easy"));
hardBtn.addEventListener("click", () => gameStarter("hard"));
tryAgBtn.addEventListener("click", () => gameStarter("tryAgain"));

//function that chooses a random box and gives it the same color as genesis box
function boxClick(numb) {
  let chooser = Math.floor(Math.random() * numb) + 1;
  // let a = "#box" + chooser
  // console.log(a)
  document.querySelector("#box" + chooser).style.backgroundColor =
    document.querySelector("#genesisBox").style.backgroundColor;
}

//function that generates colors for all 6 boxes, for which
//it uses function ranRgbGen
function generate() {
  const rgb = ranRgbGen();
  document.querySelector("#genesisBox").style.backgroundColor = rgb;
  if (mode == "easy") {
    document.querySelector("#box1").style.backgroundColor = smlrColors();
    document.querySelector("#box2").style.backgroundColor = smlrColors();
    document.querySelector("#box3").style.backgroundColor = smlrColors();
    document.querySelector("#box4").style.backgroundColor = "transparent";
    document.querySelector("#box5").style.backgroundColor = "transparent";
    document.querySelector("#box6").style.backgroundColor = "transparent";
    max = 3;
    boxClick(max);
  } else if (mode == "hard") {
    document.querySelector("#box1").style.backgroundColor = smlrColors();
    document.querySelector("#box2").style.backgroundColor = smlrColors();
    document.querySelector("#box3").style.backgroundColor = smlrColors();
    document.querySelector("#box4").style.backgroundColor = smlrColors();
    document.querySelector("#box5").style.backgroundColor = smlrColors();
    document.querySelector("#box6").style.backgroundColor = smlrColors();
    max = 6;
    boxClick(max);
  } else if (mode == "tryAgain") {
    document.querySelector("#genesisBox").style.backgroundColor = "transparent";
    document.querySelector("#box1").style.backgroundColor = "transparent";
    document.querySelector("#box2").style.backgroundColor = "transparent";
    document.querySelector("#box3").style.backgroundColor = "transparent";
    document.querySelector("#box4").style.backgroundColor = "transparent";
    document.querySelector("#box5").style.backgroundColor = "transparent";
    document.querySelector("#box6").style.backgroundColor = "transparent";
  }
}

//function that generates random rgb color for genesis box
function ranRgbGen() {
  Red = Math.floor(Math.random() * 256);
  Green = Math.floor(Math.random() * 256);
  Blue = Math.floor(Math.random() * 256);
  return "rgb(" + Red + "," + Green + "," + Blue + ")";
}

//function that makes the 6/3 boxes look similar to each other
function smlrColors() {
  if (mode == "easy") {
    changer1 = Math.floor(Math.random() * 30);
    changer3 = Math.floor(Math.random() * 30);
    changer2 = Math.floor(Math.random() * 30);
  } else if (mode == "hard") {
    changer1 = Math.floor(Math.random() * 30);
    changer3 = Math.floor(Math.random() * 30);
    changer2 = Math.floor(Math.random() * 30);
  }

  let simRed = Red - Math.floor(Math.random() * changer1);
  let simGreen = Green - Math.floor(Math.random() * changer2);
  let simBlue = Blue - Math.floor(Math.random() * changer3);

  return "rgb(" + simRed + "," + simGreen + "," + simBlue + ")";
}

/*----- constants -----*/
const hmWords = [
    "TABLE",
    "VOCAL",
    "WHALE",
    "ZEBRA ",
    "YACHT",
    "CHEF",
    "PILOT",
    "NIGHT",
];

// const gmCont = document.getElementById("gm-container")

// const head = document.createElement("div")
// const leftArm = document.createElement("div")
// const rightArm = document.createElement("div")
// const torso = document.createElement("div")
// const leftLeg = document.createElement("div")
// const rightLeg = document.createElement("div")


// const idArray = [
//     "head",
//     "leftarm",
//     "rightarm",
//     "torso",
//     "leftleg",
//     "rightleg",
// ]

// const bodyPartsArray = [
//     head,
//     leftArm,
//     rightArm,
//     torso,
//     leftLeg,
//     rightLeg,
// ]
 
// const resetBtn = document.getElementById("reset");
// resetBtn.addEventListener("click", init);

//////////////////////////////////////////////////////////////////////
let hangman;

//Trying to find the right code to initialize the game 
const init = function() {
    initControls();
    hangman = new hangman()
    drawCurrentWord();
};
document.getElementById("restart").addEventListener("click", init)

const initControls = function() {
    document.getElementById("you-win").classList   = "hide";
    document.getElementById("game-over").classList = "hide";
    document.getElementById("hangman").classList   = "";
    document.getElementById("letters").innerHTML   = "";
}

//insert letter
const insertLtr = function (evt){
    if (evt.keycode < 65 || evt.keycode > 90)
    return;

    let letter = string.fromCharCode(evt.keycode);
    let correct = hangman.askLetter(letter);

    if (correct !== undefined && !correct) {
        _addLetter(letter);
      } else {
        drawCurrentWord();
      }
}

//draw hangman
const dwHangman = function () {
    document.getElementById("the-hangman").classList += " lifes-" + (hangman.errorsLeft + 1);
   };

const insertLetter = function (event) {
    if (!hangman || (event.keyCode < 65 || event.keyCode > 90))
      return;
  
    var letter  = String.fromCharCode(event.keyCode);
    var correct = hangman.askLetter(letter);
  
    if (correct !== undefined && !correct) {
      _addLetter(letter);
      drawHangman();
    } else {
      drawCurrentWord();
    }
    afterRound()
};

//end round
const afterRound = function () {
  var status = hangman.gameStatus();

  if (!status)
    return;

  if(status.toLowerCase() === "you win") {
    document.getElementById("you-win").classList = "";
  } else {
    drawCurrentWord(hangman.secretWord.split(""));
    document.getElementById("game-over").classList = "";
  }

  hangman = undefined;
};

//Game logic
const grabWord = function () {
    const rdmWord = Math.floor(Math.random() * hmWords.length)
    return hmWords[rdmWord]; 
} 
const hiddenWord = grabWord();
const checkedLtrs = [];
const errors = 6;

const getLtr = function (letter) {
    letter = letter.toLowerCase();

    if (checkedLtrs.indexOf(letter) > -1){
    return;
}
    checkedLtrs.push(letter);
    let isOkay = hiddenWord.indexOf(letter) > -1;

    if (!isOkay) {
    errors = -1;
    }

    return correct;
};

const showWord = function () {
    wrdState = [];
    wrdSplit = hiddenWord.split("");
    wordSplit.forEach(function(letter){
        if (checkedLtrs.indexOf(letter) > -1) {
            wordState.push(letter);
        } else{
            wordState.push("_");
        }
    });
    return wordState;
};

//outcomeA
const gameFin = function() {
    return errors === 0;
};
//outcomeB
const gameConcl = function() {
    return showWord().indexOf("_") < 0;
};
//Game complete outcome
const gameOver = function() {
    if(gameFin()) {
        return "Ayeee You Won!";
    } else if (gameConcl()) {
        return "Yikes! You got Hangman"
    }
};

// const checkedLtrsDiv = document.getElementById("checkedLtrs")

// const tableEl = document.querySelectorAll("table tr td");
// for (let i = 0; i < tableEl.length; i++){
//     tableEl[i].addEventListener('click',clickNum)
// }

// const rdmWord = hmWords[Math.floor(Math.random() * hmWords.length)]
// console.log(rdmWord)


// let bool = [];
// for (let i = 0; i < rdmWord.length; i++){
//     bool.push(null);
// }


// /*----- functions -----*/
// function clickNum (evt) {
//     checkedLtrs.push (evt.target.value)
//     evt.target.style.display = "none"
//     const letter = document.createElement('p')
//     const textNode = document.createTextNode (evt.target.value)
//     letter.appendChild(textNode)
//     checkedLtrsDiv.appendChild(letter)

//     if (rdmWord.includes(evt.target.value)) {
//         bool[word.indexOf(evt.target.value)] = true;
//     } else {
//         let bodyPart = bodyPartsArray.shift()
//         bodyPart.setAttribute("id", idArray.shift());
//         gmCont.appendChild(bodyPart);
//         console.log("generate body part")// loss logic
//     }
// }
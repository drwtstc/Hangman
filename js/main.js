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

const gmCont = document.getElementById("gm-container")

const head = document.createElement("div")
const leftArm = document.createElement("div")
const rightArm = document.createElement("div")
const torso = document.createElement("div")
const leftLeg = document.createElement("div")
const rightLeg = document.createElement("div")


const idArray = [
    "head",
    "leftarm",
    "rightarm",
    "torso",
    "leftleg",
    "rightleg",
]

const bodyPartsArray = [
    head,
    leftArm,
    rightArm,
    torso,
    leftLeg,
    rightLeg,
]
 
// const resetBtn = document.getElementById("reset");
// resetBtn.addEventListener("click", init);

const hiddenWord = "";
const checkedLtrs = [];
const errors = 10;

hiddenWord = grabWord();

const grabWord = function () {
    const rdmWord = Math.floor(Math.random() * hmWords.length)
    return hmWords[rdmWord]; 
} 

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
/*----- constants -----*/
const hmWords = [
    "table",
    "vocal",
    "whale",
    "zebra",
    "yacht",
    "chef",
    "pilot",
    "night",
];

const gmCont = document.getElementById("gm-container")

const head = document.createElement("div")
const torso = document.createElement("div")
const rightArm = document.createElement("div")
const leftArm = document.createElement("div")
const rightLeg = document.createElement("div")
const leftLeg = document.createElement("div")

const idArray = [
    "head","torso","leftarm","rightarm","leftleg","rightleg"
]

const bodyPartsArray = [
    head,
    torso,
    leftArm,
    rightArm,
    leftLeg,
    rightLeg,
]
 
// const resetBtn = document.getElementById("reset");
// resetBtn.addEventListener("click", init);

const checkedLtrsDiv = document.getElementById("checkedLtrs")
const checkedLtrs = []
const tableEl = document.querySelectorAll("table tr td");
for (let i = 0; i < tableEl.length; i++){
    tableEl[i].addEventListener('click',clickNum)
}

const rdmWord = hmWords[Math.floor(Math.random() * hmWords.length)]
console.log(rdmWord)


let bool = [];
for (let i = 0; i < rdmWord.length; i++){
    bool.push(null);
}



/*----- state variables -----*/
// const resultTxt = document.getElementById("outcome");

/*---- cached elements  -----*/



/*----- event listeners -----*/


/*----- functions -----*/
function clickNum (evt) {
    checkedLtrs.push (evt.target.value)
    evt.target.style.display = "none"
    const letter = document.createElement('p')
    const textNode = document.createTextNode (evt.target.value)
    letter.appendChild(textNode)
    checkedLtrsDiv.appendChild(letter)

    if (rdmWord.includes(evt.target.value)) {
        bool[word.indexOf(evt.target.value)] = true;
    } else {
        let bodyPart = bodyPartsArray.shift()
        bodyPart.setAttribute("id", idArray.shift());
        gmCont.appendChild(bodyPart);
        console.log("generate body part")// loss logic
    }
}
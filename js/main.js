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
let word = "someword";//word from random word function
//setting dynamic array to null
for (let i = 0; i < word.length; i++){
    bool.push(null);
}

const canvas = document.querySelector('canvas');
const canvasCtxt = canvas.getContext('2d');
canvasCtxt.fillStyle = "#FFFFFF";
canvasCtxt.fillRect(100, 100, 100, 100);

/*----- state variables -----*/


/*----- cached elements  -----*/



/*----- event listeners -----*/


/*----- functions -----*/
function clickNum (evt) {
    checkedLtrs.push (evt.target.value)
    evt.target.style.display = "none"
    console.log (checkedLtrs)
    const letter = document.createElement('p')
    const textNode = document.createTextNode (evt.target.value)
    letter.appendChild(textNode)
    checkedLtrsDiv.appendChild(letter)

    // let cLetter = "s";//getting (evt.target.value)
    // if (word.includes(cLetter)) {
    // bool[word.indexOf(cLetter)] = true;
    // } else {
   
    // console.log("generate body part")// loss logic
    // }
}
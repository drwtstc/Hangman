/*----- constants -----*/
const hmWords = [
    "Apple",
    "Vehicle",
    "Camera",
    "iPhone",
    "Teacher",
    "Chef",
    "Pilot",
    "Farmer",
];

const checkedLtrsDiv = document.getElementById("checkedLtrs")
const checkedLtrs = []
const tableEl = document.querySelectorAll("table tr td");
for (let i = 0; i < tableEl.length; i++){
    tableEl[i].addEventListener('click',clickNum)
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
}


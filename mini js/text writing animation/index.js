const containerEl = document.querySelector(".container")
const carrers =["Devloper", "FrontEnd Learner", "editor", "Instagrammer"]
let carrerIndex = 0

let characterIndex = 0;

updateText()

function updateText() {
    containerEl.innerHTML = `
    <h1>I am a ${carrers[carrerIndex].slice(0,characterIndex)}</h1>
    `;

    if (characterIndex === carrers[carrerIndex].length){
        carrerIndex++;
        characterIndex = 0 
    }

    if(carrerIndex === carrers.length){
        carrerIndex=0;
    }
    characterIndex++;
    setTimeout(updateText,400)
}


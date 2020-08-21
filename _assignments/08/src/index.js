// <⚠️ DONT DELETE THIS ⚠️>
//import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const rangeForm = document.querySelector(".number-range"),
    rangeInput = rangeForm.querySelector(".number-range__input"),
    descriptionDiv = document.querySelector(".description"),
    descriptionSpan = descriptionDiv.querySelector(".description__number"),
    guessForm = document.querySelector(".number-guess"),
    guessInput = guessForm.querySelector(".number-guess__input"),
    guessBtn = guessForm.querySelector(".number-guess__btn"),
    displayDiv = document.querySelector(".number-display"),
    displaySpanYours = displayDiv.querySelector(".number-display__yours"),
    displaySpanMachines = displayDiv.querySelector(".number-display__machines"),
    answerDiv = document.querySelector(".answer"),
    answerSpan = answerDiv.querySelector(".answer__word");

let range = 100;

function handleClick(event) {
    event.preventDefault();

    const guess = parseInt(guessInput.value, 10);

    if (guess <= range) {
        const random = Math.floor(Math.random() * (range + 1));

        displaySpanYours.innerText = guess;
        displaySpanMachines.innerText = random;

        if (guess === random) {
            answerSpan.innerText = "Won";
        } else {
            answerSpan.innerText = "Lost";
        }
        displayDiv.removeAttribute("hidden");
        answerDiv.removeAttribute("hidden");
    } else {
        displayDiv.setAttribute("hidden", true);
        answerDiv.setAttribute("hidden", true);
    }
}

function handleInput(event) {
    range = parseInt(rangeInput.value, 10);
    descriptionSpan.innerText = range;
    guessInput.max = range.toString();
}

function init() {
    rangeInput.addEventListener("input", handleInput);
    guessBtn.addEventListener("click", handleClick);
    displayDiv.setAttribute("hidden", true);
    answerDiv.setAttribute("hidden", true);
}

init();

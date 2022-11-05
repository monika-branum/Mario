/* Imports */

/* Get DOM Elements */
const buttonOne = document.getElementById('button-one');
const buttonTwo = document.getElementById('button-two');
const buttonThree = document.getElementById('button-three');

const castleOne = document.getElementById('castle-one');
const castleTwo = document.getElementById('castle-two');
const castleThree = document.getElementById('castle-three');

const winsEl = document.getElementById('wins');
const lossesEl = document.getElementById('losses');
const totalEl = document.getElementById('total');

/* State */
const castles = ['one', 'two', 'three'];
let guessWins = 0;
let guessTotal = 0;

/* Events */

buttonOne.addEventListener('click', () => {
    const randomCastle = Math.floor(Math.random() * 3);
    const answer = castles[randomCastle];
    handleGuess(answer, 'one');
});

buttonTwo.addEventListener('click', () => {
    const randomCastle = Math.floor(Math.random() * 3);
    const answer = castles[randomCastle];
    handleGuess(answer, 'two');
});

buttonThree.addEventListener('click', () => {
    const randomCastle = Math.floor(Math.random() * 3);
    const answer = castles[randomCastle];
    handleGuess(answer, 'three');
});

/* Display Functions */
function resetStyles() {
    castleOne.classList.remove('peach');
    castleTwo.classList.remove('peach');
    castleThree.classList.remove('peach');
}

function guessesDisplay() {
    totalEl.textContent = `Total: ${guessTotal}`;
    winsEl.textContent = `Wins: ${guessWins}`;
    lossesEl.textContent = `Losses: ${guessTotal - guessWins}`;
}

function handleGuess(correctSpot, userGuess) {
    resetStyles();
    guessTotal++;
    const correctHidingSpot = document.getElementById(`castle-${correctSpot}`);
    correctHidingSpot.classList.add('peach');
    if (userGuess === correctSpot) {
        guessWins++;
    }
    guessesDisplay();
}

// (don't forget to call any display functions you want to run on page load!)

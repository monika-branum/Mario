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

/* Events */

buttonOne.addEventListener('click', () => {
    const randomCastle = Math.floor(Math.random() * 3);
    const answer = castles[randomCastle];
    handleGuess(answer, 'one');
});

/* Display Functions */
function resetStyles() {
    castleOne.classList.remove('peach');
    castleTwo.classList.remove('peach');
    castleThree.classList.remove('peach');
}

function guessesDisplay() {}

// (don't forget to call any display functions you want to run on page load!)

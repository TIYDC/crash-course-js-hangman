
// Variables we'll use in the game...
var selectedWord;
var display;
var guesses = [];
var maxGuesses = 6;
var numMissed = 0;

// "event handlers"
document.getElementById('new-game').addEventListener('click', startGame);
document.getElementById('guess').addEventListener('click', guessLetter);

function startGame() {
    numMissed = 0;
    display = [];
    guesses = [];

    selectedWord = words[Math.floor(Math.random() * words.length)];

    for (var i = 0; i < selectedWord.length; i++) {
        display.push('_');
    }

    document.getElementById('guesses').innerText = '';
    document.getElementById('result').innerText = '';
    updateDisplay();
}

function guessLetter() {
    var letter = document.getElementById('letter').value;
    document.getElementById('letter').value = '';

    if (!letter || guesses.indexOf(letter) > -1) {
        return;
    }

    guesses.push(letter);
    document.getElementById('guesses').innerText = guesses.join(' ');

    if (selectedWord.indexOf(letter) > -1) {
        for (var i=0; i<selectedWord.length; i++) {
            if (selectedWord.charAt(i) === letter) {
                display[i] = letter;
            }
        }
    } else {
        numMissed++;
    }

    updateDisplay();
    checkGameStatus();
}

function updateDisplay() {
    document.getElementById('current-word').innerText = display.join('');
    document.getElementById('missed').innerText = numMissed;
}

function checkGameStatus() {
    if (display.join('') === selectedWord) {

        document.getElementById('result').innerText = 'YOU WIN!';

    } else if (numMissed > maxGuesses) {

        document.getElementById('result').innerText = 'YOU LOSE!';
        display = selectedWord.split('');

    }

    updateDisplay();
}

# Hangman Crash Course

This repository is for the Hangman crash course in JavaScript led by [The Iron Yard](http://theironyard.com). The intent is to allow students to start with an HTML and CSS file and then build the JavaScript game in the crash course.

## How to Use

If you want to develop this game, you can [clone this repository](https://help.github.com/articles/cloning-a-repository/) and start working on the JavaScript file (hangman.js). The game is simple:

* Clicking the "New Game" button selects a random word (from [the word list](words.js))
  * Each letter of the random word should be displayed as an underscore on the page (in the "current-word" div tag)
* When the "Guess Letter" button is pressed, the inputted letter is checked against the random word
  * The letter is _always_ placed in the "guesses" div
  * If the letter is in the random word, replace the underscore for that position in the "current-word" div
  * Don't forget to replace **all** instances of the letter in the current word
  * If the letter is _not_ in the word, increment the number of misses
  * If the word is now complete, print "you win" in the "result" div
  * If the number of misses is more than 6, print "you lose" in the "result" div

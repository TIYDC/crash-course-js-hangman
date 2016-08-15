
## Instructor Notes

This is a general guide/outline for teaching this crash course.

1. `var`s for selected word, max guesses, number missed
  * numbers vs strings (and booleans?)
1. function to start game
  * discuss `function` as concept with possible args
  * select word from words (`Math`, `length`, index of array)
  * store display in array (`for` loops, `push()`)
  * update display with underscores (`getElementById`, DOM, `join()`)
  * event handler for starting game (`events` and handlers)
1. event handler for guessing letter
  * get letter (more DOM)
  * `var` for tracking guesses (array, discuss scope)
  * see if letter is in guesses (conditionals, `return`)
  * add letter to guesses and update display
  * see if letter is in word
  * loop over word and see replace display array entry with letter
  * update number missed otherwise (`else`)
  * update display, see if user has won or lost
      * `else if`
      * if lost, display whole word (`split()`)

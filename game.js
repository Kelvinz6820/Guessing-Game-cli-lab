const rls = require('readline-sync')

/**
 * Starts the game by prompting the user if they want to play
 * Calls either gameLoop() or quitGame()
 * 
 * @returns {undefined}
 */
const startGame = () => {
  console.log("Welcome!")
//prompt user if they want to play
  let answer = rls.keyInYN("Do you want to play?")
//if yes
  if(answer) {
//call gameLoop()
    console.log("Let's start!")
    gameLoop()
  }
//call gameLoop()
//else
  else {
    console.log('Have a nice life!')
    quitGame()
  }
//call quitGame()
}

/**
 * Logs "Goodbye!"
 * Calls process.exit() to quit the game
 * 
 * @returns {undefined}
 */
const quitGame = () => {
  console.log("Goodbye!")
  process.exit()
}

/**
 * Controls the flow of the game.
 * Should prompt the user to play again once all
 * guesses have been made or correct answer guessed
 * 
 * @returns {undefined}
 */
const gameLoop = () => {
  console.log("I have a random number in mind")
  console.log("It's between 1 and 1000")
  console.log("You have 10 guesses total")
  let numberOfGuesses = 10
  let randomNumber = generateRandomNumber()
  while (numberOfGuesses > 0) {
    let guess = rls.questionInt("Guess a number: ")
    if(guess === randomNumber) {
      console.log("You Win!")
      rls.keyInYN("Want to play again?") ? gameLoop() : quitGame()
    }
    else if (guess < randomNumber) {
      console.log("Too low")
    }
    else {
      console.log ("Too high")
    }
    numberOfGuesses--
  }
}


/***
 * Generates a random number 
 *
 * @returns {number} - a number between 1 and 1000
 */
const generateRandomNumber = () => {
  const randomNumber = Math.round(Math.random()*1000) 
  return randomNumber
}

startGame()

module.exports = {
  startGame,
  quitGame,
  gameLoop,
  generateRandomNumber
}
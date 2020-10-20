'use strict'

// const getFormFields = require('./../../../lib/get-form-fields')
const ui = require('./ui')
const api = require('./api')

const onStartNewGame = function (event) {
  event.preventDefault()

  // const form = event.target
  // get the data from the form
  // const formData = getFormFields()
  console.log('new game is firing')

  api.startNewGame()

    // handle successful response
    .then(ui.startNewGameSuccess)
    // handle failed response
    .catch(ui.startNewGameFailure)
}

// Start the player at X
let currentPlayer = '✕'
// Our box click event handler
const onBoxClick = (event) => {
// use event.target to specify the box being clicked
  const box = $(event.target)
  // Then set the box's text to the current player
  box.text(currentPlayer)
  // get the index of click event and set it to index in cell
  const boxIndex = box.data('cell-index')

  console.log(currentPlayer + ' chose box cell index ' + boxIndex)
  box.css('background', 'transparent').text(currentPlayer)
  // Change the current player
  const data = {
    game: {
      cell: {
        index: boxIndex,
        value: currentPlayer
      },
      over: false
    }
  }

  api.updateGame(data)

    .then(ui.updateGameSuccess)
    .catch(ui.updateGameFailure)
  currentPlayer = currentPlayer === 'O' ? '✕' : 'O'
}

module.exports = {
  onStartNewGame,
  onBoxClick
}

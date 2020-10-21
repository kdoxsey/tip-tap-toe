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
  event.preventDefault()
  // use event.target to specify the box being clicked
  const box = $(event.target)
  // Then set the box's text to the current player
  box.text(currentPlayer)
  // get the index of click event and set it to index in cell
  const boxIndex = box.data('cell-index')
  console.log(currentPlayer + ' chose box cell index ' + boxIndex)
  box.css('background', 'transparent').text(currentPlayer)
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
  console.log(data.game.cell.index)
  // Change the current player
  currentPlayer = currentPlayer === 'O' ? '✕' : 'O'
}
// const onWinCondition = function () {
//   const winIndex = $(event.target)
//
//   if (winIndex[0] === winIndex[1] && winIndex[0] === winIndex[2]) {
//     ui.onWinGameSuccess()
//   } else if (winIndex[3] === winIndex[4] && winIndex[3] === winIndex[5]) {
//     ui.onWinGameSuccess()
//   } else if (winIndex[6] === winIndex[7] && winIndex[6] === winIndex[8]) {
//     ui.onWinGameSuccess()
//   } else if (winIndex[0] === winIndex[3] && winIndex[0] === winIndex[6]) {
//     ui.onWinGameSuccess()
//   } else if (winIndex[1] === winIndex[4] && winIndex[1] === winIndex[7]) {
//     ui.onWinGameSuccess()
//   } else if (winIndex[2] === winIndex[5] && winIndex[2] === winIndex[8]) {
//     ui.onWinGameSuccess()
//   } else if (winIndex[0] === winIndex[4] && winIndex[0] === winIndex[8]) {
//     ui.onWinGameSuccess()
//   } else if (winIndex[2] === winIndex[4] && winIndex[2] === winIndex[6]) {
//     ui.onWinGameSuccess()
//   }
// }

module.exports = {
  onStartNewGame,
  onBoxClick
}

'use strict'

// const getFormFields = require('./../../../lib/get-form-fields')
const ui = require('./ui')
const api = require('./api')
const store = require('./../store')

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
  //
  // Then set the box's text to the current player
  box.text(currentPlayer)
  //
  // get the index of click event and set it to index in cell
  const cellIndex = box.data('cell-index')
  console.log(currentPlayer + ' chose box cell index ' + cellIndex)
  box.css('background', 'transparent').text(currentPlayer)
  const data = {
    game: {
      cell: {
        index: cellIndex,
        value: currentPlayer
      },
      over: true
    }
  }
  api.updateGame(data)
    .then(ui.updateGameSuccess)
    .catch(ui.updateGameFailure)
  console.log(data.game.cell.index)
  console.log(store.game.over)
  // Change the current player
  currentPlayer = currentPlayer === 'O' ? '✕' : 'O'
  box.css('pointer-events', 'none')
  //
  // WINS
  const over = !store.game.over
  // console.log(over)

  if (store.game.cells[0] === 'x' && store.game.cells[1] === 'x' && store.game.cells[2] === 'x') {
    store.game.over = over
  }
}
// const onCheckWin = function (event) {
//   // if (store.game.cells[0] === 'x' && store.game.cells[1] === 'x' && store.game.cells[2] === 'x') {
//   //   return store.game.over === true
//   return store.game.over === true
// }
// console.log(store.game.over)
// onCheckWin()
//   console.log(event.game.over)
// }
// console.log(store.game.over)
//   event.preventDefault()
// }
// X win
//   if (store.game.cells[0] === 'x' && store.game.cells[1] === 'x' && store.game.cells[2] === 'x') {
//     return store.game.over = true

//
const onGetGames = function (event) {
  event.preventDefault()
  console.log('games are being indexed')
  api.indexGames()
    .then(ui.onGetGamesSuccess)
}

module.exports = {
  onStartNewGame,
  onBoxClick,
  onGetGames
}

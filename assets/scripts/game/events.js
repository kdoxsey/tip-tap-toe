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
let moves = 0
const onCheckWin = (event) => {
  if (store.game.cells[0] !== '' && store.game.cells[0] === store.game.cells[1] && store.game.cells[1] === store.game.cells[2]) {
    console.log('winner')
    store.game.over = true
    // const box = event.target
    // box.css('pointer-events', 'none')
    $('#message').text(store.game.cells[0] + ' wins')
  } else if (store.game.cells[0] !== '' && store.game.cells[0] === store.game.cells[3] && store.game.cells[3] === store.game.cells[6]) {
    console.log('winner')
    $('#message').text(store.game.cells[0] + ' wins')
  } else if (store.game.cells[0] !== '' && store.game.cells[0] === store.game.cells[4] && store.game.cells[4] === store.game.cells[8]) {
    console.log('winner')
    $('#message').text(store.game.cells[0] + ' wins')
  } else if (store.game.cells[1] !== '' && store.game.cells[1] === store.game.cells[4] && store.game.cells[4] === store.game.cells[7]) {
    console.log('winner')
    $('#message').text(store.game.cells[1] + ' wins')
  } else if (store.game.cells[2] !== '' && store.game.cells[2] === store.game.cells[5] && store.game.cells[5] === store.game.cells[8]) {
    console.log('winner')
    $('#message').text(store.game.cells[2] + ' wins')
  } else if (store.game.cells[2] !== '' && store.game.cells[2] === store.game.cells[4] && store.game.cells[4] === store.game.cells[6]) {
    console.log('winner')
    $('#message').text(store.game.cells[2] + ' wins')
  } else if (store.game.cells[3] !== '' && store.game.cells[3] === store.game.cells[4] && store.game.cells[4] === store.game.cells[5]) {
    console.log('winner')
    $('#message').text(store.game.cells[3] + ' wins')
  } else if (store.game.cells[6] !== '' && store.game.cells[6] === store.game.cells[7] && store.game.cells[7] === store.game.cells[8]) {
    console.log('winner')
    $('#message').text(store.game.cells[6] + ' wins')
  } else if (moves === 9 && store.game.over === false) {
    console.log('tie')
    store.game.over = true
    console.log('game over: ' + store.game.over)
    $('#message').text('tie game')
    // Need to change data.winner to value of tie
    // if (store.game.cells[0] !== '' && data.moves === 9) {
    // } else return data
  } else {
    console.log('not over yet')
  }
}

// Our box click event handler
const onBoxClick = (event) => {
  event.preventDefault()
  // use event.target to specify the box being clicked
  const box = $(event.target)
  // Then set the box's text to the current player
  box.text(currentPlayer)
  // get the index of click event and set it to index in cell
  const cellIndex = box.data('cell-index')
  box.css('pointer-events', 'none')
  console.log(currentPlayer + ' chose box cell index ' + cellIndex)
  box.css('background', 'transparent').text(currentPlayer)
  const data = {
    game: {
      cell: {
        index: cellIndex,
        value: currentPlayer
      },
      over: false
    }
  }
  api.updateGame(data)

    .then(ui.updateGameSuccess)
    .catch(ui.updateGameFailure)
    .then(onCheckWin)

  moves += 1
  console.log('total moves: ' + moves)

  // console.log(data.game.cell.index)
  // Change the current player
  currentPlayer = currentPlayer === 'O' ? '✕' : 'O'
}

const onGetGames = function (event) {
  event.preventDefault()
  console.log('games are being indexed')
  api.indexGames()
    .then(ui.onGetGamesSuccess)
}

module.exports = {
  onStartNewGame,
  onBoxClick,
  onGetGames,
  onCheckWin
}

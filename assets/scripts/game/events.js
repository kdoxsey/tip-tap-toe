'use strict'

// const getFormFields = require('./../../../lib/get-form-fields')
const ui = require('./ui')
const api = require('./api')
const store = require('./../store')

const onStartNewGame = function (event) {
  event.preventDefault()
  console.log('new game is firing')
  moves = 0
  currentPlayer = 'X'
  api.startNewGame()
    // handle successful response
    .then(ui.startNewGameSuccess)
    // handle failed response
    .catch(ui.startNewGameFailure)
}

let moves = 0
const onCheckWin = (event) => {
  if (store.game.cells[0] !== '' && store.game.cells[0] === store.game.cells[1] && store.game.cells[1] === store.game.cells[2]) {
    console.log('winner')
    store.game.over = true
    console.log('game over: ' + store.game.over)
    moves = 0
    $('#message').text(store.game.cells[0] + ' wins')
  } else if (store.game.cells[0] !== '' && store.game.cells[0] === store.game.cells[3] && store.game.cells[3] === store.game.cells[6]) {
    console.log('winner')
    store.game.over = true
    console.log('game over: ' + store.game.over)
    moves = 0
    $('#message').text(store.game.cells[0] + ' wins')
  } else if (store.game.cells[0] !== '' && store.game.cells[0] === store.game.cells[4] && store.game.cells[4] === store.game.cells[8]) {
    console.log('winner')
    store.game.over = true
    console.log('game over: ' + store.game.over)
    moves = 0
    $('#message').text(store.game.cells[0] + ' wins')
  } else if (store.game.cells[1] !== '' && store.game.cells[1] === store.game.cells[4] && store.game.cells[4] === store.game.cells[7]) {
    console.log('winner')
    store.game.over = true
    console.log('game over: ' + store.game.over)
    moves = 0
    $('#message').text(store.game.cells[1] + ' wins')
  } else if (store.game.cells[2] !== '' && store.game.cells[2] === store.game.cells[5] && store.game.cells[5] === store.game.cells[8]) {
    console.log('winner')
    store.game.over = true
    console.log('game over: ' + store.game.over)
    moves = 0
    $('#message').text(store.game.cells[2] + ' wins')
  } else if (store.game.cells[2] !== '' && store.game.cells[2] === store.game.cells[4] && store.game.cells[4] === store.game.cells[6]) {
    console.log('winner')
    store.game.over = true
    console.log('game over: ' + store.game.over)
    moves = 0
    $('#message').text(store.game.cells[2] + ' wins')
  } else if (store.game.cells[3] !== '' && store.game.cells[3] === store.game.cells[4] && store.game.cells[4] === store.game.cells[5]) {
    console.log('winner')
    store.game.over = true
    console.log('game over: ' + store.game.over)
    moves = 0
    $('#message').text(store.game.cells[3] + ' wins')
  } else if (store.game.cells[6] !== '' && store.game.cells[6] === store.game.cells[7] && store.game.cells[7] === store.game.cells[8]) {
    console.log('winner')
    store.game.over = true
    console.log('game over: ' + store.game.over)
    moves = 0
    $('#message').text(store.game.cells[6] + ' wins')
  } else if (moves === 9 && store.game.over === false) {
    console.log('tie')
    store.game.over = true
    console.log('game over: ' + store.game.over)
    moves = 0
    $('#message').text('tie game')
    store.game.over = true
  } else {
    console.log('not over yet')
  }
}

// Start the player at X
let currentPlayer = 'X'
// Our box click event handler
const onBoxClick = (event) => {
  event.preventDefault()
  const board = store.game.cells
  if (store.game.over === true) {
    board.css('pointer-events', 'none')
  }
  // use event.target to specify the box being clicked
  const box = $(event.target)
  // Then set the box's text to the current player
  box.text(currentPlayer)
  box.css('pointer-events', 'none')
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
      over: false
    }
  }
  api.updateGame(data)
    .then(ui.updateGameSuccess)
    .catch(ui.updateGameFailure)
    .then(onCheckWin)

  moves += 1
  console.log('total moves: ' + moves)
  currentPlayer = currentPlayer === 'X' ? '0' : 'X'
  $('#message').text('It is ' + currentPlayer + "'s turn.")
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

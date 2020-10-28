'use strict'
const store = require('./../store')

const startNewGameSuccess = function (response) {
  $('#message').text('Frst player to to make a string of three wins. X is up first.')
  console.log(response)
  store.game = response.game
  $('#game-board').show()
  console.log('new game started')
  // $('#music').show()
  // const emptyCells = store.game.cells === ['', '', '', '', '', '', '', '', '']
  // store.game.cells = emptyCells
}

const startNewGameFailure = function () {
  $('#message').text('Unable to start new game.')
}

let turn = false
const updateGameSuccess = function (response) {
  const player = turn ? 'X' : '0'
  store.game = response.game
  $('#message').text('It is ' + player + "'s turn.")
  return (turn = !turn)
}

// const win = function (){
// if (response.game.cells[0] === 'x' && response.games.cells[1] === 'x' && response.games.cells[2] === 'x') {
//   $('#message').text('It is ' + player + ' turn.')
// }

const updateGameFailure = function () {
  $('#message').text('Unable to click box.')
}

const onGetGamesSuccess = function (response) {
  console.log(response.games.length)
  $('#total-games').text(response.games.length)
}

const onGetGamesFailure = function (response) {
  console.log(response.games.length)
  $('#total-games').text('Unable to load total games.')
}

// const xWins = function (response) {
//   console.log(store.game.over)
//   $('#message').text('X wins')
// }
//
// const oWins = function (response) {
//   $('#message').text('0 wins')
// }

module.exports = {
  startNewGameSuccess,
  startNewGameFailure,
  updateGameSuccess,
  updateGameFailure,
  onGetGamesSuccess,
  onGetGamesFailure
}

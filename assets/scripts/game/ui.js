'use strict'
const store = require('./../store')

const startNewGameSuccess = function (response) {
  $('#message').text('Frst player to to make a string of three wins. X is up first.')
  console.log(response)
  store.game = response.game
  $('#game-board').show()
  console.log('new game started')
}

const startNewGameFailure = function () {
  $('#message').text('Unable to start new game.')
}

let turn = false
const updateGameSuccess = function (response) {
  const player = turn ? 'X' : '0'
  console.log(response.game.cells)
  $('#message').text('It is ' + player + ' turn.')
  return (turn = !turn)
}

// const win = function (){
// if (response.game.cells[0] === 'x' && response.games.cells[1] === 'x' && response.games.cells[2] === 'x') {
//   $('#message').text('It is ' + player + ' turn.')
// }

const updateGameFailure = function () {
  $('#message').text('Unable to click box.')
}

module.exports = {
  startNewGameSuccess,
  startNewGameFailure,
  updateGameSuccess,
  updateGameFailure
}

'use strict'
const store = require('./../store')

const startNewGameSuccess = function (response) {
  $('#message').text('Frst player to to make a string of three wins.')
  console.log(response)
  store.game = response.game
  $('#game-board').show()
  console.log('new game started')
}

const startNewGameFailure = function () {
  $('#message').text('Unable to start new game.')
}

let turn = false
const player = turn ? 'x' : '0'
const updateGameSuccess = function (response) {
  console.log(response.game.cells)
  $('#message').text('It is ' + player + ' turn.')
  return (turn = !turn)
}

const updateGameFailure = function () {
  $('#message').text('Unable to click box.')
}

module.exports = {
  startNewGameSuccess,
  startNewGameFailure,
  updateGameSuccess,
  updateGameFailure
}

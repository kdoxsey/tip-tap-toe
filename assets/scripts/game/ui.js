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

const updateGameSuccess = function (response) {
  $('#message').text('You clicked a box.')
  store.game.cells = response.game.cells
  console.log(response.game.cells)
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

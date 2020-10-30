'use strict'
const store = require('./../store')

const startNewGameSuccess = function (response) {
  $('#message').text('Frst player to to make a string of three wins. X is up first.')
  console.log(response)
  store.game = response.game
  $('#game-board').show()
  console.log('new game started')
  $('.box').text('')
  $('.box').css('pointer-events', 'auto')
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

const updateGameFailure = function () {
  $('#message').text('Unable to click box.')
}

const onGetGamesSuccess = function (response) {
  console.log(response.games.length)
  $('#total-games').text(response.games.length)
}

const onGetGamesFailure = function (response) {
  $('#total-games').text('Unable to load total games.')
}

module.exports = {
  startNewGameSuccess,
  startNewGameFailure,
  updateGameSuccess,
  updateGameFailure,
  onGetGamesSuccess,
  onGetGamesFailure
}

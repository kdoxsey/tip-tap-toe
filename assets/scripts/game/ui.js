'use strict'
const store = require('./../store')

const startNewGameSuccess = function (response) {
  $('.box').css('pointer-events', 'auto')
  $('#message').text('First player to to make a string of three wins. X is up first.')
  store.game = response.game
  $('#game-board').show()
  $('.box').text('')
}

const startNewGameFailure = function () {
  $('#message').text('Unable to start new game.')
}

let turn = false
const updateGameSuccess = function (response) {
  // const player = turn ? 'X' : '0'
  store.game = response.game
  // console.log(store.game)

  return (turn = !turn)
}

const updateGameFailure = function () {
  $('#message').text('Unable to click box.')
}

const onGetGamesSuccess = function (response) {
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

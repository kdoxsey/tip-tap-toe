'use strict'
const store = require('./../store')

const startNewGameSuccess = function (response) {
  $('#message').text('Frst player to to make a string of three wins.')
  store.user = response.user
  $('#game-board').show()
  console.log('new game started')
}

const startNewGameFailure = function () {
  $('#message').text('Unable to start new game.')
}

module.exports = {
  startNewGameSuccess,
  startNewGameFailure
}

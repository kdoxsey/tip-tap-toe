'use strict'

const onStartNewGameSuccess = function () {
  $('#message').text('Frst player to to make a string of three wins.')
  $('#game-board').show()
  console.log('new game started')
}

const onStartNewGameFailure = function () {
  $('#message').text('Unable to start new game.')
}

module.exports = {
  onStartNewGameSuccess,
  onStartNewGameFailure
}

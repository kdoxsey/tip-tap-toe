'use strict'
// const store = require('./../store')

const onStartNewGameSuccess = function () {
  $('#message').text('Frst player to to make a string of three wins.')
  $('#game-board').show()
  // store.user = response.user

  console.log('new game started')
}

const onStartNewGameFailure = function () {
  $('#message').text('Unable to start new game.')
}

const onShowGameSuccess = function () {
  $('#message').text('Here is your game')
  console.log('show game')
}

const onShowGameFailure = function () {
  $('#message').text('Unable to show your game')
}

const onShowGamesSuccess = function () {
  $('#message').text('Here are your games')
  console.log('show games')
}

const onShowGamesFailure = function () {
  $('#message').text('Unable to show your games')
}

module.export = {
  onStartNewGameSuccess,
  onStartNewGameFailure,
  onShowGameSuccess,
  onShowGameFailure,
  onShowGamesSuccess,
  onShowGamesFailure

}

'use strict'
const store = require('./../store')

const onStartNewGameSuccess = function (param) {
  $('#message').text('Here is your new game')
  // store.game = game._id
  $('#game-board').show()
  store.game = param.game._id
  console.log(store.game)
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

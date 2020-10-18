'use strict'
const getFormFields = require('./../../../lib/get-form-fields')
const ui = require('./game-ui')
const api = require('./game-api')

const onStartNewGame = function (event) {
  event.preventDefault()
  api.startNewGame()
    .then(ui.onStartNewGameSuccess)
    .catch(ui.onStartNewGameFailure)
}

const onUpdateGame = function (event) {
  event.preventDefault()
  api.updateGame()
    .then(ui.onUpdateGameSuccess)
    .catch(ui.onUpdateGameFailure)
}

const onShowGame = function (event) {
  event.preventDefault()
  // get form from event
  const form = event.target
  // get the data from the form
  const data = getFormFields(form)

  // send data to API
  api.showGame(data)
    // handle success response
    .then(ui.showGameSuccess)
    // handle failure response
    .catch(ui.showGameFailure)
}

const onShowGames = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.showGames(data)
    .then(ui.showGamesSuccess)
    .catch(ui.showGamesFailure)
}

module.export = {
  onStartNewGame,
  onUpdateGame,
  onShowGame,
  onShowGames
}

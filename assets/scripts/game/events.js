'use strict'

const getFormFields = require('./../../../lib/get-form-fields')
const ui = require('./ui')
const api = require('./api')

const startNewGame = function (event) {
  event.preventDefault()

  const form = event.target
  // get the data from the form
  const formData = getFormFields(form)
  console.log('formData is', formData)

  api.startNewGame(formData)

    // handle successful response
    .then(ui.startNewGameSuccess)
    // handle failed response
    .catch(ui.startNewGameFailure)
}

const addHandlers = function () {
  $('#start-new-game-button').on('submit', startNewGame)
}

module.exports = {
  addHandlers
}

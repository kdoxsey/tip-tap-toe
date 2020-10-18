'use strict'

const getFormFields = require('./../../../lib/get-form-fields')
const ui = require('./ui')
const api = require('./api')

const onStartNewGame = function (event) {
  event.preventDefault()
  // get the form from the event
  const form = event.target
  // get the data from the form
  const data = getFormFields(form)
  // send the data to the api
  api.onStartNewGame(data)
    // handle successful response
    .then(ui.onStartNewGameSuccess)
    // handle failed response
    .catch(ui.onStartNewGameFailure)
}

module.exports = {
  onStartNewGame
}

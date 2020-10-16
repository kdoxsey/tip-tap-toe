'use strict'
const getFormFields = require('./../../../lib/get-form-fields')
const ui = require('./ui')
const api = require('./api')
const onSignUp = function (event) {
  event.preventDefault()
  // get the form from the event
  const form = event.target
  // get the data from the form
  const data = getFormFields(form)
  // send the data to the api
  api.signUp(data)
    // handle successful response
    .then(ui.signUpSuccess)
    // handle failed response
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signUpFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}
module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword
}

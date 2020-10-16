'use strict'
const getFormFields = require('./../../../lib/get-form-fields')
const ui = require('./ui')
const api = require('./api')

const onSignUp = function (event) {
  event.preventDefault()
  // get the form from the event
  const form = event.target
  console.log(event)
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
  // get form from event
  const form = event.target
  // get the data from the form
  const data = getFormFields(form)

  // send data to API
  api.signIn(data)
    // handle success response
    .then(ui.signInSuccess)
    // handle failure response
    .catch(ui.signInFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.changePassword(data)
    .then(ui.onChangePasswordSuccess)
    .catch(ui.onChangePasswordFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
  api.signOut()
    .then(ui.onSignOutSuccess)
    .catch(ui.onSignOutFailure)
}
module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut
}

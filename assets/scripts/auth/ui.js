'use strict'
const store = require('./../store')

const signUpSuccess = function (response) {
  $('#message').text('Thanks for signing up ' + response.user.email)
  $('#sign-up-form').trigger('reset')
  $('#sign-in-form').trigger('reset')
}

const signUpFailure = function () {
  $('#message').text('Sign up failed, try again')
}

const signInSuccess = function (response) {
  $('#message').text('You are signed in')
  // save user in the api response to our store object
  store.user = response.user
  $('#change-password-form').show()
  $('#sign-out-form').show()
  $('#sign-up-form').hide()
  $('#sign-in-form').hide()
  $('#start-new-game-button').show()
  $('#get-games').show()
  $('#total-games').show()
  $('#sign-in-form').trigger('reset')
}

const signInFailure = function () {
  $('#message').text('Sign in failed, try again')
}

const onChangePasswordSuccess = function (response) {
  $('#message').text('Password changed')
  $('#change-password-form').trigger('reset')
}

const onChangePasswordFailure = function () {
  $('#message').text('Unable to change password')
}

const onSignOutSuccess = function () {
  $('message').text('See you next time!')
  store.user = null
  $('#change-password-form').hide()
  $('#sign-out-form').hide()
  $('#sign-up-form').show()
  $('#sign-in-form').show()
  $('#game-board').hide()
  $('#message').hide()
  $('#get-games').hide()
}

const onSignOutFailure = function () {
  $('#message').text('Not so fast.')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onSignOutSuccess,
  onSignOutFailure
}

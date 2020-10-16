'use strict'
const store = require('./../store')

const signUpSuccess = function (response) {
  $('#message').text('Thanks for signing up ' + response.user.email)
}

const signUpFailure = function () {
  $('#message').text('Sign up failed, try again')
}

const signInSuccess = function (response) {
  $('#message').text('You are signed in, ' + response.user.token)
  // save user in the api response to our store object
  store.user = response.user
  $('#change-password-form').show()
  $('#sign-out-form').show()
  $('sign-up-form').hide()
  $('#sign-in-form').hide()
}

const signInFailure = function () {
  $('#message').text('Sign in failed, try again')
}

const onChangePasswordSuccess = function (response) {
  $('#message').text('Password changed')
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
}

const onSignOutFailure = function () {
  $('message').text('Not so fast.')
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

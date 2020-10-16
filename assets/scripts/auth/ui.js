'use strict'
const store = require('./../store')

const signUpSuccess = function (response) {
  $('#message').text('Thanks for signing up ' + response.user.email)
}

const signUpFailure = function (error) {
  $('#message').text('Sign up failed, try again')
}

const signInSuccess = function (response) {
  $("#message").text('You are signed in, ' + response.user.token)
  // save user in the api response to our store object
  store.user = response.user
}

const signInFailure = function (error) {
  $('#message').text('Try again')
}

const changePasswordSuccess = function (response) {
  $('#message').text('Password changed')
}

const changePasswordFailure = function (error) {
  $('#message').text('Unable to change password')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure
}

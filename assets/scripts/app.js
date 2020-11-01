'use strict'
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
// use require without a reference to ensure a file is bundled
// require('./example')
const authevents = require('./auth/events')
const gameevents = require('./game/events')
$(() => {
  // your JS code goes here
  $('#message').text("welcome to tip-tap-toe, the world's best game of tic tac toe. sign up to start playing")
  $('#sign-up-form').on('submit', authevents.onSignUp)
  $('#sign-in-form').on('submit', authevents.onSignIn)
  $('#total-games').hide()
  $('#change-password-form').on('submit', authevents.onChangePassword)
  $('#sign-out-form').on('submit', authevents.onSignOut)
  $('#change-password-form').hide()
  $('#sign-out-form').hide()
  $('#start-new-game-button').on('submit', gameevents.onStartNewGame)
  $('#start-new-game-button').hide()
  $('#game-board').hide()
  $('#get-games').hide()
  $('#get-games').on('submit', gameevents.onGetGames)
  // Select all of the boxes, $('.box'), add an event listener so that `on`
  // every 'click' the `onBoxClick` event handler is called.
  $('.box').on('click', gameevents.onBoxClick)
})

'use strict'
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
// use require without a reference to ensure a file is bundled
// require('./example')
const authevents = require('./auth/events')
const gameevents = require('./game/events')
$(() => {
  // your JS code goes here
  $('#sign-up-form').on('submit', authevents.onSignUp)
  $('#sign-in-form').on('submit', authevents.onSignIn)
  $('#change-password-form').on('submit', authevents.onChangePassword)
  $('#sign-out-form').on('submit', authevents.onSignOut)
  $('#change-password-form').hide()
  $('#sign-out-form').hide()
  $('#start-new-game-button').on('submit', gameevents.onStartNewGame)
  $('#start-new-game-button').hide()
  $('#game-board').hide()
  $('#game-board').on('submit', gameevents.onStartNewGame)
  // Start the player at X
  let currentPlayer = '✕'

  // Our box click event handler
  const onBoxClick = (event) => {
    const box = $(event.target)
    console.log('click')

    // Then set the text to the current player
    box.text(currentPlayer)
    box.css('background', 'transparent').text(currentPlayer)

    // Change the current player
    currentPlayer = currentPlayer === 'O' ? '✕' : 'O'
  }

  // Select all of the boxes, $('.box'), add an event listener so that `on`
  // every 'click' the `onBoxClick` event handler is called.
  $('.box').on('click', onBoxClick)
})

'use strict'
const config = require('./../config')
const store = require('./../store')

const startNewGame = function (data) {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    data: data,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const updateGame = function (data) {
  return $.ajax({
    url: config.apiURL + '/games',
    method: 'PATCH',
    data: data,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

module.exports = {
  startNewGame,
  updateGame
}

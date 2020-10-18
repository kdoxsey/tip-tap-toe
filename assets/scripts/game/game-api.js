'use strict'
const config = require('./../config')
const store = require('./../store')

const startNewGame = function (data) {
  console.log('data: ', data)
  return $.ajax({
    url: config.apiUrl + '/games',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    method: 'POST',
    data: data
  })
}

const updateGame = function (data) {
  return $.ajax({
    url: config.apiURL + '/games/:id',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    method: 'PATCH',
    data: data
  })
}

const showGame = function (data) {
  return $.ajax({
    url: config.apiURL + '/games/:id',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    method: 'GET',
    data: data
  })
}

const showGames = function (data) {
  return $.ajax({
    url: config.apiURL + '/games',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    method: 'GET',
    data: data
  })
}

module.export = {
  startNewGame,
  updateGame,
  showGame,
  showGames
}

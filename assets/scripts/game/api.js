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
    url: config.apiUrl + '/games/' + store.game._id,
    method: 'PATCH',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: data
  })
}

// const indexGames = function (data) {
//   return $.ajax({
//     url: config.apiUrl + '/games/' + data.index,
//     method: 'GET',
//     headers: {
//       Authorization: 'Bearer ' + data.user.token
//     },
//     data: data
//   })
// }

module.exports = {
  startNewGame,
  updateGame
}

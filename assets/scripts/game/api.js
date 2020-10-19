'use strict'
const config = require('./../config')
const store = require('./../store')

const startNewGame = function (formData) {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    data: formData,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

// const showGame = function (data) {
//   $.ajax({
//     url: config.apiUrl + '/games',
//     method: 'GET',
//     data: data,
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     }
//   })
// }

module.exports = {
  startNewGame
  // showGame
}

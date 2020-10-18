'use strict'
const config = require('./../config')
const store = require('./../store')

const onStartNewGame = function (data) {
  return $.ajax({
    url: config.apiUrl + '/games',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    method: 'POST',
    data: data
  })
}

module.export = {
  onStartNewGame
}

'use strict'

const config = require('./../config')
// const store = require('./../store')

const startNewGame = function (data) {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    data: data
  })
}

module.exports = {
  startNewGame
}

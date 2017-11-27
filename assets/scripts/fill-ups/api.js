'use strict'

const store = require('../store')
const config = require('../config')

const getFillUps = function () {
  return $.ajax({
    url: config.apiOrigin + '/fill_ups',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}
const addFillUp = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/fill_ups',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}
const deleteFillUp = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/fill_ups/' + data,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}
// const updateFillUp = function (data) {
//   return $.ajax({
//     url: config.apiOrigin + '/fill_ups/' + data.fill-up.id,
//     method: 'PATCH',
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     },
//     data: data
//   })
// }

module.exports = {
  getFillUps,
  addFillUp,
  deleteFillUp
  // updateFillUp
}

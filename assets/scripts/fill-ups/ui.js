'use strict'

const showFillUpsTemplate = require('../templates/fill-up-listing.handlebars')
// const store = require('../store')

const clearFillUps = () => {
  $('.content').empty()
}
const sortRevChron = function (data) {
  data.fill_ups.sort(function (a, b) {
    return Date.parse(b.date) - Date.parse(a.date)
  })
}

const calculateMPG = function (data) {
  data.fill_ups.forEach(function (obj, index, arr) {
    if (index === arr.length - 1) {
      obj.mpg = 'n/a'
    } else {
      const miles = obj.mileage - data.fill_ups[index + 1].mileage
      obj.mpg = (miles / obj.gallons).toFixed(1)
    }
  })
}

const calculateTotalSpent = function (data) {
  data.fill_ups.reduce(function (total, val, index) {
    return total + val.price
  }, 0)
}

const getFillUpsSuccess = (data) => {
  clearFillUps()
  sortRevChron(data)
  calculateMPG(data)
  calculateTotalSpent(data)
  const showFillUpsHtml = showFillUpsTemplate({ fill_ups: data.fill_ups })
  $('.content').append(showFillUpsHtml).show()
  if (data.fill_ups.length === 0) {
    $('.content').hide()
    $('#message').text('Click the Add Fill-Up button to get started')
  } else {
    $('#message').text('')
    $('.content').show()
  }
}

const displayAddForm = () => {
  $('#add-button').hide()
  $('.update-form').hide()
  $('.content').hide()
  $('.add-fill-up').show()
}

const addFillUpSuccess = (data) => {
  // clearFillUps()
  $('#add-fill-up')[0].reset()
  $('.add-fill-up').hide()
  $('#add-button').show()
}

const deleteFillUpSuccess = (index) => {
  clearFillUps()
  $('.add-fill-up').hide()
  $('#add-button').show()
}

const triggerEditForm = (event) => {
  $('#add-button').hide()
  $('.add-fill-up').hide()
  $('.content').hide()
  $('.update-form').show()
  const tr = $(event.target).parent().parent()

  const date = tr.find('td.fill_up-date').text()
  const dateField = $('#update').find('input[name="fill_up[date]"]')
  dateField.attr('value', date)

  const mileage = tr.find('td.fill_up-mileage').text()
  const mileageField = $('#update').find('input[name="fill_up[mileage]"]')
  mileageField.attr('value', mileage)

  const gallons = tr.find('td.fill_up-gallons').text()
  const gallonsField = $('#update').find('input[name="fill_up[gallons]"]')
  gallonsField.attr('value', gallons)

  const price = tr.find('td.fill_up-price').text()
  const priceField = $('#update').find('input[name="fill_up[price]"]')
  priceField.attr('value', price)
  //
  const id = $(event.target).attr('data-id')
  const idField = $('#update').find('input[name="fill_up[id]"]')
  idField.attr('value', id)
}

const updateFillUpSuccess = () => {
  // clearFillUps()
  $('#update')[0].reset()
  $('.update-form').hide()

  // $('.add-fill-up').hide()
  $('#add-button').show()

  // $('#getFillUpsButton').click()

  $('#message').text('Your changes have been saved')
}

const failure = () => {
  $('#message').text('Something went wrong, please try again')
}

module.exports = {
  getFillUpsSuccess,
  clearFillUps,
  displayAddForm,
  addFillUpSuccess,
  deleteFillUpSuccess,
  triggerEditForm,
  // editFillUpSuccess,
  updateFillUpSuccess,
  failure
}

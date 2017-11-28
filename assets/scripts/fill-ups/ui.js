'use strict'

const showFillUpsTemplate = require('../templates/fill-up-listing.handlebars')
// const store = require('../store')

const getFillUpsSuccess = (data) => {
  clearFillUps()
  const showFillUpsHtml = showFillUpsTemplate({ fill_ups: data.fill_ups })
  $('.content').append(showFillUpsHtml).show()

  ///////////////////////////////////////

  data.fill_ups.forEach(function (obj) {
    obj.mpg = obj.mileage / obj.gallons
    console.log('obj.mpg is', obj.mpg)
    console.log('data.fill_ups is', data.fill_ups)
  })
  ///////////////////////////////////////
  if (data.fill_ups.length === 0) {
    $('.content').hide()
    $('#message').text('Click the Add Fill-Up button to get started')
  } else {
    $('#message').text('')
    // $('.table-name').show()
    $('.content').show()
  }
}

const clearFillUps = () => {
  $('.content').empty()
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

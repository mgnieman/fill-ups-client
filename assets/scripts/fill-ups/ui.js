'use strict'

const showFillUpsTemplate = require('../templates/fill-up-listing.handlebars')
// const store = require('../store')

const getFillUpsSuccess = (data) => {
  // clearFillUps()
  const showFillUpsHtml = showFillUpsTemplate({ fill_ups: data.fill_ups })
  $('.content').append(showFillUpsHtml).show()
  // ????????????
  // $('.get').hide()
  // $('.display-add-form').show()
  //
  if (data.fill_ups.length === 0) {
    $('#message').text('Click the Add Fill-Up button to get started!')
  } else {
    $('#message').text('')
    $('.table-name').show()
  }
}

const clearFillUps = () => {
  $('.content').empty()
}

const displayAddForm = () => {
  $('.add-fill-up-form').show()
}

// const addFillUpSuccess = (data) => {
//   store.fill-upId = data.fill-up.id
//   $('#add-fill-up')[0].reset()
//   $('.add-new-fill-up').hide()
//   $('#message').text('Your fill-up has been added. Select Get FillUps to view all your fill-ups')
//   $('.get').show()
// }
//
// const deleteFillUpSuccess = (index) => {
//   clearFillUps()
//   $('#getFillUpsButton').click()
//   $('#message').text('Your fill-up has been deleted')
// }
//
// const editFillUpSuccess = (event) => {
//   $('.update').show()
//   const tr = $(event.target).parent().parent()
//
//   const date = tr.find('td.fill-up-date').text()
//   const dateField = $('#update-fill-up').find('input[name="fill-up[date]"]')
//   dateField.attr('value', date)
//
//   const distance = tr.find('td.fill-up-distance').text()
//   const distanceField = $('#update-fill-up').find('input[name="fill-up[distance]"]')
//   distanceField.attr('value', distance)
//
//   const duration = tr.find('td.fill-up-duration').text()
//   const durationField = $('#update-fill-up').find('input[name="fill-up[duration]"]')
//   durationField.attr('value', duration)
//
//   const id = $(event.target).attr('data-id')
//   const idField = $('#update-fill-up').find('input[name="fill-up[id]"]')
//   idField.attr('value', id)
// }
//
// const updateFillUpSuccess = () => {
//   clearFillUps()
//   $('#getFillUpsButton').click()
//   $('#message').text('Your changes have been saved')
//   $('#update-fill-up')[0].reset()
//   $('.update').hide()
// }

const failure = () => {
  $('#message').text('Something went wrong, please try again')
}

module.exports = {
  getFillUpsSuccess,
  clearFillUps,
  displayAddForm,
  // deleteFillUpSuccess,
  // editFillUpSuccess,
  // updateFillUpSuccess,
  failure
}

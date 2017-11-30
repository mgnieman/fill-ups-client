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

const calculateAllTimeTotal = function (data) {
  data.fill_ups.reduce(function (total, val) {
    const sum = total + val.price
    $('#all-time').text('Total spent all-time:  $' + sum.toFixed(2))
    return sum
  }, 0)
}

const calculateYTDTotal = function (data) {
  let sum = 0
  data.fill_ups.forEach(function (obj, index) {
    const date = data.fill_ups[index].date
    const year = date.substr(0, 4)
    if (year === '2017') {
      sum += +data.fill_ups[index].price
      $('#ytd').text('Total spent this year:  $' + sum.toFixed(2))
    }
  })
  return sum.toFixed(2)
}

const calculateMonthlyAvg = function (data) {
  data.fill_ups.forEach(function (obj, index) {
    const mostRecentDate = data.fill_ups[0].date
    const mostRecentMonth = mostRecentDate.substr(5, 2)
    const avg = calculateYTDTotal(data) / (+mostRecentMonth)
    $('#monthly-average').text('Average amount spent / month this year:  $' + avg.toFixed(2))
  })
  // count the number of months since the first entry;
  // i.e. numMonths = currentMonth + (12 - firstMonthFirstYear) + 12(currentYear - firstYear - 1)
  // allTimeMonthlyAvg = allTimeTotal / numMonths
}

const getFillUpsSuccess = (data) => {
  clearFillUps()
  sortRevChron(data)
  calculateMPG(data)
  calculateAllTimeTotal(data)
  // calculateYTDTotal(data)
  calculateMonthlyAvg(data)
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
  $('.total-spent').hide()
  $('.add-fill-up').show()
}

const addFillUpSuccess = (data) => {
  // clearFillUps()
  $('#add-fill-up')[0].reset()
  $('.add-fill-up').hide()
  $('#add-button').show()
  $('.total-spent').show()
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
  $('.total-spent').hide()
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
  $('#update')[0].reset()
  $('.update-form').hide()
  $('#add-button').show()
  $('.total-spent').show()
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
  updateFillUpSuccess,
  failure
}

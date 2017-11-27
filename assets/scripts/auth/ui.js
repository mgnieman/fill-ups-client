'use strict'

const store = require('../store')

const fillUpsEvents = require('../fill-ups/events.js')
const fillUpsUi = require('../fill-ups/ui.js')

const signUpFailure = function () {
  $('#signup-message').text('Error on sign up. Please try again.')
}

const signInSuccess = function (response) {
  store.user = response.user
  $('.hide-when-logged-in').hide()
  $('#signupModal').modal('hide')
  $('#loginModal').modal('hide')
  // $('#sign-up')[0].reset()
  // $('#login')[0].reset()
  $('.show-when-logged-in').show()
  $('#message').text('You are now signed in.')
  fillUpsEvents.getFillUps()
}

const signInFailure = function () {
  $('#login-message').text('Error on sign in. Please try again.')
}

const signOutSuccess = function () {
  store.user = null
  fillUpsUi.clearFillUps()
  $('.show-when-logged-in').hide()
  $('.content').hide()
  $('.hide-when-logged-in').show()
  $('#message').text('You have successfully signed out.')
}

const signOutFailure = function () {
  $('#message').text('Error on sign out.')
}

const changePasswordSuccess = function () {
  $('#passwordModal').modal('hide')
  // $('#change-password')[0].reset()
  $('#message').text('Password changed successfully.')
}

const changePasswordFailure = function () {
  $('#password-message').text('There was an error. Please try again.')
}

module.exports = {
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutFailure,
  signOutSuccess,
  changePasswordSuccess,
  changePasswordFailure
}

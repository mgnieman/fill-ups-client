'use strict'

const store = require('../store')

const fillUpsEvents = require('../fill-ups/events.js')

const signUpFailure = function () {
  $('#signup-message').text('Error on sign up. Please try again.')
}

const signInSuccess = function (response) {
  $('#message').text('You are now signed in.')
  store.user = response.user
  $('#loginModal').modal('hide')
  $('#login')[0].reset()
  $('.show-when-logged-in').show()
  $('.hide-when-logged-in').hide()
  $('#signupModal').modal('hide')
  $('#sign-up')[0].reset()
  //
  fillUpsEvents.getFillUps()
  //
}

const signInFailure = function () {
  $('#login-message').text('Error on sign in. Please try again.')
}

const signOutSuccess = function () {
  $('#message').text('You have successfully signed out.')
  store.user = null
  $('.hide-when-logged-in').show()
  $('.show-when-logged-in').hide()
  $('.cart-content').empty()
}

const signOutFailure = function () {
  $('#message').text('Error on sign out.')
}

const changePasswordSuccess = function () {
  $('#message').text('Password changed successfully.')
  $('#passwordModal').modal('hide')
  $('#change-password')[0].reset()
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

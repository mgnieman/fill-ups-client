'use strict'

const getFormFields = require('../../../lib/get-form-fields')

const api = require('./api')
const ui = require('./ui')

const onSignUp = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signUp(data)
    .then(api.signUpSignIn)
    .then(ui.signInSuccess)
    .catch(ui.signUpFailure)
}
const onSignIn = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onSignOut = (event) => {
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const onChangePassword = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const clearSignUpForm = () => {
  $('#sign-up')[0].reset()
}

const clearSignUpMessage = () => {
  $('#signup-message').text('')
}

const clearLoginForm = () => {
  $('#login')[0].reset()
}

const clearLoginMessage = () => {
  $('#login-message').text('')
}

const clearPassForm = () => {
  $('#change-password')[0].reset()
}

const clearPassMessage = () => {
  $('#password-message').text('')
}

const addHandlers = function () {
  $('#sign-up').on('submit', onSignUp)
  $('#login').on('submit', onSignIn)
  $('#change-password').on('submit', onChangePassword)
  $('#sign-out').on('click', onSignOut)
  $('#signupModal').on('hidden.bs.modal', clearSignUpForm)
  $('#signupModal').on('show.bs.modal', clearSignUpMessage)
  $('#loginModal').on('hidden.bs.modal', clearLoginForm)
  $('#loginModal').on('show.bs.modal', clearLoginMessage)
  $('#passwordModal').on('hidden.bs.modal', clearPassForm)
  $('#passwordModal').on('show.bs.modal', clearPassMessage)
}

module.exports = {
  addHandlers
}

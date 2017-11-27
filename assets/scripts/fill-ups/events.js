'use strict'

const api = require('./api.js')
const ui = require('./ui.js')
const getFormFields = require('../../../lib/get-form-fields.js')

const getFillUps = () => {
  api.getFillUps()
    .then((data) => {
      ui.getFillUpsSuccess(data)
      // addRowHandlers()
    })
    .catch(ui.failure)
}

const onAddButton = (event) => {
  event.preventDefault()
  ui.displayAddForm()
}
const onAddFillUp = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.addFillUp(data)
    .then(ui.addFillUpSuccess)
    .then(getFillUps)
    .catch(ui.failure)
}
// const onDeleteFillUp = (event) => {
//   event.preventDefault()
//   const index = $(event.target).attr('data-id')
//   api.deleteFillUp(index)
//     .then(() => {
//       ui.deleteFillUpSuccess(index)
//     })
//     .catch(ui.failure)
// }
// const onEditFillUp = () => {
//   ui.editFillUpSuccess(event)
//   const index = $(event.target).attr('data-id')
//   addUpdateHandlers()
//   return index
// }
// const onUpdateFillUp = (event) => {
//   event.preventDefault()
//   const data = getFormFields(event.target)
//   api.updateFillUp(data)
//     .then(ui.updateFillUpSuccess)
//     .catch(ui.failure)
// }
const clearLoginForm = () => {
  $('#login')[0].reset()
}
const clearSignUpForm = () => {
  $('#sign-up')[0].reset()
}
const clearChangePassForm = () => {
  $('#change-password')[0].reset()
}
const addHandlers = () => {
  // $('#addButton').on('click', onAddButton)
  $('#add-button').on('click', onAddButton)
  $('#add-fill-up').on('submit', onAddFillUp)
  $('#loginModal').on('hidden.bs.modal', clearLoginForm)
  $('#signupModal').on('hidden.bs.modal', clearSignUpForm)
  $('#passwordModal').on('hidden.bs.modal', clearChangePassForm)

  // PROBABLY DON'T NEED THIS
  // $('#getFillUpsButton').on('click', getFillUps)
  //
}
// const addRowHandlers = () => {
//   $('.deleteFillUpButton').on('click', onDeleteFillUp)
//   $('.editFillUpButton').on('click', onEditFillUp)
// }
// const addUpdateHandlers = () => {
//   $('#update-fill-up').on('submit', onUpdateFillUp)
// }

module.exports = {
  addHandlers,
  getFillUps
}

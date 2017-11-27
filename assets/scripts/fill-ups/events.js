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
  // ui.displayAddForm()
  // console.log('onAddButton works')
}
const onAddFillUp = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.addFillUp(data)
    .then(ui.addFillUpSuccess)
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
const addHandlers = () => {
  // $('#addButton').on('click', onAddButton)
  $('#add-button').on('click', console.log('add-button works'))
  $('#add-fill-up').on('submit', onAddFillUp)

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

import { notes } from "./../index.js"
import { renderNotes } from "./render.js"

export let tmpIndex
const regExpForDates = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/

export const setValueToTable = e => {

  const id = e.target.id
  const btn = document.getElementById(`${id}`)

  if(!id){
    return
  }
  if(!btn) {
    return
  }

  const inputEditName = document.getElementById('inputEditName')
  const inputEditCategory = document.getElementById('inputEditCategory')
  const contentEditTextarea = document.getElementById('contentEditTextarea')
  const matchId = +id.match(/^.{3}(.*)/)[1]
  let indexOfElement = notes.map(element => element.id).indexOf(matchId)

  inputEditName.value = notes[indexOfElement].name
  inputEditCategory.value = notes[indexOfElement].category
  contentEditTextarea.value = notes[indexOfElement].content
  tmpIndex = indexOfElement

}

export const editNote = indexOfElement => {

  const inputEditName = document.getElementById('inputEditName').value
  const inputEditCategory = document.getElementById('inputEditCategory').value
  const contentEditTextarea = document.getElementById('contentEditTextarea').value
  const tmpDates = contentEditTextarea.replace(/[^\d^\/ ]/g, "")
  const dates = tmpDates.split(' ').filter(elem => regExpForDates.test(elem))

  try {
    
    if(!inputEditName){
      alert(`Please enter note name!`)
    }
    if(!contentEditTextarea){
      alert(`Please enter note content!`)
    }
    else{
      
      notes[indexOfElement].name = inputEditName
      notes[indexOfElement].category = inputEditCategory
      notes[indexOfElement].content = contentEditTextarea
      notes[indexOfElement].dates = dates
      renderNotes(notes)
    }
  } catch (error) {
    throw error
  }
}

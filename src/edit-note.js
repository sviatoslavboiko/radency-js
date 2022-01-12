import { notes } from "./../index.js";
import { renderNotes } from "./render.js"

export const editNote = indexOfElement => {

  const inputEditName = document.getElementById('inputEditName').value
  const inputEditCategory = document.getElementById('inputEditCategory').value
  const contentEditTextarea = document.getElementById('contentEditTextarea').value

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
      renderNotes(notes)
    }
  } catch (error) {
    throw error;
  }
}

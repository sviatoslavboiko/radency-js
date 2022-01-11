import { notes } from "./data-base.js";
import { renderNotes } from "./render.js"
const options = { month: 'long', day: 'numeric', year: 'numeric'};

export const createNote = async () => {
  let inputName = await document.querySelector('#inputName').value
  let inputCategory = await document.querySelector('#inputCategory').value
  let inputContent = await document.querySelector('#contentTextarea').value

  try {
    if(!inputName){
      alert(`Please enter note name!`)
    }
    if(!inputContent){
      alert(`Please enter note content!`)
    }
    else{
      notes.push({name: inputName, created: new Date().toLocaleDateString("en-US", options), category: inputCategory, content: inputContent, dates: ''})
      renderNotes(notes)
    }
  } catch (error) {
    throw error;
  }
}

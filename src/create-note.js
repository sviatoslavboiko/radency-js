import { notes } from "./../index.js";
import { renderNotes } from "./render.js"
import { createNoteStatistics } from "./notes-statistics.js"
import { renderNotesStatistics } from "./render.js"
const options = { month: 'long', day: 'numeric', year: 'numeric'};

export const createNote = () => {
  let inputName = document.getElementById('inputName').value
  let inputCategory = document.getElementById('inputCategory').value
  let inputContent = document.getElementById('contentTextarea').value

  try {
    if(!inputName){
      alert(`Please enter note name!`)
    }
    if(!inputContent){
      alert(`Please enter note content!`)
    }
    else{
      
      notes.push({name: inputName, created: new Date().toLocaleDateString("en-US", options), category: inputCategory, content: inputContent, dates: '', id: Math.trunc(Math.random() * 10000)})
      renderNotes(notes)
      renderNotesStatistics(createNoteStatistics())
    }
  } catch (error) {
    throw error;
  }
}

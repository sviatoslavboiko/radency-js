import { notes } from "./../index.js";
import { renderNotes } from "./render.js"
import { createNoteStatistics } from "./notes-statistics.js"
import { renderNotesStatistics } from "./render.js"
const options = { month: 'long', day: 'numeric', year: 'numeric'};

export const createNote = () => {
  const regExpForDates = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/

  let inputName = document.getElementById('inputName').value
  let inputCategory = document.getElementById('inputCategory').value
  let inputContent = document.getElementById('contentTextarea').value

  const tmpDates = inputContent.replace(/[^\d^\/ ]/g, "");
  const dates = tmpDates.split(' ').filter(elem => regExpForDates.test(elem));
  

  try {
    if(!inputName){
      alert(`Please enter note name!`)
    }
    if(!inputContent){
      alert(`Please enter note content!`)
    }
    else{
      
      notes.push({name: inputName, created: new Date().toLocaleDateString("en-US", options), category: inputCategory, content: inputContent, dates: dates, id: Math.trunc(Math.random() * 10000)})
      renderNotes(notes)
      renderNotesStatistics(createNoteStatistics())
    }
  } catch (error) {
    throw error;
  }
}

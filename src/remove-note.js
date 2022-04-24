import { notes } from "./../index.js"
import { createNoteStatistics } from "./notes-statistics.js"
import { renderNotesStatistics } from "./render.js"

const findNote = (id) => {
  const matchId = +id.match(/^.{3}(.*)/)[1]
  return notes.map(element => element.id).indexOf(matchId)
}

export const removeNote = (e) => {
  const id = e.target.id
  const btn = document.getElementById(`${id}`)
  const indexOfElement = findNote(id)  
  
  if(!btn) {
    return
  }
  
  const elem = btn.closest('.my-cell')
  if(btn.classList.contains('remove')){

    elem.classList.add('d-none')
    notes.splice(indexOfElement, 1)
    renderNotesStatistics(createNoteStatistics())
  }
}

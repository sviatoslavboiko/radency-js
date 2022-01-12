import { notes } from "./../index.js"
import { arcivedNotes } from "./../index.js"
import { createNoteStatistics } from "./notes-statistics.js"
import { renderNotesStatistics } from "./render.js"

export const archiveNote = e => {
  const id = e.target.id
  const btn = document.getElementById(`${id}`)

  if(!id){
    return
  }
  if(!btn) {
    return
  }
  
  const elem = btn.closest('.my-cell')
  const matchId = +id?.match(/^.{3}(.*)/)[1]
  const indexOfElement = notes.map(element => element.id).indexOf(matchId)
  const indexOfElementArchived = arcivedNotes.map(element => element.id).indexOf(matchId)

  if(btn.classList.contains('archive')){

    elem.classList.add('d-none')
    btn.classList.add('archived')
    btn.classList.remove('archive')
    arcivedNotes.push(notes[indexOfElement])
    notes.splice(indexOfElement, 1)
    renderNotesStatistics(createNoteStatistics())
  }
  else if(btn.classList.contains('archived')){

    elem.classList.add('d-none')
    btn.classList.add('archive')
    btn.classList.remove('archived')
    notes.push(arcivedNotes[indexOfElementArchived])
    arcivedNotes.splice(indexOfElementArchived, 1)
    renderNotesStatistics(createNoteStatistics())
  }
}

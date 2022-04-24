import { notes } from "./../index.js"
import { archivedNotes } from "./../index.js"
import { createNoteStatistics } from "./notes-statistics.js"
import { renderNotesStatistics } from "./render.js"

const archiveOneNote = (notes, archivedNotes, indexOfElementArchived, elem, btn) => {
  elem.classList.toggle('d-none')
  btn.classList.remove('archive')
  btn.classList.toggle('archived')
  notes.push(archivedNotes[indexOfElementArchived])
  archivedNotes.splice(indexOfElementArchived, 1)
  renderNotesStatistics(createNoteStatistics())
}

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
  const indexOfElementArchived = archivedNotes.map(element => element.id).indexOf(matchId)

  if(btn.classList.contains('archive')){
    archiveOneNote(archivedNotes, notes, indexOfElement, elem, btn)
  }
  else if(btn.classList.contains('archived')){

    archiveOneNote(notes, archivedNotes, indexOfElementArchived, elem, btn)
  }
}
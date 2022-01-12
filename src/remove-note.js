import { notes } from "./../index.js"
import { createNoteStatistics } from "./notes-statistics.js"
import { renderNotesStatistics } from "./render.js"

export const removeNote = (e) => {

  const id = e.target.id
  const btn = document.getElementById(`${id}`)

  if(!id){
    return
  }
  if(!btn) {
    return
  }

  const elem = btn.closest('.my-cell')
  const matchId = +id.match(/^.{3}(.*)/)[1]
  const indexOfElement = notes.map(element => element.id).indexOf(matchId)

  if(btn.classList.contains('remove')){

    elem.classList.remove('my-cell')
    elem.classList.add('d-none')
    notes.splice(indexOfElement, 1)
    renderNotesStatistics(createNoteStatistics())
  }
}

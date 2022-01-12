import { createNote } from "./src/create-note.js"
import { notes, noteStatistics } from "./src/data-base.js"
import { renderNotes, renderNotesStatistics } from "./src/render.js"

const btnCreateNoteModal = document.querySelector('.btn-create-note-modal')
const mainTable = document.querySelector('.main-table')

const main = async ()=> {
  try {
    renderNotes(notes)
    renderNotesStatistics(noteStatistics)

  } catch (error) {
    throw new Error(error)
  }
}

main()

btnCreateNoteModal.addEventListener('click', createNote)
// remove note
mainTable.addEventListener('click', e => {
  const id = e.target.id;
  const btn = document.querySelector(`#${id}`);
  const elem = btn.closest('.my-cell');
  const matchId = +id.match(/^.{3}(.*)/)[1]
  const indexOfElement = notes.map(element => element.id).indexOf(matchId)

  if(btn.classList.contains('remove')){

    elem.classList.remove('my-cell');
    elem.classList.add('d-none');
    notes.splice(indexOfElement, 1);
  }
})
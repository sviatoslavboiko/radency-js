import { createNote } from "./src/create-note.js"
import { notes, noteStatistics } from "./src/data-base.js"
import { renderNotes, renderNotesStatistics } from "./src/render.js"

const btnCreateNoteModal = document.querySelector('.btn-create-note-modal')
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

import { createNote } from "./src/create-note.js"
import { archiveNote } from "./src/archive-note.js"
import { tmpIndex, setValueToTable, editNote } from "./src/edit-note.js"
import { removeNote } from "./src/remove-note.js"
import { createNoteStatistics } from "./src/notes-statistics.js"
import { dbNotes } from "./src/data-base.js"
import { renderNotes, renderNotesStatistics, renderArchivedNotes } from "./src/render.js"

const btnCreateNoteModal = document.querySelector('.btn-create-note-modal')
const btnEditNoteModal = document.querySelector('.btn-edit-note-modal')
const mainTable = document.querySelector('.main-table')
const btnArcivedNotes = document.querySelector('.archived-btn')
const btnCollectionNotes = document.querySelector('.all-collection')

export const notes = dbNotes 
export const arcivedNotes = []
export const noteStatistics = [] 

const main = async ()=> {
  try {
    renderNotes()
    renderNotesStatistics(createNoteStatistics())

  } catch (error) {
    throw new Error(error)
  }
}

main()

// create note
btnCreateNoteModal.addEventListener('click', createNote)

// edit note
mainTable.addEventListener('click', e => setValueToTable(e)) 

btnEditNoteModal.addEventListener('click', () => editNote(tmpIndex))

// remove note
mainTable.addEventListener('click', e => removeNote(e))

// archive note
mainTable.addEventListener('click', e => archiveNote(e))

// open all notes
btnCollectionNotes.addEventListener('click', () => renderNotes())

// open archived notes
btnArcivedNotes.addEventListener('click', () => renderArchivedNotes())

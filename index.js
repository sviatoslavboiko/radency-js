import { createNote } from "./src/create-note.js"
import { dbNotes, dbNoteStatistics } from "./src/data-base.js"
import { renderNotes, renderNotesStatistics, renderArchivedNotes } from "./src/render.js"

const btnCreateNoteModal = document.querySelector('.btn-create-note-modal')
const mainTable = document.querySelector('.main-table')
const btnArcivedNotes = document.querySelector('.archived-btn')
const btnCollectionNotes = document.querySelector('.all-collection')

export const arcivedNotes = []
export const notes = dbNotes 
export const noteStatistics = dbNoteStatistics 

const main = async ()=> {
  try {
    renderNotes()
    renderNotesStatistics(noteStatistics)

  } catch (error) {
    throw new Error(error)
  }
}

main()

// create note
btnCreateNoteModal.addEventListener('click', createNote)

// remove note
mainTable.addEventListener('click', e => {
  const id = e.target.id;
  const btn = document.getElementById(`${id}`);

  if(!id){
    return;
  }
  if(!btn) {
    return;
  }

  const elem = btn.closest('.my-cell');
  const matchId = +id.match(/^.{3}(.*)/)[1]
  const indexOfElement = notes.map(element => element.id).indexOf(matchId)

  if(btn.classList.contains('remove')){

    elem.classList.remove('my-cell');
    elem.classList.add('d-none');
    notes.splice(indexOfElement, 1);
  }
})

// archive note
mainTable.addEventListener('click', e => {
  const id = e.target.id;
  const btn = document.getElementById(`${id}`);

  if(!id){
    return;
  }
  if(!btn) {
    return;
  }
  
  const elem = btn.closest('.my-cell');
  const matchId = +id?.match(/^.{3}(.*)/)[1]
  const indexOfElement = notes.map(element => element.id).indexOf(matchId)
  const indexOfElementArchived = arcivedNotes.map(element => element.id).indexOf(matchId)

  if(btn.classList.contains('archive')){

    elem.classList.add('d-none');
    btn.classList.add('archived');
    btn.classList.remove('archive');
    arcivedNotes.push(notes[indexOfElement]);
    notes.splice(indexOfElement, 1);
  }
  else if(btn.classList.contains('archived')){

    elem.classList.add('d-none');
    btn.classList.add('archive');
    btn.classList.remove('archived');
    notes.push(arcivedNotes[indexOfElementArchived]);
    arcivedNotes.splice(indexOfElementArchived, 1);
  }
})

// open all notes
btnCollectionNotes.addEventListener('click', renderNotes)
// open archived notes
btnArcivedNotes.addEventListener('click', renderArchivedNotes)
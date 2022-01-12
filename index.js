import { createNote } from "./src/create-note.js"
import { editNote } from "./src/edit-note.js"
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
let tmpIndex

mainTable.addEventListener('click', e => {
  const id = e.target.id;
  const btn = document.getElementById(`${id}`);

  if(!id){
    return;
  }
  if(!btn) {
    return;
  }

  const inputEditName = document.getElementById('inputEditName')
  const inputEditCategory = document.getElementById('inputEditCategory')
  const contentEditTextarea = document.getElementById('contentEditTextarea')
  const matchId = +id.match(/^.{3}(.*)/)[1]
  let indexOfElement = notes.map(element => element.id).indexOf(matchId)

  inputEditName.value = notes[indexOfElement].name;
  inputEditCategory.value = notes[indexOfElement].category;
  contentEditTextarea.value = notes[indexOfElement].content
  tmpIndex = indexOfElement
});

btnEditNoteModal.addEventListener('click', () => editNote(tmpIndex))

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
    renderNotesStatistics(createNoteStatistics())
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
    renderNotesStatistics(createNoteStatistics())
  }
  else if(btn.classList.contains('archived')){

    elem.classList.add('d-none');
    btn.classList.add('archive');
    btn.classList.remove('archived');
    notes.push(arcivedNotes[indexOfElementArchived]);
    arcivedNotes.splice(indexOfElementArchived, 1);
    renderNotesStatistics(createNoteStatistics())
  }
})

// open all notes
btnCollectionNotes.addEventListener('click', renderNotes)
// open archived notes
btnArcivedNotes.addEventListener('click', renderArchivedNotes)

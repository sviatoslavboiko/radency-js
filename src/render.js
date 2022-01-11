import { IMG } from './img.js';
import { noteStatuses } from './enums.js'
const mainTable = document.querySelector('.main-tbody')
const statisticsTable = document.querySelector('.statistics-tbody')

function getKeyByValue(object, value) {
  return Object.keys(object).find(key => object[key] === value);
}

export const renderNotes = notes => {

  mainTable.innerHTML = ``

  for (const {name, created, category, content, dates} of notes) {

    const imgCategory = getKeyByValue(noteStatuses, category)
    
    mainTable.insertAdjacentHTML('beforeend',`
    <tr>
    <td>${IMG[imgCategory]}</td>
    <td>${name}</td>
    <td>${created}</td>
    <td>${category}</td>
    <td>${content}</td>
    <td>${dates}</td>
    <td>
      ${IMG.EDITE}
      ${IMG.ARCHIVE}
      ${IMG.REMOVE}
    </td>
    </tr>
    `)
  }
}

export const renderNotesStatistics = noteStatistics => {

  statisticsTable.innerHTML = ``

  for(const {name, active, archived} of noteStatistics) {

    const imgCategory = getKeyByValue(noteStatuses, name)

    statisticsTable.insertAdjacentHTML('beforeend',`
    <tr>
      <td>${IMG[imgCategory]}</td>
      <td>${name}</td>
      <td>${active}</td>
      <td>${archived}</td>
    </tr>
    `)
  }
}

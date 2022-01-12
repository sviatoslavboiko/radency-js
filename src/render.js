import { IMG } from './img.js';
import { noteStatuses } from './enums.js'
const mainTable = document.querySelector('.main-tbody')
const statisticsTable = document.querySelector('.statistics-tbody')

function getKeyByValue(object, value) {
  return Object.keys(object).find(key => object[key] === value);
}

export const renderNotes = notes => {

  mainTable.innerHTML = ``

  for (const {name, created, category, content, dates, id} of notes) {

    const imgCategory = getKeyByValue(noteStatuses, category)
    
    mainTable.insertAdjacentHTML('beforeend',`
    <tr class="my-cell">
    <td>${IMG[imgCategory]}</td>
    <td>${name}</td>
    <td>${created}</td>
    <td>${category}</td>
    <td>${content}</td>
    <td>${dates}</td>
    <td>
      <input type="image" src="src/img/pencil-fill.svg" class="btn edite" style="cursor: pointer" id="${'edt' + id}}"></input>
      <input type="image" src="src/img/archive-fill.svg" class="btn archive" style="cursor: pointer" id="${'arc' + id}}"></input>
      <input type="image" src="src/img/trash-fill.svg" class="btn remove" style="cursor: pointer" id="${'del' + id}"></input>
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

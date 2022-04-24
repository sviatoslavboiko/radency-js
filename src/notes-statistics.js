import { notes, archivedNotes } from "./../index.js"
const countCategories = (arrOfNotes, noteCategory) => (arrOfNotes.filter(element => element.category === noteCategory)).length

export const createNoteStatistics = () => {
  const taskCount = countCategories(notes, 'Task')
  const thoughtCount = countCategories(notes, 'Random Thought')
  const ideaCount = countCategories(notes, 'Idea')
  const qouteCount = countCategories(notes, 'Quote')
  
  const taskArchivedCount = countCategories(archivedNotes ,'Task')
  const thoughtArchivedCount = countCategories(archivedNotes ,'Random Thought')
  const ideaArchivedCount = countCategories(archivedNotes ,'Idea')
  const qouteArchivedCount = countCategories(archivedNotes ,'Quote')
  return [
    {name: 'Task', active: taskCount, archived: taskArchivedCount},
    {name: 'Random Thought', active: thoughtCount, archived: thoughtArchivedCount},
    {name: 'Idea', active: ideaCount, archived: ideaArchivedCount},
    {name: 'Quote', active: qouteCount, archived: qouteArchivedCount}
  ]
}

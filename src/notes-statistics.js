import {notes, arcivedNotes } from './../index.js';
export const createNoteStatistics = () => {
  const taskCount = (notes.filter(element => element.category === 'Task')).length;
  const thoughtCount = (notes.filter(element => element.category === 'Random Thought')).length;
  const ideaCount = (notes.filter(element => element.category === 'Idea')).length;
  const qouteCount = (notes.filter(element => element.category === 'Quote')).length
  const taskArchivedCount = (arcivedNotes.filter(element => element.category === 'Task')).length;
  const thoughtArchivedCount = (arcivedNotes.filter(element => element.category === 'Random Thought')).length;
  const ideaArchivedCount = (arcivedNotes.filter(element => element.category === 'Idea')).length;
  const qouteArchivedCount = (arcivedNotes.filter(element => element.category === 'Quote')).length
  return [
    {name: 'Task', active: taskCount, archived: taskArchivedCount},
    {name: 'Random Thought', active: thoughtCount, archived: thoughtArchivedCount},
    {name: 'Idea', active: ideaCount, archived: ideaArchivedCount},
    {name: 'Quote', active: qouteCount, archived: qouteArchivedCount}
  ]
}
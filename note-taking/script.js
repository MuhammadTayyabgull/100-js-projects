btn = document.querySelector('#btn');
addNote = document.querySelector('.add-note');
noteContainer = document.querySelector('.note-container');
// load existing notes from local storage
window.addEventListener('DOMContentLoaded', () => {
    const savedNotes = JSON.parse(localStorage.getItem('notes')) || [];
    savedNotes.forEach(content => {
      const note = createNote(content)
      noteContainer.insertBefore(note , noteContainer.querySelector('.add-note'))
    })
  })

// function to create a note
function createNote (text = '') {
  const note = document.createElement('textarea');
  note.classList.add('note')
  note.classList.add('note-text')
  note.setAttribute('placeholder', 'Enter your note here...')
  note.value = text
  note.addEventListener('dblclick', () => {
    const confirmDelete = confirm('Do you want to delete this note?')
   if (confirmDelete){ note.remove()
    saveNotes(); }
  })
  
  // save on every change 
  note.addEventListener('input', saveNotes)
  return note
}
// create a new note on plus click
btn.addEventListener('click', () => {
  const newNote = createNote();
  noteContainer.insertBefore(newNote, noteContainer.querySelector('.add-note'))
  saveNotes();
})
// function to save all notes
function saveNotes () {
  const notes = document.querySelectorAll('.note-container .note:not(.add-note)');
  const data = [];

  notes.forEach(note => {
    data.push(note.value);
  })
  localStorage.setItem('notes', JSON.stringify(data))
}
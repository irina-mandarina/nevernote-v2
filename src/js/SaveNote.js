var noteCount = 0

export function saveNote(username, title, content, date) {
    let notes
    try {
        notes = JSON.parse(localStorage.getItem('notes'))
    }
    catch (e) {
        console.log(e)
    }
    if (notes == null) {
        notes = []
    }
    notes.push({id: notes.length, user: username, title: title, content: content, date: date})
    localStorage.setItem('notes', JSON.stringify(notes))
}

export function getNoteList(username) {
    let notes
    try {
        notes = JSON.parse(localStorage.getItem('notes'))
    }
    catch (e) {
        console.log(e)
    }
    if (notes === null) {
        notes = []
        return notes
    }

    let noteList = []

    for (let i = 0; i < notes.length; i++) {
        let note = notes.at(i)
        if (note.user === username) {
            noteList.push(note)
            noteCount++
        }
    }

    return noteList
}

export function getNoteCount(username) {
    return noteCount
}

export function deleteNoteFromStorage(noteId) {
    let notes
    try {
        notes = JSON.parse(localStorage.getItem('notes'))
    }
    catch (e) {
        console.log(e)
    }
    if (notes === null) {
        throw "Problem while parsing the notes: notes is null"
    }
    for (let i = 0; i < notes.length; i++) {
        let note = notes.at(i)
        if (note.id === noteId) {
            notes.splice(i, i)
        }
    }
    localStorage.setItem('notes', JSON.stringify(notes))    
}
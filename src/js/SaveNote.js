var noteCount = 0

export function saveNotes(username, noteList) {
    let notes
    try {
        notes = JSON.parse(localStorage.getItem('notes'))
    }
    catch (e) {
        console.log(e)
    }
    if (notes === null) {
        notes = {}
    }
    notes[username] = noteList
    try {
        localStorage.setItem('notes', JSON.stringify(notes))
    }
    catch (e) {
        console.log(e)
    }
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

    let noteList = notes[username] ?? []

    return noteList
}

// {
//     Alex: [{
//         id: 0,
//         title: 'asdf'
//     }],
//     Alex2: [{
//         id: 0,
//         title: 'asdf'
//     }]
// }

export function getNoteCount(username) {
    return noteCount
}

export function deleteNoteFromStorage(username, noteId) {
    let notes
    try {
        notes = JSON.parse(localStorage.getItem('notes'))
    }
    catch (e) {
        console.log(e)
    }
    if (notes === null) {
        console.log("Problem while parsing the notes: notes is null")
    }
    notes[username] = notes[username].filter((note) => 
        note['id'] !== noteId
    )
    try {
        localStorage.setItem('notes', JSON.stringify(notes))
    } 
    catch (e) {
        console.log(e)
    }
}
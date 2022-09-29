var noteCount = 0

export function saveNotes(username, noteList) {
    let notes
    try {
        notes = JSON.parse(localStorage.getItem('notes'))
    }
    catch (e) {
        console.log(e)
    }
    notes[username] = noteList
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

    // let noteList = []

    // for (let i = 0; i < notes.length; i++) {
    //     let note = notes.at(i)
    //     if (note.user === username) {
    //         noteList.push(note)
    //         noteCount++
    //     }
    // }

    // let noteList = notes.filter((note) => note.user === username)
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
        throw "Problem while parsing the notes: notes is null"
    }
    notes[username] = notes[username].filter((note) => 
        note['id'] !== noteId
    )
    localStorage.setItem('notes', JSON.stringify(notes))    
}
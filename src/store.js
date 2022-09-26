import { createStore } from 'vuex'
import { saveNote, getNoteCount, deleteNoteFromStorage, getNoteList } from './js/SaveNote.js'

const state = {
  username: 'alex',
  password: 'alex1',
  name: null,
  address: null,
  age: 0,
  notes: null,
  noteCount: 0
}

const mutations = {
    setNotes({ state }, noteList) {
      state.notes = noteList
    },
    setNoteCount({ state }, noteCount) {
      state.noteCount = noteCount
    },
    saveNote ({ state }, newNote) {
      let today = new Date()
      let date = today.getFullYear() + '.'+ (today.getMonth()+1) + '.' + today.getDate()
      let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
      let dateTime = date + ' ' + time

      state.notes.push({id: state.noteCount, user: state.username, title: newNote.title, content: newNote.content, date: dateTime})
      state.noteCount++
      saveNote(state.username, newNote.title, newNote.content, dateTime)
    },
    deleteNote(noteId) {
      state.notes = state.notes.filter((note) => note.id !== noteId)
        try {
            deleteNoteFromStorage(noteId)
        }
        catch (e) {
            toastr['error'](e)
        }
    }
}
  
const actions = {
    saveNote({ commit }, newNote) {
      store.dispatch('saveNoteAsync', newNote).then(() => {
        toastr.success('You saved your note successfully.')
      })
    },
    saveNoteAsync ({ commit }, newNote) {
      console.log(newNote)
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          commit('saveNote', newNote)
          resolve()
        }, 1000)
      })
    },

    deleteNote({ commit }, noteId) {
      store.dispatch('deleteNoteAsync').then(() => {
        toastr.success('You deleted your note successfully.')
      })
    },
    deleteNoteAsync ({ commit }, noteId) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          commit('deleteNote', noteId)
          resolve()
        }, 1000)
      })
    }
}

const getters = {
  getNotes() {
    store.commit('setNotes', {
      noteList: getNoteList(state.username)
    })
    return store.notes
  },
  getNoteCount() {
    store.commit('setNoteCount', {
      noteCount: getNoteCount(state.username)
    })
    return store.noteCount
  },
  getUsername() {
    return state.username
  },
  getPassword() {
    return state.password
  }
}

export const store = createStore({
    state,
    getters,
    actions,
    mutations
  })
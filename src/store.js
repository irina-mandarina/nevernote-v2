import Vuex from 'vuex'
import router from './router.js'
import { saveNotes, deleteNoteFromStorage, getNoteList } from './js/SaveNote.js'
import { saveUserInfo, isValidUsername, isTaken, isValidPassword } from './js/UserRegistration.js'
import { getName, getAge, getAddress, getBio, setBio } from './js/UserInfo.js'
import { validateLoginInfo } from './js/LoginValidation.js'
import { logged, logUser, logOut } from './js/LoggedUser.js'

const state = {
  username: 'alex',
  password: 'alex1',
  name: null,
  address: null,
  age: 0,
  bio: null,
  notes: [],
  logged: logged(),
  view: 'logIn'
}

const mutations = {
  logIn(state, user) {
    console.log("in log in")
    state.logged = true
    state.username = user.username
    state.notes = getNoteList(user.username)
    state.name = getName(user.username)
    state.address = getAddress(user.username)
    state.age = getAge(user.username)
    state.bio = getBio(user.username)
    logUser(state.username)
  },

  logOut(state) {
    state.logged = false
    logOut(state.username)
    state.username = null
  },

  setNotes(state , noteList) {
    state.notes = noteList
  },

  addNote (state , newNote) {
    state.notes.push(newNote)
  },

  deleteNote(state, noteId) {
    state.notes = state.notes.filter((note) => note.id !== noteId)
  },

  editNote(state, editedNote) {
    for(let i = 0; i < state.notes.length; i++) {
      if (state.notes[i].id === editedNote.id) {
        state.notes[i] = editedNote
      }
    }
  },

  editBio(state, newBio) {
    state.bio = newBio
  }
}
  
const actions = {
  registerUser({ commit }, user) {
    if (user.age < 10) {
      toastr["error"]("You must be at least 10yo to register.")
    }
    else if (!isValidUsername(user.username)) {
        toastr["error"]("The username you enterered contains invalid characters.")
    }
    else if (isTaken(user.username)) {
        toastr["error"]("This username is already taken.")
    }
    else if (!isValidPassword(user.password)) {
        toastr["error"]("The entered password is not valid. Use at least 4 characters and 1 number.")
    }
    else {
        saveUserInfo(user.name, user.age, user.address, user.username, user.password)
        commit('logIn', user)
        router.push('/notes')
    }
  },

  checkLoginInfo({ commit }, user) {
    if (validateLoginInfo(user.username, user.password)) {
      commit('logIn', user)
      router.push('/notes')
    }
  },

  logOut({ commit }) {
    router.push('/login')
    commit('logOut')
  },

  editNote({ commit, state }, editedNote) {
    commit('editNote', editedNote)
    saveNotes(state.username, state.notes)
  },

  saveNote ({ commit, state }, newNote) {
    let today = new Date()
    let date = today.getFullYear() + '.'+ (today.getMonth()+1) + '.' + today.getDate()
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
    let dateTime = date + ' ' + time
    commit('addNote', {id: state.notes.length, title: newNote.title, content: newNote.content, date: dateTime})
    saveNotes(state.username, state.notes)
  },

  deleteNote({ commit, state }, noteId) {
    try {
      deleteNoteFromStorage(state.username, noteId.noteId)
    }
    catch (e) {
        toastr['error'](e)
    }
    commit('deleteNote', noteId.noteId)
  },

  editBio({commit, state}, newBio) {
    commit('editBio', newBio)
    setBio(state.username, newBio)
  }
}

const getters = {
}

export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations
  })

//   function foo() {
//     // retru nfetch(...)
//     return new Promise((resolve, reject) => {
//      // fetch(...).then(resolve).catch(reject)
//       try {
//         // some code ...
//         resolve()
//       } catch(err) {
//         reject(err)
//       }
//     })
//   }

//   function bar() {
//     foo()
//       .then(() => alert('success'))
//       .catch(() => alert('failed'))
//   }

//   async function foo() {
//     return await fetch(...)
//   }

//   function bar() {
//     foo()
//       .then((result) => alert('success'))
//       .catch(() => alert('failed'))
// }
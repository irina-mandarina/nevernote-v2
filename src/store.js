import Vuex from 'vuex'
import router from './router.js'
import { LSisLogged, LSLogOut, LSSetLogged } from './js/LoggedUser.js'
import { getNotes, logIn, register, logOut, deleteNote, addNote, editNote, userDetails } from './js/requests.js'

const state = {
  username: 'alex',
  password: 'alex1',
  name: null,
  address: null,
  age: 0,
  bio: null,
  notes: [],
  logged: LSisLogged(),
  view: 'logIn'
}

const mutations = {
  async logIn(state, user) {
    state.username = user.username
    state.logged = true

    // state.notes = await getNotes(state.username)
    // console.log(state.notes)

    // const details = await userDetails(state.username)
    // console.log(details)
    // state.name = details.name
    // state.address = details.address
    // state.age = details.age
    // state.bio = details.bio
  },

  logOut(state) {
    state.logged = false
    state.username = null
  },

  setNotes(state, noteList) {
    state.notes = noteList
  },

  setDetails(state, details) {
    state.name = details.name
    state.address = details.address
    state.age = details.age
    state.bio = details.bio
  },

  addNote (state, newNote) {
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
  async getNotes({commit, state}) {
    commit('setNotes', await getNotes(state.username))
  },
  async getDetails({ commit, state }) {
    commit('setDetails', await userDetails(state.username))
  },
  registerUser({ commit, dispatch }, user) {
    register(user.username, user.password, user.name, user.address, user.age)
    dispatch('logIn', user)
    router.push('/notes')
  },

  async logIn ({ commit }, user) {
    try{
    const auth = await logIn(user.username, user.password)

    if (auth) {
      LSSetLogged(user.username)
      commit('logIn', user)
      router.push('/notes')
    }
    else {
      toastr.error('Unauthorized')
    }
  }catch{
    toastr.error('request error')
  }
    
  },

  logOut({ commit }) {
    logOut(state.username)
    LSLogOut(state.username)
    commit('logOut')
    router.push('/login')
  },

  editNote({ commit, state }, editedNote) {
    commit('editNote', editedNote)
    editNote(editedNote.id, state.username, editedNote.title, editedNote.content)
  },

  saveNote ({ commit, state }, newNote) {
    let today = new Date()
    let date = today.getFullYear() + '.'+ (today.getMonth()+1) + '.' + today.getDate()
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
    let dateTime = date + ' ' + time
    commit('addNote', {id: state.notes.length, title: newNote.title, content: newNote.content, date: dateTime})
    addNote(state.username, newNote.title, newNote.content)
  },

  deleteNote({ commit, state }, noteId) {
    deleteNote(noteId.noteId, state.username)
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
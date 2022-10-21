import { createRouter, createWebHashHistory } from 'vue-router'
import store from './store.js'
import LogIn from './components/LogIn.vue'
import SignUp from './components/SignUp.vue'
import NoteList from './components/NoteList.vue'
import UserProfile from './components/UserProfile.vue'
import NotFound from './components/NotFound.vue'

const routes = [
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
  { path: '/', redirect: '/login' },
  { path: '/login', name: 'Log In', component: LogIn, beforeEnter(to, from, next) {
      if (store.state.logged) {
        store.commit('logIn', {username: localStorage.getItem('logged')})
        next('/notes')
      }
      next()
    }
  },
  { path: '/signup', name: 'Sign Up', component: SignUp },
  { path: '/notes', name: 'Notes', component: NoteList, beforeEnter(to, from, next) {
      if (store.state.logged) {
        store.commit('logIn', {username: localStorage.getItem('logged')})
        next()
      }
      else {
        next('/login')
      }
    }
  },
  { path: '/profile', name: 'Profile', component: UserProfile, beforeEnter(to, from, next) {
      if (store.state.logged) {
        store.commit('logIn', {username: localStorage.getItem('logged')})
        store.dispatch('getDetails')
        next()
      }
      else {
        next('/login')
      }
    }
  }
]

 const router =  createRouter({
  history: createWebHashHistory(),
  routes
})

// router.beforeEnter((to, from, next) => {
//   if (logged()) {
//     // set the store up
//     // find the user obj
//     let user = loggedUser()
//     store.dispatch('checkLoginInfo', user)
//     if (to.name === 'Log In') {
//       next('/notes')
//     }
//   }
//   if (to.name === 'Notes' || to.name === 'Profile') {
//     next('/login')
//   }
// })

export default router
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
    { path: '/login', name: 'Log In', component: LogIn },
    { path: '/signup', name: 'Sign Up', component: SignUp },
    { path: '/notes', name: 'Notes', component: NoteList, beforeEnter(to, from) {
      if ( !store.state.logged ) {
        redirect: '/login'
      }
      return store.state.logged
    } },
    { path: '/profile', name: 'Profile', component: UserProfile, beforeEnter(to, from) {
      if ( !store.state.logged ) {
        redirect: '/login'
      }
      return store.state.logged
    } }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
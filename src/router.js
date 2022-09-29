import { createRouter, createWebHashHistory } from 'vue-router'
import LogIn from './components/LogIn.vue'
import SignUp from './components/SignUp.vue'
import NoteList from './components/NoteList.vue'
import UserProfile from './components/UserProfile.vue'

const notFound = { template: '<div> <h1> Not found </h1> </div>'}

const routes = [
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: notFound },
    { path: '/', redirect: '/login' },
    { path: '/login', name: 'Log In', component: LogIn },
    { path: '/signup', name: 'Sign Up', component: SignUp },
    { path: '/notes', name: 'Notes', component: NoteList },
    { path: '/profile', name: 'Profile', component: UserProfile }
]

export default createRouter({
  history: createWebHashHistory(),
  routes
})
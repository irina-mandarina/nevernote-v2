<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
  import HelloWorld from './components/HelloWorld.vue'
  import LogIn from './components/LogIn.vue'
  import SignUp from './components/SignUp.vue'
  import Navigation from './components/Navigation.vue'
  import NoteList from './components/NoteList.vue'
  import UserProfile from './components/UserProfile.vue'
  import { getName, getAge, getAddress } from './js/UserInfo.js'
  import { ref } from 'vue'

  let username = ref(null)
  let name = ref(null)
  let age = ref(null)
  let address = ref(null)
  let logged = ref(false)
  let showView = ref('logIn')

  function logIn({user}) {
    alert('in logIn')
    logged = true
    username = user
    showView = 'noteList'
    name = getName(username)
    age = getAge(username)
    address = getAddress(username)
  }
  
  function logOut() {
    logged = false
    username = null
    showView = 'logIn'
  }
</script>

<template>
  <!-- <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" /> -->
  <LogIn v-if="showView === 'logIn'" @log-in="logIn" @go-to-sign-up="showView = 'signUp'" />
        
  <SignUp v-if="showView === 'signUp'" @log-in="logIn" @go-to-log-in="showView = 'logIn'" />

  <div v-if="logged">
      <Navigation @go-to-all-notes="showView = 'noteList'" @go-to-my-profile="showView = 'profile'" />
      <UserProfile :name="name" :username="username" v-if="showView === 'profile'" @log-out="logOut" />
      <NoteList v-if="showView === 'noteList'" :username="username" />  
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>

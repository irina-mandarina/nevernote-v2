<script setup>
  import LogIn from './components/LogIn.vue'
  import SignUp from './components/SignUp.vue'
  import Navigation from './components/Navigation.vue'
  import NoteList from './components/NoteList.vue'
  import UserProfile from './components/UserProfile.vue'
  import { getName, getAge, getAddress } from './js/UserInfo.js'
  import { ref } from 'vue'
  import { useStore } from 'vuex'

  const store = useStore()

  let username = ref(null)
  let name = ref(null)
  let age = ref(null)
  let address = ref(null)
  let logged = ref(false)
  let showView = ref('logIn')

  function logIn({user}) {
    logged.value = true
    username.value = user
    showView.value = 'noteList'
    // name.value = getName(username.value)
    // age.value = getAge(username.value)
    // address.value = getAddress(username.value)

    try {
      name.value = getName(username.value)
    }
    catch (e) {
      toastr["error"](e)
    }

    try {
      age.value = getAge(username.value)
    }
    catch (e) {
      toastr["error"](e)
    }

    try {
      address.value = getAddress(username.value)
    }
    catch (e) {
      toastr["error"](e)
    }
  }
  
  function logOut() {
    logged.value = false
    username.value = null
    showView.value = 'logIn'
  }
</script>

<template>
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

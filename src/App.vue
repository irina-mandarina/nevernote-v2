<script setup>
  import Navigation from './components/Navigation.vue';
  import store from './store.js'
  import { computed } from 'vue'

  let username = computed(() => store.state.username)
  let name = computed(() => store.state.name)
  let age = computed(() => store.state.age)
  let address = computed(() => store.state.address)
</script>

<template>
  <div>
    <Navigation v-if="store.state.logged" />
    <router-view></router-view>
  </div>
  <!-- <LogIn v-if="store.state.view === 'logIn'" />
        
  <SignUp v-if="store.state.view === 'signUp'" />

  <div v-if="store.state.logged">
      <Navigation />
      <UserProfile v-if="store.state.view === 'profile'" />
      <NoteList v-if="store.state.view === 'allNotes'"/>  
  </div> -->
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

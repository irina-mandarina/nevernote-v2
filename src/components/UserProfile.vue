<script setup>
    import { computed } from 'vue'
    import store from '../store.js'


    let username = computed(() => store.state.username)
    let name = computed(() => store.state.name)
    let age = computed(() => store.state.age)
    let address = computed(() => store.state.address)
</script>
    
<template>
    <div class="shadow-lg inline-block h-500 w-1/2">
        <img class="mx-auto mt-4 py-6 w-1/2" src="https://picsum.photos/400"/>
        <h1 class="font-serif text-lg"> Hello, {{ name }}! </h1>
        <p class="text-sans font-weight-300 py-8" v-bind:placeholder="username"> username: {{ username }} </p>
        <button class="mb-12" @click="store.dispatch('logOut')">Log out</button>
    </div>
</template>
    
<style scoped>
    /* .profile-container {
        width: 500px;
        border-radius: 20px;
        padding: 50px;
        box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
        align-items: center;
        text-align: center;
    }

    .profile-img {
        display: block;
        margin-left: auto;
        margin-right: auto; 
        width: 20%;
    } */

    .h-500 {
        margin-top: 80px;
        height: fit-content;
    }
</style>
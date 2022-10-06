<script setup>
    import { computed, ref } from 'vue'
    import store from '../store.js'


    let username = computed(() => store.state.username)
    let name = computed(() => store.state.name)
    let age = computed(() => store.state.age)
    let address = computed(() => store.state.address)
    let bio = computed(() => store.state.bio)
    let newBio = ref(null)

    function editBio() {
        document.querySelector("#editbox").classList.remove("hidden")
        document.querySelector("#editbox").classList.add("block")
        
        document.querySelector("#biobox").classList.remove("block")
        document.querySelector("#biobox").classList.add("hidden")

        document.querySelector("#editbiobtn").classList.remove("block")
        document.querySelector("#editbiobtn").classList.add("hidden")

        document.querySelector("#savebiobtn").classList.remove("hidden")
        document.querySelector("#savebiobtn").classList.add("block")
    }

    function saveChanges(newBio) {
        document.querySelector("#editbox").classList.add("hidden")
        document.querySelector("#editbox").classList.remove("block")

        document.querySelector("#biobox").classList.add("block")
        document.querySelector("#biobox").classList.remove("hidden")

        document.querySelector("#editbiobtn").classList.remove("hidden")
        document.querySelector("#editbiobtn").classList.add("block")
        
        document.querySelector("#savebiobtn").classList.remove("block")
        document.querySelector("#savebiobtn").classList.add("hidden")
        store.dispatch("editBio", newBio)
    }
</script>
    
<template>
    <div class="shadow-lg inline-block h-500 w-1/2">
        <img class="mx-auto mt-4 py-6 w-1/2" src="https://picsum.photos/400"/>
        <h1 class="font-serif text-lg"> Hello, {{ name }}! </h1>

        <div class="my-4">
            <p class="text-sans font-weight-300 py-2" v-bind:placeholder="username"> username: {{ username }} </p>
            <p class="text-sans font-weight-300 py-2" v-bind:placeholder="age"> Age: {{ age }} yo </p>
            <p class="text-sans font-weight-300 py-2" v-bind:placeholder="address"> Address: {{ address }} </p>
            <p id="biobox" class="block text-serif font-weight-300 py-2 mx-auto break-words px-4" v-bind:placeholder="bio"> {{ bio }} </p>
            <textarea id="editbox" class="hidden mx-auto flex rounded-md w-3/4 tracking-wide text-sm text-gray-400 px-2" v-model="newBio" type="text" placeholder="Bio"></textarea>
            <button id="editbiobtn" class="block my-4 mx-auto" @click="editBio()">Change bio</button>
            <button id="savebiobtn" class="hidden my-4 mx-auto" @click="saveChanges(newBio)">Save changes</button>
        </div>
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
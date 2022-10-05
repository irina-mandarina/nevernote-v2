<script setup>
    import store from '../store.js'
    import { computed } from 'vue'

    defineProps({
        id: Number,
        title: String,
        content: String,
        date: String
    })
    let username = computed(() => store.state.username)

    function allowEdit(noteId) {
        document.querySelector("#editbox"+noteId).classList.remove("hidden")
        document.querySelector("#editbox"+noteId).classList.add("block")
        document.querySelector("#notebox"+noteId).classList.remove("block")
        document.querySelector("#notebox"+noteId).classList.add("hidden")
    }

    function saveChanges(noteId, title, content, date) {
        document.querySelector("#editbox"+noteId).classList.add("hidden")
        document.querySelector("#editbox"+noteId).classList.remove("block")
        document.querySelector("#notebox"+noteId).classList.add("block")
        document.querySelector("#notebox"+noteId).classList.remove("hidden")
        store.dispatch("editNote", {id: noteId, title, date, content})
    }
</script>
    
<template>
    <div id="note" class="inline-block w-1/4 h-full rounded-3xl p-8 m-6 shadow-lg">
        <div class="relative w-1/4 float-right">
            <button class="flex p-0 m-0 bg-transparent text-rose-600 duration-700 hover:text-red-900 float-right border-0 text-sm focus:outline-0 focus:border-0" @click="store.dispatch('deleteNote', {noteId: id})">x</button>
            <br/>
            <button @click="allowEdit(id)" class="flex p-0 m-0 mt-2 bg-transparent float-right border-0 text-sm focus:outline-0 focus:border-0">
                <i class="fa fa-pencil stroke-1 hover:stroke-2 duration-500 text-fuchsia-900 hover:text-violet-900"></i>
            </button>
        </div>
        <div v-bind:id="'notebox'+id" class="block">
            <h3 class="break-words font-serif text-center py-8"> {{ title }} </h3>
            <p class="text-xs float-left italic text-gray-400">
                {{ date }}
            </p>
            <p class="break-words text-left py-8"> 
                {{ content }}
            </p>
        </div>
        <div v-bind:id="'editbox'+id" class="hidden">
            <input v-model="title" type="text" placeholder="Title" class="break-words mx-auto font-serif rounded-md text-md text-center py-2 my-2">
            <textarea class="mx-auto flex rounded-md w-full tracking-wide text-sm italic text-gray-400 px-2" v-model="content" type="text" placeholder="Content"></textarea>
            <button class="button mt-4 mb-4" @click="saveChanges(id, title, content, date)">Save changes</button>
        </div>
    </div>
</template>
    
<style scoped>
    .h-full {
        height: inherit;
    }
</style>
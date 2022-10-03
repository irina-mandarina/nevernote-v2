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
</script>
    
<template>
    <div id="note" class="inline-block w-1/4 rounded-3xl p-12 m-6 shadow-lg">
        <button class="bg-transparent inline text-red-500 float-right border-0 text-xs focus:outline-0 focus:border-0" @click="store.dispatch('deleteNote', {noteId: id})">x</button>
        <div>
            <h3 class="break-words font-serif text-center py-8"> {{ title }} </h3>
            <p class="text-xs float-left italic text-gray-400">
                {{ date }}
            </p>
            <p class="break-words text-left py-8"> 
                {{ content }}
            </p>
        </div>
    </div>
</template>
    
<style scoped>
</style>
<script setup>
    // import { ref } from 'vue'
    import store from '../store.js'
    // import { saveNote, getNoteCount, deleteNoteFromStorage, getNoteList } from '../js/SaveNote.js'
    import Note from './Note.vue'
    import NoteAdder from './NoteAdder.vue'
    import { computed } from 'vue'

    let username = computed(() => store.state.username)
    let name = computed(() => store.state.name)
    let notes = computed(() => store.state.notes)
</script>
    
<template>
    <h1 class="text-center font-serif text-vl my-24">Wellcome {{ name }}</h1>
    <h3 class="flex m-32 font-sans font-medium text-lg mb-12 left-24"> Your notes </h3>
    <div id="notes" class="flex m-auto flex-wrap">
        <NoteAdder :username="username" />
        <Note v-for="note in notes" :id="note.id" :title="note.title" :content="note.content" :date="note.date" />
    </div>
</template>
    
<style scoped>
    .text-vl {
        font-size: 40pt;
    }
</style>
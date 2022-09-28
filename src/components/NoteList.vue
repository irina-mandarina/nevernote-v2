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
    <h1 id="wellcome-msg">Wellcome {{ name }}</h1>
    <h3> Your notes </h3>
    <div id="notes" class="notes-container">
        <NoteAdder :username="username" />
        <Note v-for="note in notes" :id="note.id" :title="note.title" :content="note.content" :date="note.date" />
    </div>
</template>
    
<style scoped>
h3 {
    display: flex;
    margin: 30px auto;
}

#wellcome-msg {
    width:500px;
    margin: 0 auto;
    text-align: center;
}

.notes-container {
    display: flex;
    margin: auto;
    padding: 50px;
    height: 200px;
    flex-wrap: wrap;
    -ms-flex-wrap: wrap;
}
</style>
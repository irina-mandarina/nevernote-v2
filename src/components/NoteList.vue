<script setup>
    import { ref } from 'vue'
    import { saveNote, getNoteCount, deleteNoteFromStorage, getNoteList } from '../js/SaveNote.js'
    import Note from './Note.vue'
    import NoteAdder from './NoteAdder.vue'

    defineProps({
        username: String
    })

    let notes = ref(getNoteList(username))
    let noteCount = ref(getNoteList(username))

    function handleSaveNote({title, content, date}) {
        saveNote(this.username, title, content, date)
        this.noteCount++
        this.notes.push({id: this.noteCount, title, content, date})
    }

    function deleteNoteFromList(id) {
        this.notes = this.notes.filter((note) => note.id !== id)
        deleteNoteFromStorage(id)
    }
</script>
    
<template>
    <h1 id="wellcome-msg">Wellcome {{ username }}</h1>
    <div id="notes" class="notes-container">
        <h3> Your notes </h3>
        <NoteAdder :username="username" @save-note="handleSaveNote" />
        <Note v-for="note in notes" :id="note.id" :title="note.title" :content="note.content" :date="note.date" @delete-note="deleteNoteFromList" />
    </div>
</template>
    
<style scoped>
#wellcome-msg {
    width:500px;
    margin: 0 auto;
    text-align: center;
}

.notes-container {
    margin: auto;
    padding: 50px;
    height: 200px;
}
</style>
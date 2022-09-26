<script setup>
    // import { ref } from 'vue'
    import { store } from '../store.js'
    // import { saveNote, getNoteCount, deleteNoteFromStorage, getNoteList } from '../js/SaveNote.js'
    import Note from './Note.vue'
    import NoteAdder from './NoteAdder.vue'

    const {username} = defineProps({
        username: String
    })
    
    let notes = store.getters.getNotes
    let noteCount = store.getters.getNoteCount  

    // function handleSaveNote({title, content, date}) {
    //     notes.value = notes.value.push({id: noteCount, user: username, title, content, date}) // this line doesn't work 
    //     noteCount.value++
    //     saveNote(username, title, content, date)
    // }

    // function deleteNoteFromList(id) {
    //     notes.value = notes.value.filter((note) => note.id !== id) // this one too (i think)
    //     try {
    //         deleteNoteFromStorage(id)
    //     }
    //     catch (e) {
    //         toastr['error'](e)
    //     }
    // }
</script>
    
<template>
    <h1 id="wellcome-msg">Wellcome {{ username }}</h1>
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
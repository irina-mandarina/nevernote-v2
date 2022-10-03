<script setup>
    import { ref } from 'vue'
    import store from '../store.js'

    let title = ref(null)
    let content = ref(null)
</script>
    
<template>
    <div id="create-note" class="inline-block w-1/4 rounded-3xl p-12 m-6 shadow-lg">
        <input v-model="title" type="text" placeholder="Title" class="break-words font-serif text-md text-center py-8">
        <textarea class="mx-auto mb-24 h-1/2 flex border border-white w-3/4 tracking-wide text-sm italic text-gray-400" v-model="content" type="text" placeholder="Content"></textarea>
        <button class="button mb-4" @click="store.dispatch('saveNote', {title, content})">Add to notes</button>
    </div>
</template>
    
<style scoped>

input, 
textarea {
    margin-left: auto;
    margin-right: auto;
    display: flex;
    border: 1px solid #bba6b9;
    box-shadow: rgba(0, 0, 0, 0.05) 1.95px 1.95px 2.6px;
    border-radius: 8px;
    margin-bottom: 20px;
    padding: 10px;
    letter-spacing: 1px;
    width: 80%;
}

.note-textarea {
    resize: none;
    max-width: 80%; 
    max-height: 100%;
}

</style>
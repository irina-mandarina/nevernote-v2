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
    <div id="note" class="note-container">
        <button class="note-options" @click="store.dispatch('deleteNote', {noteId: id})">x</button>
        <div>
            <h3 class="note-title"> {{ title }} </h3>
            <p class="note-timestamp">
                {{ date }}
            </p>
            <p class="note-content"> 
                {{ content }}
            </p>
        </div>
    </div>
</template>
    
<style scoped>

.note-title,
.note-content {
    word-wrap: break-word;
    -ms-word-wrap: break-word;
}
.note-container {
    display: inline-block;
    width: 25%;
    border-radius: 20px;
    padding: 20px;
    margin: 10px;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
}

.note-options {
    background-color: transparent;
    color: #a0144f;
    display: inline;
    float: right;
    font-size: 15pt;
    border: none;
}

.note-options:focus,
.note-options:focus-visible {
    border: none;
    outline: none;
}

.note-timestamp {
    font-style: italic;
    font-size: 10pt;
}
</style>
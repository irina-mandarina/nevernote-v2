<script setup>
    import { ref } from 'vue'

    const emit = defineEmits(['saveNote'])

    let title = ref(null)
    let content = ref(null)

    function addNote({title, content}) {
        let today = new Date()
        let date = today.getFullYear()+'.'+ (today.getMonth()+1) + '.' + today.getDate()
        let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
        let dateTime = date + ' ' + time
        emit('saveNote', {title, content, date: dateTime})
    }
</script>
    
<template>
    <div id="create-note" class="note-container">
        <input v-model="title" type="text" placeholder="Title">
        <textarea class="note-textarea" v-model="content" type="text" placeholder="Content"></textarea>
        <button class="button" @click="addNote({title, content})">Add to notes</button>
    </div>
</template>
    
<style scoped>
.note-container {
    width: 25%; 
    border-radius: 20px;
    padding: 20px;
    margin: 10px;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
}

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
    height: 80px;
    max-width: 80%; 
    max-height: 100%;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

button {
    margin-left: auto;
    margin-right: auto;
    display: flex;
}
</style>
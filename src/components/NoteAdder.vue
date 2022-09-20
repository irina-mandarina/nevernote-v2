<script setup>
    import { ref } from 'vue'
    defineProps({
        username: String
    })

    let title = ref(null)
    let content = ref(null)
    let date = ref(null)

    function addNote(title, content) {
        let today = new Date()
        let date = today.getFullYear()+'.'+(today.getMonth()+1)+'.'+today.getDate()
        let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
        let dateTime = date + ' ' + time
        this.date = dateTime
        this.$emit('saveNote', {title, content, date: dateTime})
    }
</script>
    
<template>
    <div id="create-note" class="note-container">
        <input class = "note-input" v-model="title" type="text" v-bind:placeholder="title">
        <textarea class = "note-textearea" v-model="content" type="text" v-bind:placeholder="content"> </textarea>
        <button class="button" @click="addNote(title, content)">Add to notes</button>
    </div>
</template>
    
<style scoped>
.note-container {
    display: inline-block;
    width: 30%;
    border-radius: 20px;
    padding: 20px;
    margin: 10px;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
}

.note-input, 
.note-textarea {
    border: 1px solid #bba6b9;
    box-shadow: rgba(0, 0, 0, 0.05) 1.95px 1.95px 2.6px;
    border-radius: 8px;
    margin: 20px;
    padding: 10px;
    letter-spacing: 1px;
}

.note-textarea {
    /* resize: vertical; */
    height: 100px;
    max-width: 80%; 
    max-height: 100%;
    width: 70%;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
</style>
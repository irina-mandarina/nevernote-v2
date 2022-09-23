<script setup>

    defineProps({
        id: Number,
        title: String,
        content: String,
        date: String
    })
</script>
    
<template>
    <div id="note" class="note-container">
        <button class="note-options" @click="this.$emit('deleteNote', id)">x</button>
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
    background-color: white;
    color: #a0144f;
    display: inline;
    float: right;
    font-size: 15pt;
}

.note-timestamp {
    font-style: italic;
    font-size: 10pt;
}
</style>
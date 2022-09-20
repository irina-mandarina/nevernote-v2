<script setup>
    import { ref } from 'vue'
    
    const navItems = ref([
        {ref:"goToAllNotes", label: "All notes"}, 
        {ref:"goToMyProfile", label: "My profile"}
    ])
</script>
    
<template>
    <nav>
        <ul id="nav-ul">
            <li class="nav-item" v-for="item in navItems" @click="this.$emit(item.ref)">{{ item.label }}</li>
        </ul>
    </nav>
</template>
    
<style scoped>
    nav {
        top: 0px;
        position: fixed;
        width: 100%;
        font-size: 18pt;
    }

    #nav-ul {
        list-style-type: none;
        white-space:nowrap;
    }

    .nav-item {
        position: relative;
        float: inline-start;
        padding: 20px 10px;
        text-decoration: none;
        display: inline;
        text-decoration: none;
        color: gray;
    }

    .nav-item:hover {
        color: #a0144f;
        transition: 0.5s;
    }

</style>
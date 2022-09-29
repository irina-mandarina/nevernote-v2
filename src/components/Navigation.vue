<script setup>
    import { ref } from 'vue'
    import store from '../store.js'
    
    const navItems = ref([
        {ref:"notes", label: "All notes"}, 
        {ref:"profile", label: "My profile"}
    ])
</script>
    
<template>
    <nav>
        <ul id="nav-ul">
            <li class="nav-item" v-for="item in navItems"> <router-link class="link" :to="'/'+item.ref"> {{ item.label }} </router-link></li>
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

    .link {
        text-decoration: none;
    }

</style>
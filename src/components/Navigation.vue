<script setup>
    import { ref } from 'vue'
    const navItems = ref([
        {ref:"notes", label: "All notes"}, 
        {ref:"profile", label: "My profile"}
    ])

    function borderBottom() {
        const nav = document.querySelector('.border-bottom')
        nav.classList.toggle('extend')
        nav.classList.toggle('change-color')
    }

</script>
    
<template>
    <div class="w-full h-24 top-0 left-0" @mouseover="borderBottom()" @mouseleave="borderBottom()">
        <nav class="w-full text-md top-0 h-16">
            <ul id="absolute top-0 left-0 list-none whitespace-nowrap">
                <li class="pt-2 pb-6 pr-12 hover:text-ingigo-500 text-lg text-color-purple inline-flex no-underline transition-all duration-300 float-left" v-for="item in navItems"> <router-link class="text-color-purple" :to="'/'+item.ref"> {{ item.label }} </router-link></li>
            </ul>
        </nav>
        <div class="absolute top-48 border-bottom w-1/2">
        </div>
    </div>
</template>
    
<style scoped>
    .text-color-purple {
        color:rgb(141, 43, 226);
    }
    .border-bottom {
        position: absolute;
        left: 0;
        background: linear-gradient(to right, rgba(255, 0, 200, 0.464), rgba(47, 0, 128, 0.447));
        height: 1px;
        transition: all 0.5s ease-in-out;
    }

    .extend {
        transform: scaleX(2);
        background-color: linear-gradient(to right, rgba(128, 0, 255, 0.488), rgba(149, 0, 255, 0.756));
    }

    .change-color {
        background-color: linear-gradient(to right, rgba(170, 0, 255, 0.69), rgba(30, 0, 255, 0.756));   
    }

</style>
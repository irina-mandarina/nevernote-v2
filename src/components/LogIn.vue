<script setup>
    import { ref } from 'vue'
    import router from '../router.js'
    import store from '../store.js'
    
    let username = ref('alex')
    let password = ref('alex1')
</script>
    
<template>
    <div class="shadow-lg inline-block w-1/2 mt-48">
        <div class="img-mask h-48" onmouseover="changeColors(this)" onmouseout="changeColorsOut(this)">
            <span class="log-in-bg bg-violet-800 mx-auto flex h-48"></span>
        </div>

        <input type="text" class="flex mx-auto px-6 py-2 my-6 shadow-sm rounded-md" v-model="username" placeholder="username">
        <input type="password" class="flex mx-auto px-6 py-2 my-6 shadow-sm rounded-md" v-model="password" placeholder="Password">

        <button class="flex mx-auto px-6 py-2 my-6 shadow-sm rounded-md" @click="store.dispatch('logIn', {username, password})">Log in</button>

        <button class="transparent-button mb-12">
            <h4 @click="router.push('/signup')">
                I don't have an account yet.
            </h4>
        </button>
        
    </div>
</template>
    
<style scoped> 
    .transparent-button {
        background-color: transparent;
    }
    .transparent-button:focus,
    .transparent-button:focus-visible,
    .transparent-button:hover {
    outline: none;
    border: 1px solid transparent;
    }

    h4:hover,
    .log-in-bg:hover {
        filter: drop-shadow(0 0 2em #646cffaa);
        transition: 0.3s;
    }
    .log-in-bg {
        background-color: #646cff5c;
    }
    .img-mask {
        -webkit-mask-image: url(src/assets/images/LogInImg.png);
        mask-image: url(src/assets/images/LogInImg.png);
        -webkit-mask-repeat: no-repeat;
        mask-repeat: no-repeat;
        mask-size: 20%;
        -webkit-mask-size: 20%;
        -webkit-mask-position: center;
        mask-position: center;
    }
    .log-in-bg:hover {
        filter: drop-shadow(0 0 2em #646cffaa);
        transition: 0.3s;
    }
</style>
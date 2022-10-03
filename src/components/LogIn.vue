<script setup>
    import { ref } from 'vue'
    import router from '../router.js'
    import store from '../store.js'
    
    let username = ref('alex')
    let password = ref('alex1')
</script>
    
<template>
    <div class="w-500 b-2 p-5 items-center">
        <div class="img-mask" onmouseover="changeColors(this)" onmouseout="changeColorsOut(this)">
            <span class="log-in-bg"></span>
        </div>

        <input type="text" class="flex border-1 border-indigo-500 hover:border-t-4 focus:border-blue" v-model="username" placeholder="username">
        <input type="password" class="flex border-1 border-indigo-500 hover:border-t-4 focus:border-blue" v-model="password" placeholder="Password">

        <button class="" @click="store.dispatch('checkLoginInfo', {username, password})">Log in</button>

        <button class="">
            <h4 @click="router.push('/signup')">
                I don't have an account yet.
            </h4>
        </button>
        
    </div>
</template>
    
<style scoped>
/* .log-in-input {
    display: flex;
    margin: auto;
    border: 1px solid #bba6b9;
    box-shadow: rgba(0, 0, 0, 0.05) 1.95px 1.95px 2.6px;
    border-radius: 8px;
    margin: 20px;
    height: 25px;
    padding: 10px;
    letter-spacing: 1px;
}

.log-in-container {
    width: 500px;
    border-radius: 20px;
    padding: 50px;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    place-items: center;
}

.log-in-input {
    margin-left: auto;
    margin-right: auto;
    display: flex;
    margin-bottom: 30px;
    color: gray;
}

.log-in-button {
    margin-left: auto;
    margin-right: auto;
    display: flex;
    margin-bottom: 30px;
}
 
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
*/
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

.log-in-bg {
    background-color: #646cff5c;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    margin-bottom: 30px;
    height: 100px;
}

.log-in-bg:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
    transition: 0.3s;
}

</style>
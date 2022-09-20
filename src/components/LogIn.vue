<script setup>
    import { ref } from 'vue'
    import { validateLoginInfo } from '../js/LoginValidation.js'
    
    let username = ref(null)
    let password = ref(null)

    function checkLoginInfo(username, password) {
        try {
            validateLoginInfo(username, password)
        }
        catch (e) {
            toastr["error"](e.message)
        }
        this.$emit('logIn', {user: username})
    }
</script>
    
<template>
    <div class="log-in-container">
        <img class="log-in-img" src="src/assets/images/LogInImg.png"/>

        <input type="text" class="log-in-input" v-model="username" v-bind:placeholder="username">
        <input type="password" class="log-in-input" v-model="password" v-bind:placeholder="password">

        <button class="log-in-button" @click="checkLoginInfo(username, password)">Log in</button>

        <button class="log-in-button transparent-button">
            <h4 @click="this.$emit('goToSignUp')">
                I don't have an account yet.
            </h4>
        </button>
        
    </div>
</template>
    
<style scoped>
.log-in-input {
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

.log-in-img {
    display: flex;
    width: 20%;
}

.log-in-input {
    color: gray;
}

.log-in-button {
    display: flex;
    margin: 20px;
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
</style>
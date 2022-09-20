<script setup>
    import { ref } from 'vue'
    import { saveUserInfo, isValidUsername, isTaken, isValidPassword } from '../js/UserRegistration.js';
    
    const username = ref(null)
    const password = ref(null)
    const name = ref(null)
    const age = ref(null)
    const address = ref(null)

    function registerUser(name, age, address, username, password) {
        if (age < 10) {
            toastr["error"]("You must be at least 10yo to register.")
        }
        else if (!isValidUsername(username)) {
            toastr["error"]("The username you enterered contains invalid characters.")
        }
        else if (isTaken(username)) {
            toastr["error"]("This username is already taken.")
        }
        else if (!isValidPassword(password)) {
            toastr["error"]("The entered password is not valid. Use at least 4 characters and 1 number.")
        }
        else {
            saveUserInfo(name, age, address, username, password)
            this.$emit('logIn', {username, password})
        }
    }
</script>
    
<template>
    <div class="sign-up-container">
        <img class="sign-up-img" src="src/assets/images/LogInImg.png"/>
        <input type="text" class="sign-up-input" v-model="name" v-bind:placeholder="name">
        <input type="number" class="sign-up-input" v-model="age" v-bind:placeholder="age">
        <input type="text" class="sign-up-input" v-model="address" v-bind:placeholder="address">
        <input type="text" class="sign-up-input" v-model="username" v-bind:placeholder="username">
        <input type="password" class="sign-up-input" v-model="password" v-bind:placeholder="password">
        <button class="button sign-up-button" @click="registerUser(name, age, address, username, password)">Sign up</button>
        <button class="transparent-button">
            <h4 @click="goToLogIn">
                I already have an account.
            </h4>
        </button>
    </div>
</template>
    
<style scoped>
.sign-up-input {
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

.sign-up-container {
    width: 500px;
    border-radius: 20px;
    padding: 50px;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    place-items: center;
}

.sign-up-img {
    display: flex;
    width: 20%;
}

.sign-up-input {
    color: gray;
}

.sign-up-button {
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
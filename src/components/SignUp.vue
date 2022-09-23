<script setup>
    import { ref } from 'vue'
    import { saveUserInfo, isValidUsername, isTaken, isValidPassword } from '../js/UserRegistration.js';
    
    const emit = defineEmits(['logIn', 'goToLogIn'])

    const username = ref(null)
    const password = ref(null)
    const name = ref(null)
    const age = ref(null)
    const address = ref(null)

    function registerUser({name, age, address, username, password}) {
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
            emit('logIn', {user: username})
        }
    }
</script>
    
<template>
    <div class="sign-up-container">
        <div class="img-mask" onmouseover="changeColors(this)" onmouseout="changeColorsOut(this)">
            <span class="sign-in-bg"></span>
        </div>

        <input type="text" class="sign-up-input" v-model="name" placeholder="Name">
        <input type="number" class="sign-up-input" v-model="age" placeholder="Age">
        <input type="text" class="sign-up-input" v-model="address" placeholder="Address">
        <input type="text" class="sign-up-input" v-model="username" placeholder="username">
        <input type="password" class="sign-up-input" v-model="password" placeholder="Password">
        <button class="button sign-up-button" @click="registerUser({name, age, address, username, password})">Sign up</button>
        <button class="transparent-button">
            <h4 @click="emit('goToLogIn')">
                I already have an account.
            </h4>
        </button>
    </div>
</template>
    
<style scoped>
.sign-up-input {
    margin-left: auto;
    margin-right: auto;
    display: flex;
    margin-bottom: 30px;
    border: 1px solid #bba6b9;
    box-shadow: rgba(0, 0, 0, 0.05) 1.95px 1.95px 2.6px;
    border-radius: 8px;
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
    margin-left: auto;
    margin-right: auto;
    display: flex;
    margin-bottom: 30px;
    width: 20%;
}

.sign-up-input {
    margin-left: auto;
    margin-right: auto;
    display: flex;
    margin-bottom: 30px;
    color: gray;
}

.sign-up-button {
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
.sign-up-img:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
    transition: 0.3s;
}
.sign-in-bg:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
    transition: 0.3s;
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

.sign-in-bg {
    background-color: #646cff5c;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    margin-bottom: 30px;
    height: 100px;
}

.sign-in-bg:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
    transition: 0.3s;
}
</style>
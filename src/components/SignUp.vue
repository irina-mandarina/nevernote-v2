<script setup>
    import { ref } from 'vue'
    import router from '../router.js'
    import store from '../store.js'
    // import v$ from '../vuelidation.js'

    // export default {
    //     setup () {
    //         const state = reactive({
    //             username: null,
    //             password: null,
    //             address: null,
    //             age: 0,
    //             name: null
    //         })
    //         const rules = {
    //             username: { required }, 
    //             password: { required }
    //         }

    //         const v$ = useVuelidate(rules, state)

    //         return { state, v$ }
    //     }
    // }

    // const emit = defineEmits(['logIn', 'goToLogIn'])

    const username = ref(null)
    const password = ref(null)
    const name = ref(null)
    const age = ref(null)
    const address = ref(null)

</script>
    
<template>
    <div class="shadow-lg inline-block w-1/2 h-700">
        <div class="img-mask h-48" onmouseover="changeColors(this)" onmouseout="changeColorsOut(this)">
            <span class="sign-up-bg bg-violet-800 mx-auto flex h-48"> </span>
        </div>

        <input type="text" class="flex mx-auto px-6 py-2 my-6 shadow-sm rounded-md" v-model="name" placeholder="Name">
        <input type="number" class="flex mx-auto px-6 py-2 my-6 shadow-md rounded-md" v-model="age" placeholder="Age">
        <input type="text" class="flex mx-auto px-6 py-2 my-6 shadow-md rounded-md" v-model="address" placeholder="Address">
        <input type="text" class="flex mx-auto px-6 py-2 my-6 shadow-md rounded-md" v-model="/* v$.state. */username" placeholder="username">
        <!-- <div class="input-errors" v-for="error of v$.username.$errors" :key="error.$uid">
            <div class="error-msg">{{ error.$message }}</div>
        </div> -->
        <input type="password" class="flex mx-auto px-6 py-2 my-6 shadow-md rounded-md" v-model="password" placeholder="Password">
        <button class="button flex mx-auto px-6 py-2 my-6 shadow-md rounded-md" @click="store.dispatch('registerUser', {name, age, address, username, password})" >Sign up</button>
        <button class="transparent-button mb-12">
            <h4 @click="router.push('/login')">
                I already have an account.
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
    .sign-up-img:hover {
        filter: drop-shadow(0 0 2em #646cffaa);
        transition: 0.3s;
    }
    .sign-up-bg:hover {
        filter: drop-shadow(0 0 2em #646cffaa);
        transition: 0.3s;
    }

    .img-mask {
        -webkit-mask-image: url(src/assets/images/LogInImg.png);
        mask-image: url(src/assets/images/LogInImg.png);
        -webkit-mask-repeat: no-repeat;
        mask-repeat: no-repeat;
        mask-size: 20%;
        mask-mode: luminance;
        -webkit-mask-size: 20%;
        -webkit-mask-position: center;
        mask-position: center;
    }

    .sign-up-bg {
        background-color: #646cff5c;
    }

    .sign-up-bg:hover {
        filter: drop-shadow(0 0 2em #646cffaa);
        transition: 0.3s;
    }
    .h-700 {
        margin-top: 100px;
        height: fit-content;
    }
</style>
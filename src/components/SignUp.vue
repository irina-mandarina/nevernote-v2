<script setup>
    import { ref } from 'vue'
    import router from '../router.js'
    import store from '../store.js'
    import v$ from '../vuelidation.js'

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
    <div :class="{ error: v$.username.$errors.length }" class="shadow-lg inline-block w-1/3 h-700">
        <div class="img-mask h-48" onmouseover="changeColors(this)" onmouseout="changeColorsOut(this)">
            <span class="sign-up-bg bg-violet-800 mx-auto flex h-48"> </span>
        </div>

        <div class="relative z-0 my-4">
            <input v-model="name" type="text" id="name" class="block py-2.5 px-0 w-3/4 text-sm text-gray-900 bg-transparent border-0 border-b-2 rounded-xl border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer mx-auto" placeholder=" " />
            <label for="name" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-3 -z-10 origin-[0] peer-focus:left-8 peer-focus:text-violet-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Name</label>
        </div>

        <div class="relative z-0 my-4">
            <input v-model="v$.age.$model" type="number" id="age" class="block py-2.5 px-0 w-1/4 text-sm text-gray-900 bg-transparent border-0 border-b-2 rounded-xl border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer mx-auto" placeholder=" " />
            <label for="age" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-3 -z-10 origin-[0] peer-focus:left-36 peer-focus:text-violet-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Age</label>
            <div class="" v-for="(error, index) in v$.age.$errors" :key="index">
                <p id="outlined_error_help" class="mt-2 text-xs text-red-600 dark:text-red-400"><span class="font-medium">!</span> {{ error.$message }} </p>    
            </div>
        </div>
        
        <div class="relative z-0 my-4">
            <input v-model="address" type="text" id="address" class="block py-2.5 px-0 w-3/4 text-sm text-gray-900 bg-transparent border-0 border-b-2 rounded-xl border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer mx-auto" placeholder=" " />
            <label for="address" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-3 -z-10 origin-[0] peer-focus:left-36 peer-focus:text-violet-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Address</label>
        </div>

        <div class="relative z-0 my-4">
            <input v-model="v$.username.$model" type="text" id="username" class="block py-2.5 px-0 w-3/4 text-sm text-gray-900 bg-transparent border-0 border-b-2 rounded-xl border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer mx-auto" placeholder=" " />
            <label for="username" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-3 -z-10 origin-[0] peer-focus:left-36 peer-focus:text-violet-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">username</label>
            <div class="" v-for="(error, index) in v$.username.$errors" :key="index">
                <p id="outlined_error_help" class="mt-2 text-xs text-red-600 dark:text-red-400"><span class="font-medium">!</span> {{ error.$message }} </p>    
            </div>
        </div>  
        
        <div class="relative z-0 my-4">
            <input v-model="v$.password.$model" type="password" id="password" class="block py-2.5 px-0 w-3/4 text-sm text-gray-900 bg-transparent border-0 border-b-2 rounded-xl border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer mx-auto" placeholder=" " />
            <label for="password" class="absolute ml-0 text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-3 -z-10 origin-[0] peer-focus:left-36 peer-focus:text-violet-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">password</label>
            <div class="" v-for="(error, index) in v$.password.$errors" :key="index">
                <p id="outlined_error_help" class="mt-2 text-xs text-red-600 dark:text-red-400"><span class="font-medium">!</span> {{ error.$message }} </p>    
            </div>
        </div> 

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
import { reactive, computed } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { minValue, required } from '@vuelidate/validators'

const state = reactive({
    username: null,
    password: null,
    age: null
})

const rules = {
    username: { required },
    password: { required },
    age: {required, minLength: minValue(16) }
}

const v$ = useVuelidate(rules, state)

export default v$
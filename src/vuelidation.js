import { reactive, computed } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { required } from '@vuelidate/validators'

export default {
    setup () {
        const state = reactive({
            username: null,
            password: null
        })
        const rules = {
            username: { required },
            password: { required }
        }
        const v$ = useVuelidate(rules, state)
        return {
            v$, state
        }
    }
}
import {createRouter , createWebHistory} from 'vue-router'
import BPSignup from '../views/BPSignup.vue'
import BPLogin from '../views/BPLogin.vue'
import BPRecoverPass from '../views/BPRecoverPass.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'login',
            component: BPLogin
        },
        {
            path: '/signup',
            name: 'signup',
            component: BPSignup

        },
        {
            path: '/recover-pass',
            name: 'recover-pass',
            component: BPRecoverPass
        }
    ]
})

export default router
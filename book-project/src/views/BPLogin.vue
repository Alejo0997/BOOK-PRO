<template>
    <div class="login d-flex flex-column justify-center align-center">
        <v-card class="form1 pa-10">
            <v-card-title>
                <h1 class="text-center">
                    Iniciar sesión
                </h1>
            </v-card-title>
            <v-card-text>
                <v-form fast-fail @submit.prevent>
                    <BPInput 
                        class="mt-5"
                        v-model="email" 
                        label="Email" 
                    />
                    <BPInput
                        class="mt-5"
                        v-model="password" 
                        label="Contraseña" 
                        type="password"
                    />
                    <BPButton 
                        class="mt-10" 
                        size="large" 
                        color="primary"
                        block
                    >
                        Iniciar sesión
                    </BPButton>
                    <p class="text-center mt-8">Continuando usted acepta nuestros 
                        <a href=" #">terminos de uso y condiciones</a>
                    </p>
                    <div class="mt-8 d-flex ga-5 align-center justify-space-between">
                        <span>Otros errores de inicio de <a href="#">sesión</a></span>
                        <span><a href="#">Olvidó su contraseña</a></span>
                    </div>
                </v-form>
            </v-card-text>
            <div class="mt-5">
                <BPThemeToggle />
            </div>
        </v-card>
        <div> 
            <p class="text-center mt-5">¿Eres nuevo en la plataforma?</p>
            <BPButton 
                class="mt-5" 
                size="x-large" 
                variant="outlined"
                block
                @click="goToSignUp"
            >
                Regístrate
            </BPButton>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import BPThemeToggle from '@/components/atoms/BPThemeToggle.vue';
import BPButton from '@/components/atoms/BPButton.vue';
import BPInput from '@/components/atoms/BPInput.vue';
import { useRouter } from 'vue-router';

const email = ref('')
const password = ref('')
const message = ref('')
const router = useRouter()

async function register() {
    try {
        const response = await axios.post('http://localhost:3000/register', {
            email: email.value,
            password: password.value,
        });
        message.value = response.data.message;
    } catch (error) {
        message.value = error.response.data.message || 'Error al registrarse';
    }
}

function goToSignUp() {
    router.push('/signup')
}

</script>

<style scoped>
.form1 {
    max-width: 900px;
    width: 92%;
    max-height: 600px;
    height: 82%;
}

.login {
    background-color: var(--background-secondary);
    height: 100vh;
    width: 100vw;
}
</style>
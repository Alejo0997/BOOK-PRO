<template>
    <v-card class="form1 pa-15">
        <v-card-title class="">
            <h1 class="title">Iniciar sesión</h1>
        </v-card-title>
        <v-card-text class="mt-5">
            <v-form fast-fail @submit.prevent>
                <v-text-field rounded="xl" v-model="mail" label="Mail"></v-text-field>

                <v-text-field rounded="xl" v-model="password" label="Password" type="password"></v-text-field>
                <v-btn class="btn mt-10 bg-grey-darken-1" rounded="xl" size="large" block>Log In</v-btn>
                <p class="terms">Continuando usted acepta nuestros <a href=" #">terminos de uso y
                        condiciones</a></p>

                <div class="mt-5 d-flex  ga-5 align-center justify-space-between">
                    <p>Otros errores de inicio de <a href="#">sesión</a></p>
                    <p><a href="#">Olvidó su contraseña</a></p>
                </div>
                <!-- </BPButton> -->
            </v-form>
        </v-card-text>
        <div class="button">
            <BPThemeToggle />
        </div>
    </v-card>
</template>

<script setup>
import { ref } from 'vue';
import BPThemeToggle from '@/components/atoms/BPThemeToggle.vue';
import BPButton from '@/components/atoms/BPButton.vue';
// import axios from 'axios';

const email = ref('')
const password = ref('')
const message = ref('')

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
</script>

<style scoped>
.form1 {
    width: 35%;
    height: 60%;
    border-radius: 5%;
}

.title {
    text-align: center;
}

.terms {
    text-align: center;
    margin-top: 10%;
    padding-bottom: 10%;
}

.button {
    display: flex;
    justify-content: baseline;
    margin-top: 20px
}
</style>
<template>
    <div class="signup d-flex flex-column justify-center align-center">
        <v-card class="card pa-10">
            <div>
                <v-card-title>
                    <h1>Crea una cuenta</h1>
                    <p>¿Ya tienes una cuenta? <router-link to="/">Inicia sesión</router-link></p>
                </v-card-title>
                <v-card-text>
                    <v-form>
                        <div class="d-flex ga-5 mt-4">
                            <BPInput
                                label="Nombre"
                                v-model="firstName"
                                color="secondary"
                            />
                            <BPInput
                                label="Apellido"
                                v-model="lastName"
                            ></BPInput>
                        </div>
                        <BPInput
                            class="mt-4"
                            label="Email"
                            v-model="email"
                        ></BPInput>
                        <div class="d-flex ga-5 mt-4">
                            <BPInput
                                label="Contraseña"
                                v-model="password"
                                type="password"
                            ></BPInput>
                            <BPInput
                                label="Confirmar contraseña"
                                v-model="password"
                                type="password"
                            ></BPInput>
                        </div>
                        <p class="mt-3">
                            Usa por lo menos 8 caracteres, una letra mayúscula, 
                            una letra minúscula y un número.
                        </p>
                        <div class="d-flex align-center ga-5 mt-5">
                            <BPButton
                                color="primary"
                                size="x-large"
                            >
                                Crear
                            </BPButton>
                            <BPButton  
                                color="error"
                                @click="goToLogin"
                                variant="outlined"
                                size="x-large"
                            >
                                Cancelar
                            </BPButton>
                        </div>
                    </v-form>
                </v-card-text>
            </div>
            <div class="position-relative d-flex justify-center align-center">
                <img src="../assets/book2.png" class="image">
                <BPThemeToggle class="absolute-button position-absolute" color="primary" />
            </div>
        </v-card>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const firstName = ref('');
const lastName = ref('');
const email = ref('');
const password = ref('');

function goToLogin() {
    router.push('/');
}

</script>

<style scoped>
.signup {
    background-color: var(--background-secondary);
    height: 100vh;
    width: 100vw;
}

.card {
    max-width: 1500px;
    width: 92%;
    max-height: 600px;
    height: 82%;
    display: grid;
    grid-template-columns: 60% 40%;
}

.image {
    width: 75%;
    height: 75%;
}

.absolute-button {
    top: 10px;  
    right: 10px;   
}
</style>
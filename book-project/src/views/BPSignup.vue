<template>
        <v-card class="card pa-6">
            <div>
                <v-card-title>
                    <h1>Crea una cuenta</h1>
                    <p>¿Ya tienes una cuenta? <a href="">Inicia sesión</a></p>
                </v-card-title>
                <v-card-text>
                    <v-form>
                        <div class="d-flex ga-5 mt-4">
                            <BPInput
                                label="First Name"
                                v-model="firstName"
                                color="secondary"
                            />
                            <BPInput
                                label="Last Name"
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
                                label="Password"
                                v-model="password"
                                type="password"
                            ></BPInput>
                            <BPInput
                                label="Confirm Password"
                                v-model="password"
                                type="password"
                            ></BPInput>
                        </div>
                        <p class="mt-3">
                            Usa por lo menos 8 caracteres, una letra mayúscula, 
                            una letra minúscula y un número.
                        </p>
                        <BPButton
                            class="mt-5"
                            color="secondary"
                            size="large"
                        >
                            Crea una cuenta
                        </BPButton>
                    </v-form>
                </v-card-text>
            </div>
            <div class="image-container">
                <img src="../assets/book2.png" class="image">
                <BPThemeToggle class="absolute-button" color="primary" />
            </div>
        </v-card>
</template>

<script setup>
import BPInput from '@/components/atoms/BPInput.vue';
import BPButton from '@/components/atoms/BPButton.vue';
import BPThemeToggle from '@/components/atoms/BPThemeToggle.vue';
import { ref } from 'vue';

const firstName = ref('');
const lastName = ref('');
const email = ref('');
const password = ref('');

</script>

<style scoped>
.card {
    width: 53%;
    height: 50%;
    display: grid;
    grid-template-columns: 60% 40%;
}

.image-container {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
}

.image {
    width: 75%;
    height: 75%;
}

.absolute-button {
    position: absolute;
    top: 10px;  
    right: 10px;   
}
</style>
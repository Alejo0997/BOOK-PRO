<template>
    <div class="login d-flex flex-column justify-center align-center">
        <v-card class="form1 pa-10">
            <v-card-title>
                <h1 class="text-center text-no-wrap">
                    Recuperar contraseña
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
                        v-model="currentPassword" 
                        label="Contraseña actual" 
                        type="password"
                    />
                    <BPInput
                        class="mt-5"
                        v-model="newPassword" 
                        label="Nueva contraseña" 
                        type="password"
                    />
                    <div class="d-flex align-center justify-space-between mt-10 ga-5">
                        <BPButton 
                            color="primary"
                            size="x-large"
                        >
                            Recuperar
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
            <div class="mt-5">
                <BPThemeToggle />
            </div>
        </v-card>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const email = ref('');
const currentPassword = ref('');
const newPassword = ref('');

function goToLogin() {
    router.push('/');
}

</script>

<style scoped>

.login {
    background-color: var(--background-secondary);
    height: 100vh;
    width: 100vw;
}

.form1 {
    max-width: 550px;
    min-width: 400px;
    width: 92%;
    max-height: 580px;
    height: 82%;
}
</style>


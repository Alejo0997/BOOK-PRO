<template>
    <BPSideMenu />
    <div class="bp-user-profile d-flex flex-column align-center ga-2 pa-2">
        <div class="user h-25 d-flex ga-5">
            <v-card class="w-50">
                wrefwerf
            </v-card>
            <v-card class="w-50">
                wrefwrf
            </v-card>
        </div>
        <v-card class="books-section pa-5 mt-3">
            <div class="d-flex justify-center mb-5">
                <BPButton @click="showReadBooks" :class="{ active: view === 'read' }">Leídos</BPButton>
                <BPButton @click="showInterestedBooks" :class="{ active: view === 'interested' }">
                    Me Interesa
                </BPButton>
            </div>
            <BPIterator />
        </v-card>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import BPButton from '@/components/atoms/BPButton.vue';
import BPIterator from '@/components/atoms/BPIterator.vue';
import BPSideMenu from '@/components/organisms/BPSideMenu.vue';

const view = ref('read');

function showReadBooks() {
    view.value = 'read';
}

function showInterestedBooks() {
    view.value = 'interested';
}
</script>

<style scoped>
.bp-user-profile {
    width: 100vw;
    height: 100vh;
    background-color: var(--background-secondary);
}

.books-section {
    height: 100%;
    width: 80%;
    overflow: hidden;
}

.active {
    background-color: #2c89f9;
    color: white;
}

.user {
    width: 80%;
}

</style>

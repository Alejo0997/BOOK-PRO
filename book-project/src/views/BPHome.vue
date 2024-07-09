<template>
    <div class="home">
        <BPSignup />
    </div>
</template>

<script setup>
import BPSignup from '@/views/BPSignup.vue';
</script>

<style scoped>
.home {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
    background-color: var(--background-secondary);
}
</style>
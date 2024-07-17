<template>
    <div class="bplogin">
        <BPLogin />
    </div>
</template>

<script setup>
import BPLogin from '@/views/BPLogin.vue'

</script>

<style>
.bplogin {
    background-color: var(--background-secondary);
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
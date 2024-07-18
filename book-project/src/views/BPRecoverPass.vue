<template>
    <div>
        <v-card class="form1">
            <div class="d-flex justify-center align-center">
                <v-card-text>
                    <v-form>
                        <div class="d-flex ga-5">
                            <BPInput
                                label="Email"
                                v-model="email"
                            ></BPInput>
                        </div>
                        <BPButton
                            class="mt-5"
                            color="primary"
                            size="x-large"
                        >
                            Recuperar contraseña
                        </BPButton>
                    </v-form>
                </v-card-text>
            </div>
        </v-card>
    </div>
</template>

<script lang="ts" setup>
</script>

<style scoped>
</style>


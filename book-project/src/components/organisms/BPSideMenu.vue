<template>
    <v-card>
        <v-layout>
            <v-navigation-drawer 
                v-model="drawer" 
                :rail="rail" 
                expand-on-hover
                permanent
            >
                <v-list>
                    <v-list-item 
                        prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"
                        subtitle="sandra_a88@gmailcom" 
                        title="Sandra Adams"
                    />
                </v-list>
                <v-divider></v-divider>
                <v-list nav>
                    <v-list-item 
                        title="Vista principal" 
                        value="home" 
                        prepend-icon="mdi mdi-home" 
                        variant="flat"
                        active-color="primary" 
                    />
                    <v-list-item 
                        title="Mi cuenta" 
                        value="myaccount" 
                        prepend-icon="mdi mdi-account" 
                        variant="flat"
                        active-color="primary" 
                    />
                    <v-list-group value="config">
                        <template v-slot:activator="{ props }">
                            <v-list-item 
                                v-bind="props" 
                                prepend-icon="mdi mdi-ungroup" 
                                title="Configuración"
                                variant="flat" 
                                active-color="primary"
                            />
                        </template>
                        <v-list-item title="Activar modo oscuro" color="primary">
                            <BPThemeToggle class="mt-2" />
                        </v-list-item>
                    </v-list-group>
                    <v-list-item 
                        title="Cerrar sesión" 
                        value="logout" 
                        prepend-icon="mdi mdi-logout" 
                        variant="flat"
                        active-color="primary" 
                    />
                </v-list>
            </v-navigation-drawer>
        </v-layout>
    </v-card>
</template>

<script setup>
import { ref } from 'vue'
import BPThemeToggle from '@/components/atoms/BPThemeToggle.vue'

const rail = ref(true)
const drawer = ref(true)
</script>

<template>
    <v-btn
        :color="color"
        :variant="variant" 
        :size="size"
        :prepend-icon="prependIcon" 
        :append-icon="appendIcon"
    >
        <slot>
            <v-icon v-if="icon">{{ icon }}</v-icon>
        </slot>
    </v-btn>
  </template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    color: {
        type: String,
        default: 'base'
    },
    variant: {
        type: String,
        default: 'flat'
    },
    size: {
        type: String,
        default: 'default'
    },
    icon: {
      type: String,
      required: false,
    },
    prependIcon: {
        type: String,
        required: false
    },
    appendIcon: {
        type: String,
        required: false
    },
  });

</script>
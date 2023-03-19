import BaseLabel from './BaseLabel.vue';

<template>
  <span
    class="inline-flex items-center justify-center text-3xl text-white rounded-full lg:text-6xl w-9 h-9 lg:w-16 lg:h-16 bg-primary-indigo"
  >
    <span class="sr-only">Step</span>
    <span>{{ stepNumber }}</span>
  </span>
</template>

<script setup>
defineProps({
  stepNumber: {
    type: Number,
    required: true,
  },
})
</script>

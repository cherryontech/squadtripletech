<template>
  <button
    class="p-2 text-white rounded-lg"
    :disabled="isLoading"
    :class="
      isLoading
        ? 'bg-indigo-300 hover:bg-indigo-300'
        : 'bg-primary-indigo hover:bg-cool-black'
    "
  >
    <slot />
  </button>
</template>

<script setup>
defineProps({
  isLoading: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <div :role="role" :class="theme" class="px-4 py-2 border-l-4">
    <h2 class="font-bold">
      <slot name="title" />
    </h2>

    <p class="leading-5">
      <slot />
    </p>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  role: {
    type: String,
    default: 'status',
    validator(value) {
      return ['status', 'alert'].includes(value)
    },
  },
})

const theme = computed(() => {
  switch (props.role) {
    case 'status':
    default:
      return ['bg-blue-100', 'text-blue-700', 'border-blue-500']
    case 'alert':
      return ['bg-yellow-100', 'text-red-700', 'border-yellow-400']
  }
})
</script>

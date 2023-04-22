<template>
  <section class="sm:w-80 sm:mx-auto lg:mx-0">
    <div class="flex items-center gap-6">
      <img :src="themeIcon" role="presentation" class="w-8 h-8" />
      <h3 class="font-bold">
        <span><slot name="title" /></span>
      </h3>
    </div>
    <p class="ml-14 text-slate-500"><slot name="text" /></p>
  </section>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  theme: {
    type: String,
    default: 'info',
    validator(value) {
      return ['info', 'mail'].includes(value)
    },
  },
})

const themeIcon = computed(() => {
  switch (props.theme) {
    case 'info':
    default:
      return '../assets/images/icon-info.png'

    case 'mail':
      return '../assets/images/icon-envelope.png'
  }
})
</script>

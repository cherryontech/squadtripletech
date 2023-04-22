<template>
  <component
    :is="tag"
    class="flex flex-col-reverse border-4 border-neutral-200 rounded-2xl"
  >
    <h3
      class="flex justify-end px-6 py-4 font-bold sm:justify-between bg-neutral-200"
    >
      <span>Job Description #{{ order }}</span>
    </h3>
    <p class="px-6 pt-4 pb-6">{{ text }}</p>
  </component>
</template>

<script setup>
defineProps({
  tag: {
    type: String,
    default: 'li',
  },
  order: {
    type: [String, Number],
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
})
</script>

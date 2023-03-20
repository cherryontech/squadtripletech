<template>
  <textarea
    class="mt-8 border-4 rounded-2xl"
    rows="4"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>

<script setup>
defineProps(['modelValue'])
defineEmits(['update:modelValue'])
</script>

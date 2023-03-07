import BaseLabel from './BaseLabel.vue';

<template>
  <div class="flex flex-col border">
    <BaseLabel :for="stepId">{{ stepLabel }}</BaseLabel>

    <BaseTextArea
      :id="stepId"
      :modelValue="stepText"
      @input="$emit('update:stepText', $event.target.value)"
    />
  </div>
</template>

<script setup>
import BaseLabel from './BaseLabel.vue'
import BaseTextArea from './BaseTextArea.vue'

const props = defineProps({
  stepNumber: {
    type: Number,
    required: true,
  },
  stepLabel: {
    type: String,
    default: '',
  },
  stepText: {
    type: String,
    default: '',
  },
})

defineEmits(['update:stepText'])

const stepId = `step-input-${props.stepNumber}`
</script>

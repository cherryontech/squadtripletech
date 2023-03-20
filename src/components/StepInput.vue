import BaseLabel from './BaseLabel.vue';

<template>
  <div class="flex flex-col justify-between">
    <BaseLabel :for="stepId" class="flex">
      <span class="mr-9 md:mr-14 lg:mr-16">
        <StepNumber :stepNumber="stepNumber" />
      </span>
      <span>
        <span class="mr-1 font-bold">
          <slot name="stepSummary" />
        </span>
        <slot name="stepDirections" />
      </span>
    </BaseLabel>

    <BaseTextArea
      :id="stepId"
      :modelValue="stepText"
      class="p-2"
      @input="$emit('update:stepText', $event.target.value)"
    />
  </div>
</template>

<script setup>
import BaseLabel from './BaseLabel.vue'
import BaseTextArea from './BaseTextArea.vue'
import StepNumber from './StepNumber.vue'

const props = defineProps({
  stepNumber: {
    type: Number,
    required: true,
  },
  stepText: {
    type: String,
    default: '',
  },
})

defineEmits(['update:stepText'])

const stepId = `step-input-${props.stepNumber}`
</script>

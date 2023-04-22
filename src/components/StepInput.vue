import BaseLabel from './BaseLabel.vue';

<template>
  <div class="flex flex-col justify-between">
    <BaseLabel :for="stepId" class="flex">
      <span
        class="mr-9 sm:mr-14 lg:mr-16"
        :class="
          hasError ? 'p-1 rounded-full outline outline-4 outline-red-700' : ''
        "
      >
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
      :name="name"
      required="true"
      :id="stepId"
      :modelValue="stepText"
      class="h-40 p-2 sm:h-64 lg:h-72"
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
  name: {
    type: String,
    default: '',
  },
  hasError: {
    type: Boolean,
    default: false,
  },
})

defineEmits(['update:stepText'])

const stepId = `step-input-${props.stepNumber}`
</script>

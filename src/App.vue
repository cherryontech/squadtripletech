<template>
  <main class="flex flex-col flex-wrap max-w-screen-md gap-4 mx-auto">
    <div class="flex gap-4">
      <StepInput
        v-model:stepText="bio"
        :stepNumber="1"
        stepLabel="Step 1: Add your current pitch"
        class="w-1/2"
      />

      <StepInput
        v-model:stepText="jobDescription"
        :stepNumber="2"
        stepLabel="Step 2: Paste a job description"
        class="w-1/2"
      />
    </div>
    <BaseButton
      @click="getCompletion"
      type="button"
      :disabled="isLoading"
      class="w-full"
    >
      {{ isLoading ? 'Loading...' : 'Generate your pitch' }}
    </BaseButton>
    <template v-if="result">
      <h2>Your generated pitch</h2>
      <p>
        {{ result }}
      </p>
    </template>
  </main>
</template>

<script setup>
import { inject } from '@vercel/analytics'
import { onMounted, ref } from 'vue'

import BaseButton from './components/BaseButton.vue'
import StepInput from './components/StepInput.vue'

const jobDescription = ref(
  'A talented vegan chef who likes cooking desserts and has 78 years of experience.'
)
const bio = ref('A chef with 6 years of experience in cooking steaks.')
const result = ref('')

const isLoading = ref(false)

const moveScroll = () => {
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: 'smooth',
  })
}

const getCompletion = async () => {
  isLoading.value = true

  result.value = ''

  const response = await fetch('/api/generate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      bio: bio.value,
      jobDescription: jobDescription.value,
    }),
  })

  if (!response.ok) {
    throw new Error(response.statusText)
  }

  const data = response.body
  if (!data) {
    return
  }

  const reader = data.getReader()
  const decoder = new TextDecoder()

  let done = false

  while (!done) {
    const { value, done: doneReading } = await reader.read()
    done = doneReading
    const chunkValue = decoder.decode(value)
    result.value += chunkValue
  }

  isLoading.value = false

  moveScroll()
}

onMounted(inject)
</script>

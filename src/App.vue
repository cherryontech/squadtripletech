<template>
  <main class="flex flex-col gap-4 p-4 my-4 sm:px-10 lg:px-20">
    <h1 class="mb-6">
      <span class="block mb-2 text-2xl font-bold text-center lg:text-6xl"
        >Pitch Pop Out</span
      >
      <span class="block text-center"
        >Transform your resume summary into a personalized pop-out pitch!</span
      >
    </h1>
    <div class="flex flex-col gap-24 sm:gap-20 lg:gap-4 lg:flex-row">
      <StepInput v-model:stepText="bio" :stepNumber="1" class="w-full lg:w-1/2">
        <template #stepSummary> Tell us about you. </template>
        <template #stepDirections>
          Write a few sentences about yourself or paste in your existing job
          summary.
        </template>
      </StepInput>

      <StepInput
        v-model:stepText="jobDescription"
        :stepNumber="2"
        class="w-full lg:w-1/2"
      >
        <template #stepSummary> Tell us about the job. </template>
        <template #stepDirections>
          Please enter the job description and include all the requirements.
        </template>
      </StepInput>
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
      <h2 class="my-24 text-2xl font-bold text-center lg:my-36h md:my-20h">
        Your generated pitch
      </h2>
      <p class="p-3 border-4 rounded-2xl">
        {{ result }}
      </p>
    </template>
    <template v-if="isLoading">
      <h2 class="my-24 text-2xl font-bold text-center lg:my-36h md:my-20h">
        Loading good stuff here (real loading spinner to come)...
      </h2>
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
}

onMounted(inject)
</script>

<template>
  <main
    class="flex flex-col max-w-screen-xl gap-10 p-4 mx-auto my-4 sm:gap-20 lg:gap-40 sm:px-10 lg:px-20"
  >
    <!-- Header -->
    <TheHeader />

    <!-- Steps -->
    <div class="flex flex-col gap-10 sm:gap-20 lg:gap-4 lg:flex-row">
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

    <!-- Submit -->
    <BaseButton
      @click="getCompletion"
      type="submit"
      :isLoading="isLoading"
      class="w-full"
    >
      {{ isLoading ? 'Loading...' : 'Generate your pitch' }}
    </BaseButton>

    <h2 v-if="results.length" class="text-2xl font-bold text-center">
      Your generated pitches
    </h2>

    <ResultCardLoading v-if="isLoading" class="w-full" />

    <!-- Results -->
    <ul v-if="results.length">
      <ResultCard
        v-for="(result, index) in results"
        :key="index"
        :tag="li"
        class="flex flex-col-reverse border-4 border-neutral-200 rounded-2xl"
        :time="result.generatedAt"
        :text="result.text"
        :order="results.length - index"
      />
    </ul>
  </main>
</template>

<script setup>
import { inject } from '@vercel/analytics'
import { onMounted, ref } from 'vue'

import TheHeader from './components/TheHeader.vue'
import BaseButton from './components/BaseButton.vue'
import StepInput from './components/StepInput.vue'
import ResultCardLoading from './components/ResultCardLoading.vue'
import ResultCard from './components/ResultCard.vue'

const jobDescription = ref(
  'Ex: A talented vegan chef who likes cooking desserts and has 78 years of experience.'
)
const bio = ref('Ex: A chef with 6 years of experience in cooking steaks.')

const results = ref([])

const isLoading = ref(false)

const getCompletion = async () => {
  if (isLoading.value) return

  isLoading.value = true

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
  const currentResultText = ref('')

  while (!done) {
    const { value, done: doneReading } = await reader.read()

    done = doneReading

    const chunkValue = decoder.decode(value)

    currentResultText.value += chunkValue
  }

  // Create and add a new pitch
  results.value.unshift({
    generatedAt: new Date().toLocaleTimeString(),
    text: currentResultText.value,
  })

  isLoading.value = false
}

// Bring in Vercel for edge functions.
onMounted(inject)
</script>

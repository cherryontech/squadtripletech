<template>
  <main
    class="flex flex-col max-w-screen-xl gap-10 p-4 mx-auto my-4 sm:gap-20 lg:gap-40 sm:px-10 lg:px-20"
  >
    <!-- Header -->
    <TheHeader />

    <!-- Form errors -->
    <BaseNotification
      v-show="hasAnyErrors"
      role="alert"
      class="mb-8 sm:mb-11 lg:mb-20"
    >
      <template #title>
        Oops! Looks like you forgot to tell us something.
      </template>

      Please fill in the missing information so we can keep things cookin'!
      <ul>
        <li v-if="errors.bio">Please provide a bio in step 3.</li>
        <li v-if="errors.jobDescription">
          Please provide a job description in step 4.
        </li>
      </ul>
    </BaseNotification>

    <form @submit.prevent="getCompletion" id="pitchForm">
      <!-- Steps -->
      <div class="flex flex-col gap-10 sm:gap-20 lg:gap-4 lg:flex-row">
        <StepInput
          :hasError="errors.bio"
          name="bio"
          v-model:stepText="bio"
          :stepNumber="1"
          class="w-full lg:w-1/2"
        >
          <template #stepSummary> Tell us about you. </template>
          <template #stepDirections>
            Write a few sentences about yourself or paste in your existing job
            summary.
          </template>
        </StepInput>

        <StepInput
          :hasError="errors.jobDescription"
          name="jobDescription"
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
    </form>

    <!-- Submit -->
    <BaseButton
      form="pitchForm"
      @click="getCompletion"
      type="submit"
      :isLoading="isLoading"
      class="w-full"
    >
      {{ isLoading ? 'Loading...' : 'Generate your pitch' }}
    </BaseButton>

    <!-- Results -->
    <div
      class="flex flex-col gap-5 sm:gap-9"
      v-if="results.length && !isLoading"
    >
      <h2 class="text-2xl font-bold text-center">Your generated pitches</h2>

      <BaseNotification role="status">
        <template #title> Don't forget to copy and paste your info! </template>

        <template #default>
          We don't want you to have to re-type everything and risk getting
          carpal tunnel syndrome!
        </template>
      </BaseNotification>
    </div>

    <ResultCardLoading v-if="isLoading" class="w-full" />

    <ul v-if="results.length" class="flex flex-col gap-10 sm:gap-20 lg:gap-40">
      <ResultCard
        v-for="(result, index) in results"
        :key="index"
        tag="li"
        class="flex flex-col-reverse border-4 border-neutral-200 rounded-2xl"
        :text="result.text"
        :order="results.length - index"
      />
    </ul>
  </main>
</template>

<script setup>
import { inject } from '@vercel/analytics'
import { computed, nextTick, onMounted, reactive, ref } from 'vue'

import TheHeader from './components/TheHeader.vue'
import BaseButton from './components/BaseButton.vue'
import BaseNotification from './components/BaseNotification.vue'
import StepInput from './components/StepInput.vue'
import ResultCardLoading from './components/ResultCardLoading.vue'
import ResultCard from './components/ResultCard.vue'

const jobDescription = ref('')
const bio = ref('')

const results = ref([])

const isLoading = ref(false)

const hasAnyErrors = computed(() => {
  return Object.values(errors).some((item) => item === true)
})

const errors = reactive({
  jobDescription: false,
  bio: false,
})

const calculateErrors = async () => {
  // Reset errors so we can recalculate, since users may have since changed input values.
  resetErrors()

  // Let DOM update so assistive tech will be re-triggered.
  await nextTick()

  if (!bio.value) errors.bio = true
  if (!jobDescription.value) errors.jobDescription = true
}

const resetErrors = () => {
  Object.keys(errors).forEach((field) => {
    errors[field] = false
  })
}

const getCompletion = async () => {
  // Use may have double clicked
  if (isLoading.value) return

  await calculateErrors()
  if (hasAnyErrors.value) return

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
    text: currentResultText.value,
  })

  isLoading.value = false
}

// Bring in Vercel for edge functions.
onMounted(inject)
</script>

<template>
  <header>incoming header</header>

  <main>
    <StepInput
      v-model:stepText="bio"
      :stepNumber="1"
      stepLabel="Step 1: Add your current pitch"
    />

    <StepInput
      v-model:stepText="jobDescription"
      :stepNumber="2"
      stepLabel="Step 2: Paste a job description"
    />

    <BaseButton @click="createMelange">Generate</BaseButton>

    <div class="border">
      <h2>Melange list:</h2>
      <ul>
        <li class="m-2 border" v-for="(item, index) in melange" :key="index">
          {{ item }}
        </li>
      </ul>
    </div>
  </main>
</template>

<script setup>
import { ref } from 'vue'

import BaseButton from './components/BaseButton.vue'
import StepInput from './components/StepInput.vue'

const bio = ref('')
const jobDescription = ref('')

const melange = ref([])
const createMelange = () => {
  melange.value.push(`${bio.value}, ${jobDescription.value}`)

  jobDescription.value = ''
}
</script>

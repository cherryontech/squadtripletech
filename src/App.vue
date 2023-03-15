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

    <StepInput
      v-model:stepText="context"
      :stepNumber="999"
      stepLabel="Give some context"
    />

    <BaseButton @click="getCompletion">Generate</BaseButton>

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
import { inject } from '@vercel/analytics'
import { onMounted, ref } from 'vue'

const places = ref([])
const context = ref('')
const result = ref('')

const isLoading = ref(false)

const defaultContext = "I'm looking for a place to eat seafood with my family."

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
      context: context.value || defaultContext,
      places: places.value,
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

const handleAdd = (place) => {
  places.value.push(place)
  moveScroll()
}

const handleRemove = (place) => {
  if (confirm('Are you sure you want to remove this place?')) {
    places.value = places.value.filter((p) => p.place_id !== place.place_id)
  }
}

onMounted(inject)
</script>

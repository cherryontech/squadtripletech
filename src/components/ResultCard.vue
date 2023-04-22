<template>
  <component
    :is="tag"
    class="flex flex-col-reverse border-4 border-neutral-200 rounded-2xl"
  >
    <div
      class="flex items-center justify-between px-6 py-4 font-bold bg-neutral-200"
    >
      <BaseButton
        @click="copy(text)"
        v-if="isSupported"
        class="flex gap-2"
        :aria-label="`Copy pitch number ${order}`"
      >
        <span class="hidden sm:inline">{{ !copied ? 'Copy' : 'Copied!' }}</span>
        <img
          class="w-6 h-6"
          src="../assets/images/icon-copy-inverse.png"
          alt=""
        />
      </BaseButton>

      <h3 class="ml-auto">Pop-out pitch #{{ order }}</h3>

      <!-- Status so SR knows which pitch was copied -->
      <p class="sr-only" v-show="copied" role="status">
        Pop-out pitch #{{ order }} has been copied!
      </p>
    </div>

    <p class="px-6 pt-4 pb-6">{{ text }}</p>
  </component>
</template>

<script setup>
import BaseButton from './BaseButton.vue'

import { useClipboard } from '@vueuse/core'

defineProps({
  tag: {
    type: String,
    default: 'li',
  },
  order: {
    type: [String, Number],
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
})

const { isSupported, copy, copied } = useClipboard({ copiedDuring: 3000 })
</script>

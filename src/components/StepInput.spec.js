import { describe, it, expect } from 'vitest'

import { shallowMount } from '@vue/test-utils'

import StepInput from './StepInput.vue'
import BaseTextArea from './BaseTextArea.vue'
import BaseLabel from './BaseLabel.vue'

describe('StepInput', () => {
  it('passes a formatted id to the BaseTextArea', () => {
    const wrapper = shallowMount(StepInput, {
      props: {
        stepNumber: 99,
      },
    })

    expect(wrapper.findComponent(BaseTextArea).attributes('id')).toContain(99)
  })

  it('passes a formated for attr to the BaseLabel', () => {
    const wrapper = shallowMount(StepInput, {
      props: {
        stepNumber: 99,
      },
    })

    expect(wrapper.findComponent(BaseLabel).attributes('for')).toContain(99)
  })
})

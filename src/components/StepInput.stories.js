import StepInput from './StepInput.vue'

export default {
  title: 'Step input',
  component: StepInput,
}

const Template = (args) => ({
  components: { StepInput },
  setup() {
    return { args }
  },
  template: `
    <StepInput v-bind="args" :stepNumber="1" class="w-full lg:w-1/2">
      <template #stepSummary> Tell us about you. </template>
      <template #stepDirections>
        Write a few sentences about yourself or paste in your existing job
        summary.
      </template>
    </StepInput>
  `,
})

export const Primary = Template.bind({})
Primary.args = {
  stepText: 'First step is best',
  stepNumber: 9,
}

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
  template: `<StepInput v-bind="args" />`,
})

export const Primary = Template.bind({})
Primary.args = {
  stepLabel: 'First step is best',
  stepNumber: 99,
}

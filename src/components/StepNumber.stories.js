import StepNumber from './StepNumber.vue'

export default {
  title: 'Step number',
  component: StepNumber,
}

const Template = (args) => ({
  components: { StepNumber },
  setup() {
    return { args }
  },
  template: `<StepNumber v-bind="args" />`,
})

export const Primary = Template.bind({})
Primary.args = {
  stepNumber: 9,
}

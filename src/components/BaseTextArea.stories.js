import BaseTextArea from './BaseTextArea.vue'

export default {
  title: 'Base text area',
  component: BaseTextArea,
}

const Template = (args) => ({
  components: { BaseTextArea },
  setup() {
    return { args }
  },
  template: `<BaseTextArea v-bind="args" />`,
})

export const Primary = Template.bind({})
Primary.args = {
  modelValue: 'Cool text',
}

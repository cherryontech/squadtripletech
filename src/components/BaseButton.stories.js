import BaseButton from './BaseButton.vue'

export default {
  title: 'Base button',
  component: BaseButton,
}

const Template = (args) => ({
  components: { BaseButton },
  setup() {
    return { args }
  },
  template: `<BaseButton>What a nice label!</BaseButton>`,
})

export const Primary = Template.bind({})
Primary.args = {}

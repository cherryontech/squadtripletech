import BaseLabel from './BaseLabel.vue'

export default {
  title: 'Base label',
  component: BaseLabel,
}

const Template = (args) => ({
  components: { BaseLabel },
  setup() {
    return { args }
  },
  template: `<BaseLabel>What a nice label!</BaseLabel>`,
})

export const Primary = Template.bind({})
Primary.args = {}

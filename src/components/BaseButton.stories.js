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
  template: `
    <BaseButton v-bind="args">
      <span v-if="!args.isLoading">What a nice button!</span>
      <span v-else>Nice loading text...</span>
    </BaseButton>
  `,
})

export const Primary = Template.bind({})
Primary.args = {
  isLoading: false,
}

export const LoadingState = Template.bind({})
LoadingState.args = {
  isLoading: true,
}

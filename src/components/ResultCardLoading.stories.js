import ResultCardLoading from './ResultCardLoading.vue'

export default {
  title: 'Result card loading skeleton',
  component: ResultCardLoading,
}

const Template = (args) => ({
  components: { ResultCardLoading },
  setup() {
    return { args }
  },
  template: `<ResultCardLoading v-bind="args" />`,
})

export const Primary = Template.bind({})
Primary.args = {}

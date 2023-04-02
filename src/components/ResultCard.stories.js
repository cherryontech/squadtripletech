import ResultCard from './ResultCard.vue'

export default {
  title: 'Result card (single)',
  component: ResultCard,
}

const Template = (args) => ({
  components: { ResultCard },
  setup() {
    return { args }
  },
  template: `<ResultCard v-bind="args" />`,
})

export const Primary = Template.bind({})
Primary.args = {
  text: `
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis nisi reprehenderit rem dicta totam ad temporibus recusandae quod. Dignissimos nesciunt quaerat aspernatur velit necessitatibus nam voluptatibus perferendis esse veritatis dicta.
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis nisi reprehenderit rem dicta totam ad temporibus recusandae quod. Dignissimos nesciunt quaerat aspernatur velit necessitatibus nam voluptatibus perferendis esse veritatis dicta.
  `,
  time: '9:48:13 AM',
  order: 123,
}

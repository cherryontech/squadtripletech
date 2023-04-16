import BaseNotification from './BaseNotification.vue'

export default {
  title: 'Notifications',
  component: BaseNotification,
}

const StatusTemplate = (args) => ({
  components: { BaseNotification },
  setup() {
    return { args }
  },
  template: `
    <BaseNotification v-bind="args">
      <template #title>
       Poke poke, this is a gentle reminder about something shiny.
      </template>
      
      In order to get the most out of this app, please adjust your phasers to stun and hold on tight to the handrails.
    </BaseNotification>
  `,
})

export const Status = StatusTemplate.bind({})
Status.args = {
  role: 'status',
}

const AlertTemplate = (args) => ({
  components: { BaseNotification },
  setup() {
    return { args }
  },
  template: `
    <BaseNotification v-bind="args">
      <template #title>
       Oops! This is an alert which will warn you that things have gone wonky!
      </template>
      
      Please do brush your unicorn a little more thorougly, so that your unicorn will keep that glossy mane and coat we've come to know and love.
    </BaseNotification>
  `,
})

export const Alert = AlertTemplate.bind({})
Alert.args = {
  role: 'alert',
}

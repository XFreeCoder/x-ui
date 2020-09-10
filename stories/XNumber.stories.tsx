import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { XNumber } from '../src'

type XNumberProps = React.ComponentProps<typeof XNumber>

export default {
  title: 'Number/XNumber',
  component: XNumber
} as Meta

const Template: Story<XNumberProps> = (args) => <XNumber {...args} />

export const Default = Template.bind({})
Default.args = {
  value: 5
}

import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { XOneNumber } from '../src'

type XOneNumberProps = React.ComponentProps<typeof XOneNumber>

export default {
  title: 'Number/XOneNumber',
  component: XOneNumber
} as Meta

const Template: Story<XOneNumberProps> = (args) => <XOneNumber {...args} />

export const Default = Template.bind({})
Default.args = {
  value: 5
}

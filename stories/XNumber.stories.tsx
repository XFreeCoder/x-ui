import React, { FC, useState } from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { XNumber } from '../src'
import { useInterval } from 'react-use'
import { random } from 'lodash'

type XNumberProps = React.ComponentProps<typeof XNumber>

export default {
  title: 'Number/XNumber',
  component: XNumber
} as Meta<XNumberProps>

const Template: Story<XNumberProps> = (args) => <XNumber {...args} />

export const Default: Meta<XNumberProps> = Template.bind({})
Default.args = {
  value: 520
}
Default.argTypes = {
  value: { control: { type: 'number', step: 0.01 } },
  color: { control: { type: 'color' } },
  backgroundColor: { control: { type: 'color' } },
  style: { control: { type: 'object' } }
}

export const Random: FC = () => {
  const [value, setValue] = useState(random(-10000, 10000, true).toFixed(2))
  useInterval(() => {
    setValue(random(-10000, 10000, true).toFixed(2))
  }, 2000)
  return <XNumber value={value} />
}

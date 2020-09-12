import React, { FC, useState } from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { XNumber } from '../src'
import { useInterval } from 'react-use'
import { random } from 'lodash'

type XNumberProps = React.ComponentProps<typeof XNumber>

export default {
  title: 'Number/XNumber',
  component: XNumber
} as Meta

const Template: Story<XNumberProps> = (args) => <XNumber {...args} />

export const Default = Template.bind({})
Default.args = {
  value: 520
}

export const Random: FC = () => {
  const [number, setNumber] = useState(random(-10000, 10000))
  useInterval(() => {
    setNumber(random(-10000, 10000))
  }, 5000)
  return <XNumber value={number} />
}

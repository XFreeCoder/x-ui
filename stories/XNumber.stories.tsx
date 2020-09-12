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

export const Default: Meta = Template.bind({})
Default.args = {
  value: 520
}

export const Random: FC = () => {
  const [value, setValue] = useState(random(0, 1000000))
  useInterval(() => {
    setValue(random(0, 1000000))
  }, 1000)
  return <XNumber value={value} />
}

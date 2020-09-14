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
  value: 520,
  width: 125
}
Default.argTypes = {
  value: { control: { type: 'number', step: 0.01 } },
  width: { control: { type: 'number' } },
  height: { control: { type: 'number' } },
  color: { control: { type: 'color' } },
  backgroundColor: { control: { type: 'color' } },
  style: { control: { type: 'object' } },
  fontSize: { control: { type: 'number' } },
  fontWeight: { control: { type: 'number' } }
}

export const Random: FC = () => {
  const [firValue, setFirValue] = useState(random(-1000, 1000, true).toFixed(2))
  const [secValue, setSecValue] = useState(random(-1000, 1000, true).toFixed(2))
  useInterval(() => {
    setFirValue(random(-1000, 1000, true).toFixed(2))
    setSecValue(random(-1000, 1000, true).toFixed(2))
  }, 3000)
  return (
    <div>
      <XNumber width={125} value={firValue} />
      <XNumber width={125} value={secValue} />
    </div>
  )
}

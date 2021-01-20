import React, { FC, useState } from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { XNumber, animationConfig as config } from '../src'
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
  animationConfig: config.default,
  width: 125,
  height: 20,
  color: '#000',
  backgroundColor: '#fff0',
  fontSize: 16,
  fontWeight: 400
}
Default.argTypes = {
  value: { control: { type: 'number' } },
  animationConfig: {
    control: { type: 'object' }
  },
  width: { control: { type: 'number' } },
  height: { control: { type: 'number' } },
  color: { control: { type: 'color' } },
  backgroundColor: { control: { type: 'color' } },
  style: { control: { type: 'object' } },
  fontSize: { control: { type: 'number' } },
  fontWeight: { control: { type: 'number' } }
}

export const Random: FC = () => {
  const [value, setValue] = useState(0)
  useInterval(() => {
    setValue((prev) => prev + random(-1000000, 1000000, true))
  }, 3000)
  return (
    <div>
      <XNumber value={value.toFixed(2)} width={125} />
    </div>
  )
}

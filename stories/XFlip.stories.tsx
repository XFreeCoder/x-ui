import React, { useState } from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { XFlipper, XFlipped } from '../dist'
import type { IXFlipperProps } from '../dist'
import { shuffle } from 'lodash'

const generateItems = (n: number) => {
  const items = []
  for (let index = 1; index <= n; index++) {
    items.push(`item - ${index}`)
  }
  return items
}

export default {
  title: 'Animation/XFlipper',
  component: XFlipper
} as Meta<IXFlipperProps>

const Template: Story<IXFlipperProps> = (args) => {
  const [items, setItems] = useState<Array<string>>(() => generateItems(100))

  const handleShuffle = () => {
    setItems((prevItems) => shuffle(prevItems))
  }

  return (
    <XFlipper flipKey={items.join('-')} {...args}>
      <button style={{ marginBottom: 20 }} onClick={handleShuffle}>
        Shuffle
      </button>
      <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
        {items.map((item) => (
          <XFlipped flipId={item} key={item}>
            <div
              style={{
                width: '100px',
                height: '80px',
                padding: '20px',
                backgroundColor: '#fff',
                borderRadius: '4px',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)'
              }}
            >
              {item}
            </div>
          </XFlipped>
        ))}
      </div>
    </XFlipper>
  )
}

export const Default: Meta = Template.bind({})
Default.args = {}

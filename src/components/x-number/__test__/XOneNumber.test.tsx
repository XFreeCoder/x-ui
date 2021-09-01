import React from 'react'
import { render } from '@testing-library/react'
import XOneNumber from '../XOneNumber'
import { animationConfig } from '../../../constants'

test('render correctly', async () => {
  const container = render(
    <XOneNumber value={5} animationConfig={animationConfig.default} />
  )
  expect(container).toMatchSnapshot()
})

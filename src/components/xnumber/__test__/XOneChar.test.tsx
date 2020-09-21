import React from 'react'
import { render } from '@testing-library/react'
import XOneChar from '../XOneChar'

test('render correctly', async () => {
  const container = render(<XOneChar value={5} direction='down' />)
  expect(container).toMatchSnapshot()
})

import React from 'react'
import { render } from '@testing-library/react'
import XOneNumber from '../XOneNumber'

test('render correctly', async () => {
  const container = render(<XOneNumber value={5} direction='down' />)
  container.rerender(<XOneNumber value={2} />)
  expect(container).toMatchSnapshot()
})

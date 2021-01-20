import React from 'react'
import { render } from '@testing-library/react'
import XNumber from '../XNumber'

test('render correctly', async () => {
  const container = render(<XNumber value={-520.0} />)
  expect(container).toMatchSnapshot()
})

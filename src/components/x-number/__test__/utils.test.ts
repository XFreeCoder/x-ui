import { calcPositionAndOpacity } from '../utils'

test('Should throw a Error while visibleRadian not correct', () => {
  expect(() => calcPositionAndOpacity(0, -5)).toThrowError(
    'visibleRadian should be [0, Math.PI]'
  )
  expect(() => calcPositionAndOpacity(0, 2 * Math.PI)).toThrowError(
    'visibleRadian should be [0, Math.PI]'
  )
})

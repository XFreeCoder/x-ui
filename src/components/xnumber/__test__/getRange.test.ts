import { getRange } from '../utils'

test('from === to', () => {
  expect(getRange(5, 5, 'down')).toEqual(expect.arrayContaining([5]))
})

test('from 5 to 8, direction up', () => {
  expect(getRange(5, 8, 'up')).toEqual(expect.arrayContaining([6, 7, 8]))
})

test('from 5 to 8, direction down', () => {
  expect(getRange(5, 8, 'down')).toEqual(
    expect.arrayContaining([4, 3, 2, 1, 0, 9, 8])
  )
})

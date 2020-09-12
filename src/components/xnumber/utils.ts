import { OneNumType, DirectionType } from './interface'

const getNext = (from: OneNumType, direction: DirectionType): OneNumType => {
  if (direction === 'up') {
    return ((from + 1) % 10) as OneNumType
  }
  if (from === 0) {
    return 9
  }
  return (from - 1) as OneNumType
}

export const getRange = (
  from: OneNumType,
  to: OneNumType,
  direction: DirectionType
) => {
  if (from === to) {
    return [to]
  }
  const range: OneNumType[] = []
  let cur = from
  do {
    cur = getNext(cur, direction)
    range.push(cur)
  } while (cur !== to)
  return range
}

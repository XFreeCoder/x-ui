import React, { FC, useMemo } from 'react'
import { animated, useSpring } from 'react-spring'
import { usePreviousDistinct } from 'react-use'
import { isEqual } from 'lodash'
import { OneNumType, DirectionType, IXOneNumberProps } from './interface'
import XOneChar from './XOneChar'

const AnimatedXOneChar = animated(XOneChar)

const getNext = (from: OneNumType, direction: DirectionType): OneNumType => {
  if (direction === 'up') {
    return ((from + 1) % 10) as OneNumType
  }
  if (from === 0) {
    return 9
  }
  return (from - 1) as OneNumType
}

const getRange = (
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

const XOneNumber: FC<IXOneNumberProps> = (props) => {
  const { value = 0, direction = 'up', ...restProps } = props
  const preValue = usePreviousDistinct(value) || 0
  const values = useMemo(() => getRange(preValue, value, direction), [
    value,
    preValue,
    direction
  ])
  const { index } = useSpring({
    index: values.length - 1,
    from: { index: 0 },
    reset: true
  })
  return (
    <AnimatedXOneChar
      value={index.interpolate((i) => values[Math.floor(i)])}
      direction={direction}
      {...restProps}
    />
  )
}

export default React.memo(XOneNumber, (preProps, nextProps) => {
  const { direction: preDirection, ...restPreProps } = preProps
  const { direction: nextDirection, ...restNextProps } = nextProps
  // only direction change, dot re-render
  return isEqual(restPreProps, restNextProps)
})

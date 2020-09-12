import React, { FC, useMemo } from 'react'
import { animated, useSpring } from 'react-spring'
import { usePreviousDistinct } from 'react-use'
import { isEqual } from 'lodash'
import { IXOneNumberProps } from './interface'
import XOneChar from './XOneChar'
import { getRange } from './utils'

const AnimatedXOneChar = animated(XOneChar)

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
      value={index.interpolate((i) => values[Math.round(i)])}
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

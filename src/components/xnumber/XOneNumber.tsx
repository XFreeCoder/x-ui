import React, { FC, useMemo } from 'react'
import { useTransition, animated, useSpring } from 'react-spring'
import styled from 'styled-components'
import { usePrevious } from 'react-use'

type OneNumType = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
type DirectionType = 'up' | 'down'

interface IProps {
  value?: OneNumType
  direction?: DirectionType
  offsetFrom?: number
  offsetTo?: number
}

const Container = styled.div`
  width: 10px;
  height: 20px;
`

const StyledAnimated = styled(animated.div)`
  position: absolute;
  height: 20px;
  font-size: 16px;
  will-change: transform, opacity;
`

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
  const range: OneNumType[] = []
  let cur = from
  do {
    cur = getNext(cur, direction)
    range.push(cur)
  } while (cur !== to)
  return range
}

const XInnerOneNumber: FC<IProps> = (props) => {
  const { value = 0, direction = 'up', offsetFrom = 10, offsetTo = -5 } = props
  const offset = useMemo(() => {
    if (direction === 'up') {
      return { offsetFrom, offsetTo }
    }
    return { offsetFrom: -offsetFrom, offsetTo: -offsetTo }
  }, [direction, offsetTo, offsetFrom])
  console.log(value)
  const transitions = useTransition(value, (p) => p, {
    from: {
      opacity: 0,
      transform: `translate3d(0,${offset.offsetFrom}px,0)`
    },
    enter: { opacity: 1, transform: `translate3d(0,0,0)` },
    leave: { opacity: 0, transform: `translate3d(0,${offset.offsetTo}px,0)` }
  })
  return (
    <Container>
      {transitions.map(({ item, props, key }) => (
        <StyledAnimated key={key} className='x-one-number' style={props}>
          {item}
        </StyledAnimated>
      ))}
    </Container>
  )
}

const XInnerOneNumberAnimated = animated(XInnerOneNumber)

const XOneNumber: FC<IProps> = (props) => {
  const { value = 0, direction = 'up', ...restProps } = props
  const preValue = usePrevious(value)
  const values = useMemo(() => {
    if (preValue !== undefined && preValue !== value) {
      return getRange(preValue, value, direction)
    }
    return [value]
  }, [value, preValue, direction])
  const { index } = useSpring({
    index: values.length - 1,
    from: { index: 0 },
    reset: true
  })
  return (
    <XInnerOneNumberAnimated
      value={index.interpolate((i) => values[Math.round(i)])}
      direction={direction}
      {...restProps}
    />
  )
}

export default XOneNumber

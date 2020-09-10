import React, { FC, useMemo } from 'react'
import { useTransition, animated } from 'react-spring'
import styled from 'styled-components'

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

const XOneNumber: FC<IProps> = (props) => {
  const { value = 0, direction = 'up', offsetFrom = 10, offsetTo = -5 } = props
  const offset = useMemo(() => {
    if (direction === 'up') {
      return { offsetFrom, offsetTo }
    }
    return { offsetFrom: -offsetFrom, offsetTo: -offsetTo }
  }, [direction, offsetTo, offsetFrom])
  const transitions = useTransition(value, (p) => p, {
    from: { opacity: 0, transform: `translate3d(0,${offset.offsetFrom}px,0)` },
    enter: { opacity: 1, transform: `translate3d(0,0,0)` },
    leave: { opacity: 0, transform: `translate3d(0,${offset.offsetTo}px,0)` }
  })
  return (
    <Container>
      {transitions.map(({ item, props, key }) => (
        <StyledAnimated key={key} className='one-number' style={props}>
          {item}
        </StyledAnimated>
      ))}
    </Container>
  )
}

export default XOneNumber

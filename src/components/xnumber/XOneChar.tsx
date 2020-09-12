import React, { FC, useMemo } from 'react'
import { useTransition } from 'react-spring'
import { IXOneCharProps } from './interface'
import { OneCharContainer, StyledOneChar } from './Styled'

const XOneChar: FC<IXOneCharProps> = (props) => {
  const { value, direction = 'up', offsetFrom = 10, offsetTo = -5 } = props
  const offset = useMemo(() => {
    if (direction === 'up') {
      return { offsetFrom, offsetTo }
    }
    return { offsetFrom: -offsetFrom, offsetTo: -offsetTo }
  }, [direction, offsetTo, offsetFrom])
  const transitions = useTransition(value, (p) => p, {
    from: {
      opacity: 0,
      transform: `translate3d(0,${offset.offsetFrom}px,0)`
    },
    enter: { opacity: 1, transform: `translate3d(0,0,0)` },
    leave: { opacity: 0, transform: `translate3d(0,${offset.offsetTo}px,0)` }
  })
  return (
    <OneCharContainer>
      {transitions.map(({ item, props, key }) => (
        <StyledOneChar key={key} className='x-one-number' style={props}>
          {item}
        </StyledOneChar>
      ))}
    </OneCharContainer>
  )
}

export default React.memo(XOneChar)

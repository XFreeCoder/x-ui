import React, { FC, useMemo } from 'react'
import { animated, useSpring } from 'react-spring'
import { useMeasure } from 'react-use'
import { IXOneNumberProps } from './interface'
import { XOneNumberContainer, StyledXOneNumber } from './Styled'
import { calcPositionAndOpacity } from './utils'

const InnerXOneNumber: FC<Omit<IXOneNumberProps, 'animationConfig'>> = (
  props
) => {
  const { value, radius } = props
  const [measureRef, { height, width }] = useMeasure<HTMLSpanElement>()
  const styles = calcPositionAndOpacity(value)
  const fixedRadius = useMemo(() => radius || height * 0.8, [radius, height])

  return (
    <XOneNumberContainer style={{ height, width }}>
      <span ref={measureRef} style={{ visibility: 'hidden' }}>
        5
      </span>
      {styles.map((style, index) => {
        const { y, opacity } = style
        return (
          <StyledXOneNumber
            style={{
              opacity: opacity,
              transform: `translateY(${-y * fixedRadius}px)`
            }}
            key={index}
          >
            {index}
          </StyledXOneNumber>
        )
      })}
    </XOneNumberContainer>
  )
}

const AnimatedXOneNumber = animated(InnerXOneNumber)

const XOneNumber: FC<IXOneNumberProps> = (props) => {
  const { value, radius, animationConfig } = props

  const spring = useSpring({
    value,
    config: animationConfig,
    from: { value: 0 }
  })

  return <AnimatedXOneNumber value={spring.value} radius={radius} />
}

export default React.memo(XOneNumber)

import React, { FC, useEffect, useMemo } from 'react'
import XOneNumber from './XOneNumber'
import { usePreviousDistinct } from 'react-use'
import { isNaN } from 'lodash'
import XOneChar from './XOneChar'
import { XNumberContainer } from './Styled'
import { IXNumberProps } from './interface'
import { animated, useSpring } from 'react-spring'
import { animationConfig as config } from '../../constants'

const AnimatedXNumberContainer = animated(XNumberContainer)

/**
 * @description A very simple component used for display a number.
 *
 * @param props IXNumberProps
 */
const XNumber: FC<IXNumberProps> = (props) => {
  const {
    value = 0,
    width = 125,
    height = 20,
    color = '#000',
    backgroundColor = '#fff0',
    fontSize = 16,
    fontWeight = 400,
    animationConfig = config.default,
    ...restProps
  } = props
  const preValue = usePreviousDistinct(value) || 0
  const [animatedStyle, set] = useSpring(() => ({
    width,
    height,
    color,
    backgroundColor,
    fontSize,
    fontWeight,
    config: animationConfig
  }))
  useEffect(() => {
    set({
      width,
      height,
      color,
      backgroundColor,
      fontSize,
      fontWeight,
      config: animationConfig
    })
  }, [width, height, color, backgroundColor, fontSize, fontWeight])
  const direction = useMemo(
    () => (Number(value) - Number(preValue) >= 0 ? 'up' : 'down'),
    [value, preValue]
  )
  const values = value
    .toString()
    .split('')
    .reverse()
    .map((v) => {
      const type = isNaN(Number(v)) ? 'char' : 'number'
      return { value: v, type }
    })
  return (
    <AnimatedXNumberContainer style={animatedStyle} {...restProps}>
      {values.map((v, index) =>
        v.type === 'number' ? (
          <XOneNumber
            key={index}
            direction={direction}
            value={Number(v.value) as any}
            animationConfig={animationConfig}
          />
        ) : (
          <XOneChar
            key={index}
            direction={direction}
            value={v.value as any}
            animationConfig={animationConfig}
          />
        )
      )}
    </AnimatedXNumberContainer>
  )
}

export default XNumber

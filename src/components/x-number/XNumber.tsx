import React, { FC, useMemo } from 'react'
import { XNumberContainer } from './Styled'
import { IXNumberProps } from './interface'
import { animated, useSpring } from 'react-spring'
import { animationConfig as config } from '../../constants'
import XOneNumber from './XOneNumber'
import { isNaN, isNumber } from 'lodash'

const AnimatedXNumberContainer = animated(XNumberContainer)

/**
 * @description A very simple component used for display a number.
 *
 * @param props IXNumberProps
 */
const XNumber: FC<IXNumberProps> = (props) => {
  const {
    value = 0,
    radius,
    width = 125,
    height = 20,
    color = '#000',
    backgroundColor = '#fff0',
    fontSize = 16,
    fontWeight = 400,
    animationConfig = config.default,
    ...restProps
  } = props

  const animatedProps = useSpring({
    width,
    height,
    color,
    backgroundColor,
    fontSize,
    fontWeight,
    config: animationConfig
  })

  const {
    width: animatedWidth,
    height: animatedHeight,
    color: animatedColor,
    backgroundColor: animatedBackgroundColor,
    fontSize: animatedFontSize,
    fontWeight: animatedFontWeight
  } = useMemo(() => animatedProps, [animated])

  const elements = useMemo(() => {
    const sign = Math.sign(Number(value))
    return value
      .toString()
      .split('')
      .map((ele) => {
        if (isNaN(Number(ele))) {
          return ele
        }
        return sign * Number.parseInt(ele)
      })
      .reverse()
  }, [value])

  return (
    <AnimatedXNumberContainer
      style={{
        width: animatedWidth,
        height: animatedHeight,
        color: animatedColor,
        backgroundColor: animatedBackgroundColor,
        fontSize: animatedFontSize,
        fontWeight: animatedFontWeight
      }}
      {...restProps}
    >
      {elements.map((ele, index) => {
        if (!isNumber(ele)) {
          return <span key={index}>{ele}</span>
        }
        return (
          <XOneNumber
            key={index}
            value={ele}
            radius={radius}
            animationConfig={animationConfig}
          />
        )
      })}
    </AnimatedXNumberContainer>
  )
}

export default XNumber

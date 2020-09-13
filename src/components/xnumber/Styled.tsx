import { animated } from 'react-spring'
import styled from 'styled-components'
import { IXNumberProps } from './interface'

type StyleProps = Omit<IXNumberProps, 'value' | 'style' | 'className'>

export const XOneCharContainer = styled.div((_props) => ({
  overflowY: 'hidden'
}))

export const StyledXOneChar = styled(animated.div)((_props) => ({
  position: 'absolute',
  willChange: 'transform, opacity'
}))

export const XNumberContainer = styled.div<StyleProps>((props) => {
  const { width, height, color, backgroundColor, fontSize, fontWeight } = props
  return {
    display: 'flex',
    justifyContent: 'end',
    alignItems: 'center',
    padding: 5,
    width,
    height,
    color,
    backgroundColor,
    fontSize,
    fontWeight
  }
})

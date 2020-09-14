import { animated } from 'react-spring'
import styled from 'styled-components'
import { IXNumberProps } from './interface'

type StyleProps = Omit<IXNumberProps, 'value' | 'style' | 'className'>

export const XOneCharContainer = styled.span((_props) => ({
  overflowY: 'hidden'
}))

export const StyledXOneChar = styled(animated.span)((_props) => ({
  position: 'absolute',
  willChange: 'transform, opacity'
}))

export const XNumberContainer = styled.span<StyleProps>((props) => {
  const { width, height, color, backgroundColor, fontSize, fontWeight } = props
  return {
    display: 'inline-flex',
    justifyContent: 'end',
    alignItems: 'center',
    padding: '5px 10px',
    width,
    height,
    color,
    backgroundColor,
    fontSize,
    fontWeight
  }
})

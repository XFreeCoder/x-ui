import { animated } from 'react-spring'
import styled from 'styled-components'
import { IXNumberProps } from './interface'

type StyleProps = Omit<IXNumberProps, 'value' | 'style'>

export const XOneCharContainer = styled.div((_props) => ({
  overflowY: 'hidden'
}))

export const StyledXOneChar = styled(animated.div)((_props) => ({
  position: 'absolute',
  willChange: 'transform, opacity'
}))

export const XNumberContainer = styled.div<StyleProps>((props) => ({
  display: 'flex',
  justifyContent: 'end',
  alignItems: 'center',
  color: props.color,
  backgroundColor: props.backgroundColor,
  fontSize: props.fontSize,
  fontWeight: props.fontWeight,
  padding: 5
}))

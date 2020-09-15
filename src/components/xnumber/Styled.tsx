import styled from 'styled-components'

export const XOneCharContainer = styled.span((_props) => ({
  overflowY: 'hidden'
}))

export const StyledXOneChar = styled.span((_props) => ({
  position: 'absolute',
  willChange: 'transform, opacity'
}))

export const XNumberContainer = styled.span((_props) => ({
  display: 'inline-flex',
  flexDirection: 'row-reverse',
  justifyContent: 'end',
  alignItems: 'center',
  padding: '5px 10px'
}))

import styled from 'styled-components'

export const XOneNumberContainer = styled.span((_props) => ({
  display: 'inline-flex',
  alignItems: 'center',
  overflowY: 'hidden'
}))

export const StyledXOneNumber = styled.span((_props) => ({
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

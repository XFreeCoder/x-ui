import { animated } from 'react-spring'
import styled from 'styled-components'

export const XOneCharContainer = styled.div`
  width: 10px;
  height: 20px;
`

export const StyledXOneChar = styled(animated.div)`
  position: absolute;
  height: 20px;
  font-size: 16px;
  will-change: transform, opacity;
`

export const XOneContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: end;
  align-items: center;
`

import { animated } from 'react-spring'
import styled from 'styled-components'

export const OneCharContainer = styled.div`
  width: 10px;
  height: 20px;
`

export const StyledOneChar = styled(animated.div)`
  position: absolute;
  height: 20px;
  font-size: 16px;
  will-change: transform, opacity;
`

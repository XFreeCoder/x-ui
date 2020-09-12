import React, { FC, useMemo } from 'react'
import XOneNumber from './XOneNumber'
import styled from 'styled-components'
import { usePreviousDistinct } from 'react-use'

export interface IProps {
  value?: number
}

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: end;
  align-items: center;
`

const XNumber: FC<IProps> = (props) => {
  const { value = 0 } = props
  const preValue = usePreviousDistinct(value) || 0
  const direction = useMemo(() => (value - preValue >= 0 ? 'up' : 'down'), [
    value,
    preValue
  ])
  const values = value
    .toString()
    .split('')
    .reverse()
    .map((v, index) => ({ value: Number(v), index }))
    .reverse()
  return (
    <Container>
      {values.map((v) => (
        <XOneNumber
          key={v.index}
          direction={direction}
          value={v.value as any}
        />
      ))}
    </Container>
  )
}

export default XNumber

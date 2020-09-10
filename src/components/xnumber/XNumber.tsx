import React, { FC } from 'react'
import XOneNumber from './XOneNumber'
import styled from 'styled-components'

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
  const values = value
    .toString()
    .split('')
    .reverse()
    .map((v, index) => ({ value: Number(v), index }))
    .reverse()
  return (
    <Container>
      {values.map((v) => (
        <XOneNumber key={v.index} value={v.value as any} />
      ))}
    </Container>
  )
}

export default XNumber

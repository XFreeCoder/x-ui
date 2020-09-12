import React, { FC, useMemo } from 'react'
import XOneNumber from './XOneNumber'
import { usePreviousDistinct } from 'react-use'
import { isNumber } from 'lodash'
import XOneChar from './XOneChar'
import { XOneContainer } from './Styled'

export interface IProps {
  value?: number
}

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
    .map((v, index) => {
      const type = isNumber(Number(v)) ? 'number' : 'char'
      return { value: v, index, type }
    })
    .reverse()
  return (
    <XOneContainer>
      {values.map((v) =>
        v.type === 'number' ? (
          <XOneNumber
            key={v.index}
            direction={direction}
            value={Number(v.value) as any}
          />
        ) : (
          <XOneChar
            key={v.index}
            direction={direction}
            value={v.value as any}
          />
        )
      )}
    </XOneContainer>
  )
}

export default XNumber

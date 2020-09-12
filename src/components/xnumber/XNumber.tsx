import React, { FC, useMemo } from 'react'
import XOneNumber from './XOneNumber'
import { usePreviousDistinct } from 'react-use'
import { isNaN } from 'lodash'
import XOneChar from './XOneChar'
import { XNumberContainer } from './Styled'
import { IXNumberProps } from './interface'

const XNumber: FC<IXNumberProps> = (props) => {
  const { value = 0 } = props
  const preValue = usePreviousDistinct(value) || 0
  const direction = useMemo(
    () => (Number(value) - Number(preValue) >= 0 ? 'up' : 'down'),
    [value, preValue]
  )
  const values = value
    .toString()
    .split('')
    .reverse()
    .map((v, index) => {
      const type = isNaN(Number(v)) ? 'char' : 'number'
      return { value: v, index, type }
    })
    .reverse()
  return (
    <XNumberContainer>
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
    </XNumberContainer>
  )
}

export default XNumber

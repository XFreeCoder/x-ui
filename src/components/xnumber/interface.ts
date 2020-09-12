import { CSSProperties } from 'react'

export type OneNumType = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
export type NumSymbolType = '-' | '.'
export type DirectionType = 'up' | 'down'

export interface IXOneNumberProps {
  value?: OneNumType
  direction?: DirectionType
  offsetFrom?: number
  offsetTo?: number
}

export interface IXOneCharProps extends Omit<IXOneNumberProps, 'value'> {
  value: OneNumType | NumSymbolType
}

export interface IXNumberProps {
  /**
   * Display number
   *
   * @default 0
   */
  value?: number | string

  /**
   * Number color
   */
  color?: string

  /**
   * Background color
   */
  backgroundColor?: string

  /**
   * Font size
   */
  fontSize?: number

  /**
   * Font weight
   */
  fontWeight?: number

  /**
   * Number style
   */
  style?: CSSProperties
}

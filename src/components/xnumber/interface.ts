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
   * XNumber width
   *
   * @default 125
   */
  width?: CSSProperties['width']

  /**
   * XNumber height
   *
   * @default 20
   */
  height?: CSSProperties['height']

  /**
   * XNumber className
   */
  className?: string

  /**
   * Numbers color
   *
   * @default '#000'
   */
  color?: CSSProperties['color']

  /**
   * XNumber background color
   *
   * @default '#fff0'
   */
  backgroundColor?: CSSProperties['backgroundColor']

  /**
   * Font size
   *
   * @default 16
   */
  fontSize?: CSSProperties['fontSize']

  /**
   * Font weight
   *
   * @default 400
   */
  fontWeight?: CSSProperties['fontWeight']

  /**
   * XNumber style
   */
  style?: CSSProperties
}

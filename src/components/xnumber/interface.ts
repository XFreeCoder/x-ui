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
   */
  width?: CSSProperties['width']

  /**
   * XNumber height
   */
  height?: CSSProperties['height']

  /**
   * XNumber className
   */
  className?: string

  /**
   * Numbers color
   */
  color?: CSSProperties['color']

  /**
   * XNumber background color
   */
  backgroundColor?: CSSProperties['backgroundColor']

  /**
   * Font size
   */
  fontSize?: CSSProperties['fontSize']

  /**
   * Font weight
   */
  fontWeight?: CSSProperties['fontWeight']

  /**
   * XNumber style
   */
  style?: CSSProperties
}

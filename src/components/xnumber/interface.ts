import { CSSProperties } from 'react'
import { SpringConfig } from 'react-spring'

export interface IXOneNumberProps {
  value: number
  radius?: number
  animationConfig: SpringConfig
}

export interface IXNumberProps {
  /**
   * Display number
   *
   * @default 0
   */
  value?: number | string

  /**
   * Animation config
   *
   * @default animationConfig.default
   */
  animationConfig?: SpringConfig

  /**
   * Number radius
   *
   * @default undefined
   */
  radius?: number

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

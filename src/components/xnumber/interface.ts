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
   * display number
   * @type number | string
   *
   * @default 0
   */
  value?: number | string
}

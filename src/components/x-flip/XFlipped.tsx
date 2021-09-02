import React, { FC } from 'react'
import { Flipped } from 'react-flip-toolkit'
import { IXFlippedProps } from './interface'

const XFlipped: FC<IXFlippedProps> = (props) => <Flipped {...props} />

export default XFlipped

import React from 'react'
import { Flipper, Flipped } from 'react-flip-toolkit'

type FlipperProps = React.ComponentProps<typeof Flipper>

export interface IXFlipperProps extends FlipperProps {}

type FlippedProps = React.ComponentProps<typeof Flipped>

export interface IXFlippedProps extends FlippedProps {}

# x-ui

> A react components library with the extreme user experience

[![NPM](https://img.shields.io/npm/v/XFreeCoder/x-ui.svg)](https://www.npmjs.com/package/x-ui) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com) ![CI](https://github.com/XFreeCoder/x-ui/workflows/CI/badge.svg) ![Deploy](https://github.com/XFreeCoder/x-ui/workflows/Deploy/badge.svg)

## Install

```bash
yarn add x-ui
```

## Usage

```tsx
import React, { FC, useState } from 'react'
import { XNumber } from 'x-ui'
import { useInterval } from 'react-use'
import { random } from 'lodash'

const Random: FC = () => {
  const [value, setValue] = useState(random(-10000, 10000, true).toFixed(2))
  useInterval(() => {
    setValue(random(-10000, 10000, true).toFixed(2))
  }, 2000)
  return <XNumber value={value} />
}
```

## License

MIT © [XFreeCoder](https://github.com/XFreeCoder)

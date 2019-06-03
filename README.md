## Usage

```bash
npm i styled-values
```

```ts
import styled from 'styled-components'
import v from 'styled-values'

interface FlexboxProps {
  row: boolean;
  col: boolean;
  reversed: boolean;
}

export const Flexbox = styled.div<Partial<FlexboxProps>>`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: ${v(({ row, col, reversed }) => ({
    'row-reverse': row && reversed,
    'col-reverse': col && reversed,
    column: col,
    row,
  }))};
  align-items: center;
  border-radius: 4px;
`
```

> Make sure the value mappings are sorted from most specific to least specific. `styled-values` will simply return the first entry with a truthy value. That is why `col && reversed` etc. were placed before just `col` or `row`.

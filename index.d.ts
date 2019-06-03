/**
 ### Usage Example:

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
 */
export default function v<T>(cssValuesPredicate: ((props: T) => {[cssValue: string]: boolean}), defaultValue?: string | number): (props: T) => string | number

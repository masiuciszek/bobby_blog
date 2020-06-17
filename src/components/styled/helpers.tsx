/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { css } from 'styled-components'

type FlexDirection = 'row' | 'column' | 'column-reverse' | 'row-reverse'
type JustifyContent =
  | 'center'
  | 'flex-start'
  | 'flex-end'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'

type AlignItems = 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch'

export const handleFlex = (
  flexDirection: FlexDirection,
  justifyContent: JustifyContent,
  alignItems: AlignItems
) => {
  return css`
    display: flex;
    flex-direction: ${flexDirection};
    justify-content: ${justifyContent};
    align-items: ${alignItems};
  `
}

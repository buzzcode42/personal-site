import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${() => css`
    width: 70%;
    margin: 0 auto;

    ${media.lessThan('medium')`
    width: 100%;
  `}
  `}
`

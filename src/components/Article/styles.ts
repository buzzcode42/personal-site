import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  margin-top: 5rem;
  margin-bottom: 3.5rem;
  width: 50rem;

  ${media.lessThan('medium')`
      margin-bottom: 4rem;
  `}
`
export const LinkWrapper = styled.div`
  ${({ theme }) => css`
    a {
      font-size: 0.9rem;
      color: ${theme.colors.white};
      text-decoration: none;
    }
  `}
`

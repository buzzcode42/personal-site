import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.article`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    margin-top: ${theme.spacings.xlarge};
    margin-bottom: ${theme.spacings.medium};
    width: 50rem;

    ${media.lessThan('medium')`
      margin-bottom: ${theme.spacings.large};
  `}
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

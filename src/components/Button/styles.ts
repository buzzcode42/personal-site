import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.button`
  ${({ theme }) => css`
    text-transform: uppercase;
    width: 14rem;
    border: none;
    outline: none;
    color: ${theme.colors.white};
    background-color: ${theme.colors.secondary};
    transition: background-color 0.3s ease-out;
    padding: 8px;
    min-width: 122px;
    text-align: center;
    line-height: 40px;
    font-weight: 400;
    font-size: 1.2rem;
    cursor: pointer;

    ${media.lessThan('medium')`
      width: 100%;
      margin-top: 0.5rem;
    `}
  `}
`

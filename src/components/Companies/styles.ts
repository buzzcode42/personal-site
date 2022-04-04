import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.section`
  ${() => css`
    width: 70%;
    margin: 0 auto;

    ${media.lessThan('large')`
      width: 100%;
    `}
  `}
`
export const MenuOption = styled.li`
  ${() => css`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    width: 100%;

    ${media.greaterThan('medium')`
    grid-template-columns: repeat(3, 1fr);
    margin: 0 -0.35rem;
  `}
  `}
`
export const MenuLink = styled.a`
  ${({ theme }) => css`
    padding: ${theme.spacings.xsmall} ${theme.spacings.small};
    letter-spacing: 0.05em;
    margin: 0.5rem 0.35rem;
    font-size: ${theme.font.sizes.xsmall};
    font-weight: ${theme.font.normal};
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    cursor: pointer;
    border-radius: ${theme.border.radius};
    background: rgba(0, 119, 181, 0.1);
    -webkit-text-fill-color: ${theme.colors.white};
    text-decoration: none;
    color: ${theme.colors.white};
    opacity: 1;
    transition: all 300ms ease-in-out;

    &:hover {
      transform: scale(1.02);
      opacity: 0.8;
    }
  `}
`

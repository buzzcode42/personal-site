import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.section`
  width: 70%;
  margin: 0 auto;

  ${media.lessThan('large')`
    width: 100%;
  `}
`
export const Menu = styled.a`
  width: 100%;
  margin: 0 -0.35rem;

  ${media.lessThan('medium')`
    margin: 0;
    display: grid;
    grid-template-columns: 1fr;
  `}
`
export const MenuLink = styled.a`
  ${({ theme }) => css`
    padding: 1.75rem 2rem 1.75rem 2rem;
    letter-spacing: 0.05em;
    margin: 0.5rem 0.35rem;
    font-weight: 500;
    display: inline-flex;
    align-items: center;
    justify-content: flex;
    cursor: pointer;
    border-radius: 0.5rem;
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

    img {
      width: 21px;
      height: 21px;
      vertical-align: middle;
      margin-right: 0.5rem;
    }
  `}
`

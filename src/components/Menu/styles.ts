import styled, { css } from 'styled-components'

export const Header = styled.header`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2rem 5rem;
    height: 7rem;
    width: 100%;
    background: ${theme.colors.primary};
    position: static;
    line-height: 2rem;

    @media (min-width: 66.667em) {
      margin: 1.6rem 0;
    }
  `}
`
export const LinkWrapper = styled.div`
  text-decoration: none;
`
export const Menu = styled.ul`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    flex-direction: row;
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.light};
  `}
`
export const MenuOption = styled.li`
  ${({ theme }) => css`
    padding: 0.5rem 0;
    .active {
      background: ${theme.colors.background};
    }

    &:last-of-type {
      margin-right: -0.6rem;

      @media (min-width: 66.667em) {
        margin-right: 0;
      }
    }

    a {
      background: transparent;
      text-decoration: none;
      border-radius: 0.3rem;
      padding: 0.6rem;
      margin: 0 0.25rem;
      color: rgba(0, 0, 0, 0.7);
      border-bottom: none;
      font-weight: 400;
      font-size: 0.95rem;
      color: ${theme.colors.white};

      &:hover {
        background: ${theme.colors.background};
      }

      @media (min-width: 66.667em) {
        padding: 1rem 1.5rem;
        font-size: 1.1rem;
      }
    }
  `}
`

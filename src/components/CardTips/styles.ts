import styled, { css } from 'styled-components'

export const Wrapper = styled.article`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    padding: ${theme.spacings.small};
    width: 100%;
    background: transparent;
    position: relative;
    border: 1px solid ${theme.colors.background};
    margin: 0 auto;

    &:before {
      content: '';
      display: block;
      position: absolute;
      width: calc(1.2rem + 100%);
      height: calc(1rem + 100%);
      background: transparent;
      border-radius: 0.3rem;
      z-index: -1;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);

      @media (min-width: 66.667em) {
        width: calc(1.8rem + 100%);
        height: calc(1.4rem + 100%);
      }
    }

    @media (max-width: 41.667em) {
      width: 100%;
      margin-left: 0;
    }

    @media (min-width: 66.667) {
      border-bottom: 0;
      margin: 0 0 2rem;
      flex-direction: row;
      align-items: center;
      padding: 0;

      &:hover {
        &:before {
          background: ${theme.colors.background};
        }
      }
    }
  `}
`
export const Title = styled.h1`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    font-size: ${theme.font.sizes.small};
    text-decoration: none;
    font-weight: ${theme.font.normal};
    color: ${theme.colors.white};
    margin-bottom: ${theme.spacings.small};

    @media (min-width: 66.667em) {
      margin-bottom: 0;
      flex: 3;
    }

    &.member {
      flex: 1;

      @media (min-width: 66.667em) {
        flex: 1;
      }
    }
  `}
`
export const Image = styled.img`
  ${() => css`
    border-radius: 50%;
    width: 4rem;
    height: 4rem;
    margin-bottom: 0.5rem;
  `}
`
export const Description = styled.small`
  ${({ theme }) => css`
    color: ${theme.colors.gray};
    font-size: ${theme.font.sizes.xsmall};
    font-weight: ${theme.font.normal};
    line-height: 1.5;
  `}
`
export const Link = styled.a`
  ${({ theme }) => css`
    font-weight: ${theme.font.normal};
    text-decoration: none;
  `}
`

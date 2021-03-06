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
    margin-bottom: ${theme.spacings.xxsmall};
    margin-top: ${theme.spacings.xxsmall};

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

    &:hover {
      cursor: pointer;
      border: 1px solid ${theme.colors.white};
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
export const Link = styled.a`
  ${({ theme }) => css`
    text-decoration: none;
    font-weight: ${theme.font.normal};
  `}
`
export const Title = styled.h2`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    font-size: ${theme.font.sizes.small};
    text-decoration: none;
    font-weight: ${theme.font.bold};
    color: ${theme.colors.white};
    margin-bottom: ${theme.spacings.xxsmall};

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
export const CreatedAt = styled.small`
  ${({ theme }) => css`
    color: ${theme.colors.gray};
    font-size: ${theme.font.sizes.xsmall};
    font-weight: ${theme.font.normal};
  `}
`
export const Description = styled.small`
  ${({ theme }) => css`
    color: ${theme.colors.gray};
    font-size: ${theme.font.sizes.xsmall};
    font-weight: ${theme.font.normal};
  `}
`
export const Tags = styled.div`
  ${() => css`
    display: block;
    flex: 1;

    @media (min-width: 66.667em) {
      text-align: left;
    }
  `}
`
export const TagOption = styled.p`
  ${({ theme }) => css`
    display: inline-flex;
    font-weight: 500;
    background: rgba(193, 193, 193, 0.6);
    color: ${theme.colors.white};
    margin-top: 0.7rem;
    margin-right: 0.2rem;
    padding: 0.4rem 0.8rem;
    font-size: 0.8rem;
    border-radius: 3rem;
    border-bottom: 0;
    white-space: nowrap;
    line-height: 1;
    @media (min-width: 66.667em) {
      background: linear-gradient(transparent 0, #636e9a 0);
    }
  `}
`

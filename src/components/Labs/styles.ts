import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.section`
  ${({ theme }) => css`
    margin: 0 auto;
    width: 90%;
    padding: 0.6rem;
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;

    ${media.greaterThan('medium')`
    grid-template-columns: repeat(3, 1fr);
    margin-top: ${theme.spacings.large};
    padding: ${theme.spacings.small};
  `}
  `}
`
export const Link = styled.a`
  ${({ theme }) => css`
    padding: ${theme.spacings.xxsmall};
    background: transparent;
    text-decoration: none;
    font-weight: ${theme.font.normal};
    position: relative;
    border: 1px solid ${theme.colors.background};
    margin-bottom: 0.9rem;
    width: 22rem;
    height: 30rem;
    color: ${theme.colors.white};

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
    }
  `}
`
export const ImageWrapper = styled.div`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.small};

    img {
      height: 17rem;
    }
  `}
`
export const Title = styled.h4`
  ${({ theme }) => css`
    font-weight: ${theme.font.bold};
    font-size: ${theme.font.sizes.xsmall};
    line-height: 1.2;
    margin-bottom: 0.7rem;

    @media (min-width: 66.667em) {
      font-size: ${theme.font.sizes.large};
      line-height: 1.1;
    }

    &.margin {
      margin-bottom: ${theme.spacings.xsmall};

      @media (min-width: 66.667em) {
        margin-bottom: 1.5rem;
      }
    }
  `}
`
export const Description = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.gray};
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.normal};

    @media (max-width: 41.667em) {
      width: 100%;
    }
  `}
`
export const CreatedAt = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    font-weight: ${theme.font.normal};
    color: ${theme.colors.gray};
    margin-bottom: 1.5rem;
  `}
`

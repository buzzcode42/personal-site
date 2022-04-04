import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const FooterContainer = styled.footer`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2rem 5rem;
    height: 7rem;
    width: 100%;
    background-color: ${theme.colors.primary};
    -moz-box-pack: justify;
    -moz-box-align: center;

    ${media.lessThan('medium')`
      flex-direction: column;
    `}
  `}
`

export const FooterRights = styled.header`
  ${() => css`
    ${media.lessThan('medium')`
      margin-bottom: 1rem;
    `}
  `}
`
export const Copyright = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    line-height: 1.5;
    font-weight: normal;
    color: ${theme.colors.white};
    text-align: center;
  `}
`

export const FooterSocial = styled.header`
  ${() => css`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex: 0.2 1 0%;

    ${media.greaterThan('medium')`
      width: 70%;
    `}
  `}
`
export const Link = styled.a`
  ${({ theme }) => css`
    margin: 0px 0.3rem;
    font-size: ${theme.font.sizes.xlarge};
    cursor: pointer;
  `}
`

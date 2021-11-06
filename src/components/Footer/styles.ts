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
  ${({ theme }) => css`
    /*flex: 0.2 1 0%;*/
    -moz-box-pack: start;
    > h4 {
      font-size: ${theme.font.sizes.small};
      line-height: 2rem;
      font-weight: normal;
      color: ${theme.colors.white};
    }

    ${media.lessThan('medium')`
      margin-bottom: 1rem;
    `}
  `}
`

export const FooterSocial = styled.header`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex: 0.2 1 0%;
  width: 70%;
  > a {
    margin: 0px 0.3rem;
    font-size: 2rem;
    cursor: pointer;
  }
`

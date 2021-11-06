import styled, { css } from 'styled-components'

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

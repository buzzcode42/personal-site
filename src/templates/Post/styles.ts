import styled, { css } from 'styled-components'

export const Wrapper = styled.section`
  ${() => css`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  `}
`
export const Content = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.large};
    width: 50%;
  `}
`
export const CreatedAt = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.gray};
    font-weight: ${theme.font.normal};
  `}
`

import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.section`
  ${() => css`
    text-align: center;
    padding: 7rem 0;
    background: rgba(0, 0, 0, 0.18);
    margin-top: 5rem;
  `}
`
export const Heading = styled.h2`
  ${({ theme }) => css`
    font-weight: ${theme.font.normal};
    font-size: ${theme.font.sizes.xlarge};
    text-transform: uppercase;
    color: ${theme.colors.white};
    margin: 0;
    line-height: 3rem;

    ${media.greaterThan('medium')`
    font-size: ${theme.font.sizes.xxlarge};
  `}
  `}
`
export const Description = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    line-height: 1.5;
    color: ${theme.colors.white};
    margin: 0.75rem auto 4.4rem;
    max-width: 800px;
  `}
`
export const FormWrapper = styled.div`
  ${() => css`
    padding: 0 1rem;
  `}
`
export const Form = styled.form`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-top: ${theme.spacings.small};

    ${media.greaterThan('medium')`
    flex-direction: row;
  `}
  `}
`

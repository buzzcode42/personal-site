import styled, { css } from 'styled-components'

import { Heading, Description, Container } from 'components/Newsletter/styles'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100vh;

    a {
      font-size: 1.2rem;
      color: ${theme.colors.white};
      text-decoration: none;
    }
  `}
`
export const Title = styled.h1`
  font-size: 3.4rem;
  ${Heading}
`
export const Text = styled.p`
  margin-bottom: 2rem;
  ${Description}
`
export const EmptyContainer = styled.div`
  ${Container}
`

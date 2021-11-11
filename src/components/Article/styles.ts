import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  margin-top: 5rem;
  margin-bottom: 3.5rem;

  ${media.lessThan('medium')`
      margin-bottom: 4rem;
  `}
`
export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  .gatsby-image-wrapper {
    @media (min-width: 66.667em) {
      margin-right: 2.5rem;
    }
  }
  p:last-child {
    margin-bottom: 0;
  }
  &.column {
    flex-direction: column;
    @media (min-width: 66.667em) {
      flex-direction: row;
    }
  }
  &.spaceBetween {
    justify-content: space-between;
  }
  &.marginBottom {
    margin-bottom: 0.8rem;
    @media (min-width: 66.667em) {
      margin-bottom: 1.2rem;
    }
  }
  &.bigMarginBottom {
    margin-bottom: 3.5rem;
    @media (min-width: 66.667em) {
      margin-bottom: 4rem;
    }
  }
`
export const LinkWrapper = styled.div`
  ${({ theme }) => css`
    a {
      font-size: 0.9rem;
      color: ${theme.colors.white};
      text-decoration: none;
    }
  `}
`

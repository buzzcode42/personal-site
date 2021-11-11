import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Container = styled.section`
  margin: 0 auto;
  width: 90%;
  padding: 2rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;

  ${media.lessThan('medium')`
    grid-template-columns: 1fr;
    padding: 0.6rem;
  `}
`
export const Wrapper = styled.a`
  ${({ theme }) => css`
    padding: 2rem;
    background: transparent;
    text-decoration: none;
    font-weight: 400;
    position: relative;
    border: 1px solid #202124;
    margin-bottom: 0.9rem;
    width: 22rem;
    height: 35rem;
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
  margin-bottom: 1.2rem;

  img {
    height: 17rem;
  }
`
export const Title = styled.h4`
  font-weight: 600;
  font-size: 1.4rem;
  line-height: 1.2;
  margin-bottom: 0.7rem;

  @media (min-width: 66.667em) {
    font-size: 1.8rem;
    line-height: 1.1;
  }

  &.margin {
    margin-bottom: 1.2rem;
    @media (min-width: 66.667em) {
      margin-bottom: 1.5rem;
    }
  }
`
export const Description = styled.p`
  color: #949495;
  font-size: 1.2rem;
  font-weight: 400;

  @media (max-width: 41.667em) {
    width: 100%;
  }
`
export const Date = styled.span`
  font-size: 1rem;
  font-weight: 400;
`

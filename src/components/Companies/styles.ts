import styled from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.section`
  width: 60%;
  margin: 0 auto;

  @media (max-width: 41.667em) {
    width: 100%;
  }
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
export const Menu = styled.a`
  width: 100%;
  margin: 0 -0.35rem;

  ${media.lessThan('medium')`
    margin: 0;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  `}
`
export const MenuLink = styled.a`
  padding: 0.75rem 1rem 0.75rem 2rem;
  letter-spacing: 0.05em;
  margin: 0.5rem 0.35rem;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  justify-content: flex;
  cursor: pointer;
  border-radius: 0.5rem;
  background: rgba(0, 119, 181, 0.1);
  -webkit-text-fill-color: #0077b5;
  text-decoration: none;
  color: #0077b5;
  opacity: 1;
  transition: all 300ms ease-in-out;

  &:hover {
    transform: scale(1.02);
    opacity: 0.8;
  }

  img {
    width: 21px;
    height: 21px;
    vertical-align: middle;
    margin-right: 0.5rem;
  }
`
export const Title = styled.h2`
  font-weight: 600;
  font-size: 1.4rem;
  line-height: 1.2;
  margin-bottom: 1rem;

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
export const Contact = styled.div`
  display: flex;
  flex-direction: column;
  form {
    margin-top: 1.6rem;
    margin-left: 0;
  }
  @media (min-width: 66.667em) {
    flex-direction: row;
    form {
      margin-top: 0;
      margin-left: 2rem;
    }
  }
`
export const Left = styled.div``

export const Text = styled.p`
  color: #949495;
  font-size: 1.4rem;
  font-weight: 400;
  width: 30em;

  ${media.lessThan('medium')`
    width: 100%;
    font-size: 1.2rem;
  `}
`

import styled from 'styled-components'

export const CardWrapper = styled.a`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  width: 100%;
  background: transparent;
  text-decoration: none;
  font-weight: 400;
  position: relative;
  border: 1px solid #202124;
  margin: 0 auto;
  margin-bottom: 1rem;
  margin-top: 1rem;
  text-decoration: none;

  &:before {
    content: '';
    display: block;
    position: absolute;
    width: calc(1.2rem + 100%);
    height: calc(1rem + 100%);
    background: transparent;
    border-radius: 0.3rem;
    z-index: -1;
    left: 50%;
    top: 50%;

    transform: translate(-50%, -50%);
    @media (min-width: 66.667em) {
      width: calc(1.8rem + 100%);
      height: calc(1.4rem + 100%);
    }
  }

  @media (max-width: 41.667em) {
    width: 100%;
    margin-left: 0;
  }

  @media (min-width: 66.667) {
    border-bottom: 0;
    margin: 0 0 2rem;
    flex-direction: row;
    align-items: center;
    padding: 0;

    &:hover {
      &:before {
        background: #202124;
      }
    }
  }
`
export const ArticleTitle = styled.h1`
  display: flex;
  flex-direction: column;
  font-size: 1.1rem;
  text-decoration: none;
  font-weight: 400;
  color: #fff;
  margin-bottom: 2rem;

  @media (min-width: 66.667em) {
    margin-bottom: 0;
    flex: 3;
  }

  &.member {
    flex: 1;

    @media (min-width: 66.667em) {
      flex: 1;
    }
  }

  img {
    border-radius: 50%;
    width: 4rem;
    height: 4rem;
    margin-bottom: 0.5rem;
  }
`
export const ArticleMiddle = styled.small`
  color: #949495;
  font-size: 0.8rem;
  font-weight: 400;
`

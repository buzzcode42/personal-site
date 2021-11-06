import Link from 'next/link'
import styled from 'styled-components'

export const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  margin-top: 5rem;
  margin-bottom: 3.5rem;
  @media (min-width: 66.667em) {
    margin-bottom: 4rem;
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

export const ViewLink = styled(Link)`
  a {
    display: flex;
    font-weight: 500;
    background: rgba(193, 193, 193, 0.06);
    color: #fff;
    padding: 0.6rem 1.2rem;
    margin-left: 19em;
    margin-top: 1rem;
    width: 13%;
    font-size: 0.8rem;
    border-radius: 3rem;
    border-bottom: 0;
    white-space: nowrap;
    text-decoration: none;
    line-height: 1;
    cursor: pointer;

    &:hover {
      background: #202124;
    }

    @media (max-width: 41.667em) {
      width: 39%;
      margin-left: 0;
    }
  }
`

import styled from 'styled-components'
import media from 'styled-media-query'

export const Container = styled.section`
  text-align: center;
  padding: 7rem 0;
  background: rgba(0, 0, 0, 0.18);
  margin-top: 5rem;
`
export const Wrapper = styled.div``
export const Heading = styled.h2`
  font-weight: 400;
  font-size: 3rem;
  text-transform: uppercase;
  color: #fafafa;
  margin: 0;
  line-height: 3rem;

  ${media.lessThan('medium')`
    font-size: 2rem;
  `}
`
export const Description = styled.p`
  font-size: 1.8rem;
  line-height: 3rem;
  color: #fff;
  margin: 0.75rem auto 4.4rem;
  max-width: 800px;

  ${media.lessThan('medium')`
    font-size: 1.3rem;
  `}
`
export const FormWrapper = styled.div`
  ${media.lessThan('medium')`
    padding: 0 1rem;
  `}

  form {
    display: flex;
    justify-content: center;
    margin-top: 2rem;

    ${media.lessThan('medium')`
      flex-direction: column;
    `}
  }
`

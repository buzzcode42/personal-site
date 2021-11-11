import styled from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  width: 70%;
  margin: 0 auto;

  ${media.lessThan('medium')`
    width: 100%;
  `}
`

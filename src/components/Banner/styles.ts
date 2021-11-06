import styled, { css } from 'styled-components'
export const Container = styled.section`
  ${({ theme }) => css`
    position: relative;
    padding: 0 4vw;
    color: ${theme.colors.white};
    background: rgba(0, 0, 0, 0.18) no-repeat 50%;
    background-size: cover;
  `}
`
export const Inner = styled.div`
  padding: 0;
  width: 100%;
  max-width: 1170px;
  margin: 0 auto;

  @media (min-width: 1280px) {
    padding: 0 40px;
  }
`
export const InnerContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 200px;
  padding: 11vw 4vw;
  max-height: 350px;
  text-align: center;
`

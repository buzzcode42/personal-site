import { Container, Footer, Menu } from 'components'

import * as S from './styles'
type BaseProps = {
  children: React.ReactNode
}

const Base = ({ children }: BaseProps) => (
  <S.Wrapper>
    <Menu />
    <Container>{children}</Container>
    <Footer />
  </S.Wrapper>
)

export default Base

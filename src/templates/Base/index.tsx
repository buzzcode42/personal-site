import { Footer, Menu } from 'components'

import * as S from './styles'
type BaseProps = {
  children: React.ReactNode
}

const Base = ({ children }: BaseProps) => (
  <S.Wrapper>
    <Menu />
    <>{children}</>
    <Footer />
  </S.Wrapper>
)

export default Base

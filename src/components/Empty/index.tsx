import Link from 'next/link'
import { Button } from 'components'
import * as S from './styles'

const Empty = () => (
  <S.EmptyContainer>
    <S.Wrapper>
      <S.Title>Página não encontrada</S.Title>
      <S.Text>
        Ooopa! A página não existe, que tal dar uma olhada em alguns posts
        bacanas que tenho compartilhado
      </S.Text>
      <Button size="medium" backgroundColor="secondary" color="white">
        <Link href="/blog">
          <a>Posts do Blog</a>
        </Link>
      </Button>
    </S.Wrapper>
  </S.EmptyContainer>
)

export default Empty

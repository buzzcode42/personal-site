import Card, { CardProps } from 'components/Card'
import { Button, Heading } from 'components'

import * as S from './styles'

export type ArticleProps = {
  items: CardProps[]
}

const Article = ({ items }: ArticleProps) => (
  <S.Wrapper>
    <S.Row>
      <Heading>Últimas do blog</Heading>
    </S.Row>
    {items.map((item, index) => (
      <Card key={index} {...item} />
    ))}
    <S.LinkWrapper>
      <Button href="/blo" fullWidth>
        Ver todos os posts
      </Button>
    </S.LinkWrapper>
  </S.Wrapper>
)

export default Article

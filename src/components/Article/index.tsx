import Card, { CardProps } from 'components/Card'
import { Heading } from 'components'

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
    <S.ViewLink href="/blog">
      <a>Ver todos os posts</a>
    </S.ViewLink>
  </S.Wrapper>
)

export default Article

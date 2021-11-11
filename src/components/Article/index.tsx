import Link from 'next/link'
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
    <S.LinkWrapper>
      <Link href="/blog" passHref>
        <a>Ver todos os posts</a>
      </Link>
    </S.LinkWrapper>
  </S.Wrapper>
)

export default Article

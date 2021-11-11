import Link from 'next/link'
import Card, { CardProps } from 'components/Card'
import { Button, Heading } from 'components'

import * as S from './styles'

export type ArticleProps = {
  items: CardProps[]
  link: string
  loadMore: () => void
}

const Article = ({ items, link = '/blog', loadMore }: ArticleProps) => (
  <S.Wrapper>
    <Heading>Últimas do blog</Heading>
    {items.map((item, index) => (
      <Card key={index} {...item} />
    ))}
    <S.LinkWrapper>
      {loadMore ? (
        <Button onClick={loadMore} fullWidth>
          Carregar mais
        </Button>
      ) : (
        <Button fullWidth>
          <Link href={link}>Ver todos os posts</Link>
        </Button>
      )}
    </S.LinkWrapper>
  </S.Wrapper>
)

export default Article

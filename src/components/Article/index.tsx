import Link from 'next/link'
import Card, { CardProps } from 'components/Card'
import { Button, Heading } from 'components'

import * as S from './styles'

export type ArticleProps = {
  items: CardProps[]
  link?: string
  loadMore?: string
  homeTitle?: string
  blogTitle?: string
}

const Article = ({
  items,
  link,
  loadMore,
  homeTitle,
  blogTitle
}: ArticleProps) => (
  <S.Wrapper>
    {blogTitle ? (
      <Heading>{blogTitle}</Heading>
    ) : (
      <Heading>{homeTitle}</Heading>
    )}
    {items.map((item, index) => (
      <Card key={index} {...item} />
    ))}
    <S.LinkWrapper>
      {loadMore ? (
        <Button size="medium" color="white" backgroundColor="primary">
          {loadMore}
        </Button>
      ) : (
        <Button size="medium" color="white" backgroundColor="primary">
          <Link href={link!}>Ver todos os posts</Link>
        </Button>
      )}
    </S.LinkWrapper>
  </S.Wrapper>
)

export default Article

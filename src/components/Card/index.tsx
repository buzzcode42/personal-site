import * as S from './styles'

export type CardProps = {
  date: string
  title: string
  description: string
  tag: string
  slug: string
}

const Card = ({ date, title, description, tag, slug }: CardProps) => (
  <S.CardWrapper href={`/blog/${slug}`}>
    <S.ArticleTitle>
      <S.ArticleDate>{date}</S.ArticleDate>
      {title}
      <S.ArticleMiddle>{description}</S.ArticleMiddle>
    </S.ArticleTitle>
    <S.ArticleList>
      <S.ArticleCategory>{tag}</S.ArticleCategory>
    </S.ArticleList>
  </S.CardWrapper>
)

export default Card

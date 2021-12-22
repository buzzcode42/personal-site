import * as S from './styles'

export type CardProps = {
  date: string
  title: string
  description: string
  tags: string[]
  slug: string
}

const Card = ({ date, title, description, tags, slug }: CardProps) => (
  <S.CardWrapper href={`/blog/${slug}`}>
    <S.ArticleTitle>
      <S.ArticleDate>{date}</S.ArticleDate>
      {title}
      <S.ArticleMiddle>{description}</S.ArticleMiddle>
    </S.ArticleTitle>
    <S.ArticleList>
      {tags.map((tag, index) => (
        <S.ArticleCategory key={index}>{tag}</S.ArticleCategory>
      ))}
    </S.ArticleList>
  </S.CardWrapper>
)

export default Card

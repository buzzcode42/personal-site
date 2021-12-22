import * as S from './styles'

export type CardSnippetProps = {
  title: string
  image: string
  description: string
  slug: string
}

const CardSnippet = ({ title, image, description, slug }: CardSnippetProps) => (
  <S.CardWrapper href={`/snippets/${slug}`}>
    <S.ArticleTitle>
      <img src={image} alt="React" />
      {title}
      <S.ArticleMiddle>{description}</S.ArticleMiddle>
    </S.ArticleTitle>
  </S.CardWrapper>
)

export default CardSnippet

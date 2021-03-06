import Link from 'next/link'

import * as S from './styles'

export type CardProps = {
  date: string
  title: string
  description: string
  tags: string[]
  slug: string
}

const Card = ({ date, title, description, tags, slug }: CardProps) => (
  <S.Wrapper>
    <Link href={`/post/${slug}`} passHref>
      <S.Link>
        <S.Title>
          <S.CreatedAt>{date}</S.CreatedAt>
          {title}
          <S.Description>{description}</S.Description>
        </S.Title>
        <S.Tags>
          {tags.map((tag, index) => (
            <S.TagOption key={index}>{tag}</S.TagOption>
          ))}
        </S.Tags>
      </S.Link>
    </Link>
  </S.Wrapper>
)

export default Card

import Link from 'next/link'

import * as S from './styles'

export type CardTipsProps = {
  title: string
  image: string
  description: string
  slug: string
}

const CardTips = ({ title, image, description, slug }: CardTipsProps) => (
  <S.Wrapper>
    <Link href={`/post/${slug}`} passHref>
      <S.Link>
        <S.Title>
          <S.Image src={image} alt={title} role="img" />
          {title}
          <S.Description>{description}</S.Description>
        </S.Title>
      </S.Link>
    </Link>
  </S.Wrapper>
)

export default CardTips

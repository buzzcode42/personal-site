import * as S from './styles'

export type CardProps = {
  image: string
  title: string
  description: string
  link: string
  date: string
}
const Card = ({ image, title, description, link, date }: CardProps) => {
  return (
    <S.Link href={link} target="_blank">
      <S.ImageWrapper>
        <img src={image} alt={title} />
      </S.ImageWrapper>
      <S.CreatedAt>{date}</S.CreatedAt>
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
    </S.Link>
  )
}

export default Card

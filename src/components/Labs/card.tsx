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
    <S.Wrapper href={link} target="_blank">
      <S.ImageWrapper>
        <img src={image} alt={title} />
      </S.ImageWrapper>
      <S.Date>{date}</S.Date>
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
    </S.Wrapper>
  )
}

export default Card

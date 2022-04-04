import Card, { CardProps } from './card'

import * as S from './styles'
type LabsProps = {
  items: CardProps[]
}

const Labs = ({ items }: LabsProps) => (
  <S.Wrapper>
    {items.map((item, index) => (
      <Card key={index} {...item} />
    ))}
  </S.Wrapper>
)

export default Labs

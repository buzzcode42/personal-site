import Card, { CardProps } from './card'

import * as S from './styles'
type LabsProps = {
  items: CardProps[]
}

const Labs = ({ items }: LabsProps) => (
  <S.Container>
    {items.map((item, index) => (
      <Card key={index} {...item} />
    ))}
  </S.Container>
)

export default Labs

import CardTips, { CardTipsProps } from 'components/CardTips'
import * as S from './styles'

export type TipsProps = {
  items: CardTipsProps[]
}

const Tips = ({ items }: TipsProps) => (
  <S.Wrapper>
    {items.map((item, index) => (
      <CardTips key={index} {...item} />
    ))}
  </S.Wrapper>
)

export default Tips

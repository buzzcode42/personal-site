import TextContent, { TextContentProps } from 'components/TextContent'

import * as S from './styles'

export type HiProps = {
  items: TextContentProps[]
}

const Hi = ({ items }: HiProps) => (
  <S.Wrapper>
    {items.map((item, index) => (
      <TextContent key={index} {...item} />
    ))}
  </S.Wrapper>
)

export default Hi

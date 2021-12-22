import CardSnippet, { CardSnippetProps } from 'components/CardSnippet'
import * as S from './styles'

export type SnippetsProps = {
  items: CardSnippetProps[]
}

const CodeSnippets = ({ items }: SnippetsProps) => (
  <S.Wrapper>
    {items.map((item, index) => (
      <CardSnippet key={index} {...item} />
    ))}
  </S.Wrapper>
)

export default CodeSnippets

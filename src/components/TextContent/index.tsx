import { Heading } from 'components'

import * as S from './styles'

export type TextContentProps = {
  title?: string
  content: string
}

const TextContent = ({ content, title }: TextContentProps) => (
  <S.Wrapper data-cy="content">
    {!!title && <Heading>{title}</Heading>}
    <div dangerouslySetInnerHTML={{ __html: content }} />
  </S.Wrapper>
)

export default TextContent

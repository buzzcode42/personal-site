import { Heading, Newsletter, TextContent } from 'components'
import { Base } from 'templates'

import * as S from './styles'

export type PostProps = {
  title: string
  createdAt: string
  content: string
}

const Post = ({ createdAt, content, title }: PostProps) => (
  <Base>
    <S.Wrapper>
      <Heading>{title}</Heading>
      <S.CreatedAt>{createdAt}</S.CreatedAt>
      <S.Content>
        <TextContent content={content} />
      </S.Content>
    </S.Wrapper>
    <Newsletter />
  </Base>
)

export default Post

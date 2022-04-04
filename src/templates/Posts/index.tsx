import { Banner, Container, Article } from 'components'
import { CardProps } from 'components/Card'
import { TextContentProps } from 'components/TextContent'

import { Base } from 'templates'

export type PostsProps = {
  articles: CardProps[]
  banner: TextContentProps[]
}
const Posts = ({ articles, banner }: PostsProps) => (
  <Base>
    <Banner items={banner} />
    <Container>
      <Article
        items={articles}
        loadMore="Mais posts"
        blogTitle="Todos os artigos"
      />
    </Container>
  </Base>
)
export default Posts

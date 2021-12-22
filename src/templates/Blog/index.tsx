import { Banner, Container, Article } from 'components'
import { CardProps } from 'components/Card'
import { TextContentProps } from 'components/TextContent'

import { Base } from 'templates'

export type BlogProps = {
  articles: CardProps[]
  banner: TextContentProps[]
}
const Blog = ({ articles, banner }: BlogProps) => (
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
export default Blog

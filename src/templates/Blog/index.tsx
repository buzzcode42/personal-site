import { Container, Article, Newsletter } from 'components'
import { CardProps } from 'components/Card'

import { Base } from 'templates'

export type BlogProps = {
  articles: CardProps[]
}
const Blog = ({ articles }: BlogProps) => (
  <Base>
    <Container>
      <Article
        items={articles}
        loadMore="Mais posts"
        blogTitle="Todos os artigos"
      />
    </Container>
    <Newsletter />
  </Base>
)
export default Blog

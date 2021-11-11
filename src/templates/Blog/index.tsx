import { Container, Article, Newsletter } from 'components'
import { CardProps } from 'components/Card'

import { Base } from 'templates'

export type BlogProps = {
  articles: CardProps[]
}
const Blog = ({ articles }: BlogProps) => (
  <Base>
    <Container>
      <Article items={articles} link="/blog" />
    </Container>
    <Newsletter />
  </Base>
)
export default Blog

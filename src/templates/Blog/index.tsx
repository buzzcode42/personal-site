import { Container, Article, Banner } from 'components'
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
      <Article items={articles} />
    </Container>
  </Base>
)
export default Blog

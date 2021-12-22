import { CardProps } from 'components/Card'
import { TextContentProps } from 'components/TextContent'
import { Article, Banner, Container } from 'components'
import { Base } from 'templates'

export type HomeProps = {
  banner: TextContentProps[]
  article: CardProps[]
}

const Home = ({ article, banner }: HomeProps) => (
  <Base>
    <Banner items={banner} />
    <Container>
      <Article items={article} link="/blog" homeTitle="Últimas do blog" />
    </Container>
  </Base>
)

export default Home

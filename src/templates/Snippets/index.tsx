import { TextContentProps } from 'components/TextContent'
import { CardSnippetProps } from 'components/CardSnippet'
import { Banner, Snippets, Container } from 'components'
import { Base } from 'templates'

export type SnippetsPageProps = {
  banners: TextContentProps[]
  snippets: CardSnippetProps[]
}
const SnippetsPage = ({ banners, snippets }: SnippetsPageProps) => (
  <Base>
    <Banner items={banners} />
    <Container>
      <Snippets items={snippets} />
    </Container>
  </Base>
)

export default SnippetsPage

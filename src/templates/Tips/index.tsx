import { TextContentProps } from 'components/TextContent'
import { CardTipsProps } from 'components/CardTips'
import { Banner, Tips, Container } from 'components'
import { Base } from 'templates'

export type TipsProps = {
  banners: TextContentProps[]
  snippets: CardTipsProps[]
}
const TipsPage = ({ banners, snippets }: TipsProps) => (
  <Base>
    <Banner items={banners} />
    <Container>
      <Tips items={snippets} />
    </Container>
  </Base>
)

export default TipsPage

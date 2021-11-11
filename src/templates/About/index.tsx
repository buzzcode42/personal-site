import { TextContentProps } from 'components/TextContent'
import { Banner, Container, Hi, Companies } from 'components'
import { Base } from 'templates'

export type AboutProps = {
  banner: TextContentProps[]
  about: TextContentProps[]
  companies: TextContentProps[]
}

const About = ({ banner, about, companies }: AboutProps) => (
  <Base>
    <Banner items={banner} />
    <Container>
      <Hi items={about} />
      <Companies items={companies} />
    </Container>
  </Base>
)

export default About

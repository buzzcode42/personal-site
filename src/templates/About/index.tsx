import { TextContentProps } from 'components/TextContent'
import { Banner, Container, Hi, Companies } from 'components'
import { Base } from 'templates'

export type AboutProps = {
  banner: TextContentProps[]
  about: TextContentProps[]
}

const About = ({ banner, about }: AboutProps) => (
  <Base>
    <Banner items={banner} />
    <Container>
      <Hi items={about} />
      <Companies />
    </Container>
  </Base>
)

export default About

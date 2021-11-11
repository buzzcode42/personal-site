import { TextContentProps } from 'components/TextContent'
import { Container, Hi, Companies, Newsletter } from 'components'
import { Base } from 'templates'

export type AboutProps = {
  about: TextContentProps[]
  companies: TextContentProps[]
}

const About = ({ about, companies }: AboutProps) => (
  <Base>
    <Container>
      <Hi items={about} />
      <Companies items={companies} />
    </Container>
    <Newsletter />
  </Base>
)

export default About

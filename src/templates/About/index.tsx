import { TextContentProps } from 'components/TextContent'
import { Container, Hi, Companies } from 'components'
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
  </Base>
)

export default About

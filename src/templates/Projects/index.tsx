import { TextContentProps } from 'components/TextContent'
import { Banner, Container, Newsletter } from 'components'
import { Base } from 'templates'

export type ProjectsProps = {
  banner: TextContentProps[]
}

const Projects = ({ banner }: ProjectsProps) => (
  <Base>
    <Banner items={banner} />
    <Container></Container>
    <Newsletter />
  </Base>
)

export default Projects

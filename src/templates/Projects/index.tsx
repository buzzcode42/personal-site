import { TextContentProps } from 'components/TextContent'
import { Banner } from 'components'
import { Base } from 'templates'

export type ProjectsProps = {
  banner: TextContentProps[]
}

const Projects = ({ banner }: ProjectsProps) => (
  <Base>
    <Banner items={banner} />
  </Base>
)

export default Projects

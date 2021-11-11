import { TextContentProps } from 'components/TextContent'
import { CardProps } from 'components/Labs/card'

import { Banner, Newsletter, Labs } from 'components'
import { Base } from 'templates'

export type ProjectsProps = {
  banner: TextContentProps[]
  projects: CardProps[]
}

const Projects = ({ banner, projects }: ProjectsProps) => (
  <Base>
    <Banner items={banner} />
    <Labs items={projects} />
    <Newsletter />
  </Base>
)

export default Projects

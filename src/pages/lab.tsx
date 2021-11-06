import bannerMock from 'components/Banner/mock'
import Projects, { ProjectsProps } from 'templates/Projects'

export default function Index(props: ProjectsProps) {
  return <Projects {...props} />
}

export async function getStaticProps() {
  return {
    props: {
      banner: bannerMock
    }
  }
}

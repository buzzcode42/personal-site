import aboutmock from 'components/Hi/mock'
import companiesMock from 'components/Companies/mock'
import About, { AboutProps } from 'templates/About'

export default function Index(props: AboutProps) {
  return <About {...props} />
}

export async function getStaticProps() {
  return {
    props: {
      about: aboutmock,
      companies: companiesMock
    }
  }
}

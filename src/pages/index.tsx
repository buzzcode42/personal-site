import articleMock from 'components/Article/mock'
import bannerMock from 'components/Banner/mock'

import Home, { HomeProps } from 'templates/Home'

export default function Index(props: HomeProps) {
  return <Home {...props} />
}

export async function getStaticProps() {
  return {
    props: {
      banner: bannerMock,
      article: articleMock
    }
  }
}

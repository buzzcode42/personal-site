import articlesMock from 'components/Article/mock'
import bannerMock from 'components/Banner/mock'

import Blog, { BlogProps } from 'templates/Blog'
export default function Index(props: BlogProps) {
  return <Blog {...props} />
}
export async function getStaticProps() {
  return {
    props: {
      articles: articlesMock,
      banner: bannerMock
    }
  }
}

import articlesMock, { banner } from 'components/Article/mock'

import Posts, { PostsProps } from 'templates/Posts'
export default function Index(props: PostsProps) {
  return <Posts {...props} />
}
export async function getStaticProps() {
  return {
    props: {
      articles: articlesMock,
      banner: banner
    }
  }
}

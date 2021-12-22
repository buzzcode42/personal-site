import bannerMock from 'components/CodeSnippets/mock'
import { cardMock } from 'components/CodeSnippets/mock'

import SnippetsPage, { SnippetsPageProps } from 'templates/Snippets'
export default function Index(props: SnippetsPageProps) {
  return <SnippetsPage {...props} />
}

export async function getStaticProps() {
  return {
    props: {
      banners: bannerMock,
      snippets: cardMock
    }
  }
}

import bannerMock, { cardMock } from 'components/Tips/mock'

import TipsPage, { TipsProps } from 'templates/Tips'
export default function Index(props: TipsProps) {
  return <TipsPage {...props} />
}

export async function getStaticProps() {
  return {
    props: {
      banners: bannerMock,
      snippets: cardMock
    }
  }
}

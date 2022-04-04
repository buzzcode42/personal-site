import Post, { PostProps } from 'templates/Post'

export default function Index(props: PostProps) {
  return <Post {...props} />
}

export function getStaticPaths() {
  return {
    paths: [{ params: { slug: 'github-chegou' } }],
    fallback: false
  }
}

export function getStaticProps() {
  return {
    props: {
      content:
        '<p>here is code in the macOS Monterey beta that indicates that two new screen resolutions are coming - one of which may well be the 14in MacBook Pro. The two new displays will offer the following resolutions: 3,456 × 2,234 Retina and 3,024 × 1,964 Retina. These resolutions do not correspond to any Macs available to date. The current 13in MacBook Pro offers 2,560 × 1,600 while the current 16in MacBook Pro offers 3,072 × 1,920 pixels. Pixel density will also increase, rising from 226ppi to 250ppi, which would be equivalent to 2x Retina</p><p>here is code in the macOS Monterey beta that indicates that two new screen resolutions are coming - one of which may well be the 14in MacBook Pro. The two new displays will offer the following resolutions: 3,456 × 2,234 Retina and 3,024 × 1,964 Retina. These resolutions do not correspond to any Macs available to date. The current 13in MacBook Pro offers 2,560 × 1,600 while the current 16in MacBook Pro offers 3,072 × 1,920 pixels. Pixel density will also increase, rising from 226ppi to 250ppi, which would be equivalent to 2x Retina</p><p>here is code in the macOS Monterey beta that indicates that two new screen resolutions are coming - one of which may well be the 14in MacBook Pro. The two new displays will offer the following resolutions: 3,456 × 2,234 Retina and 3,024 × 1,964 Retina. These resolutions do not correspond to any Macs available to date. The current 13in MacBook Pro offers 2,560 × 1,600 while the current 16in MacBook Pro offers 3,072 × 1,920 pixels. Pixel density will also increase, rising from 226ppi to 250ppi, which would be equivalent to 2x Retina</p><h2>O novo Github</h2>',
      title: 'Github Chegou',
      createdAt: '04/04/2022'
    }
  }
}

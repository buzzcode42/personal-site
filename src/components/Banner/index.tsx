import TextContent, { TextContentProps } from 'components/TextContent'

import * as S from './styles'

export type BannerProps = {
  items: TextContentProps[]
}

const Banner = ({ items }: BannerProps) => (
  <S.Container>
    <S.Inner>
      <S.InnerContent>
        {items.map((item, index) => (
          <TextContent key={index} {...item} />
        ))}
      </S.InnerContent>
    </S.Inner>
  </S.Container>
)

export default Banner

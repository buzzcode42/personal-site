import TextContent, { TextContentProps } from 'components/TextContent'

import * as S from './styles'

export type BannerProps = {
  items: TextContentProps[]
}

const Banner = ({ items }: BannerProps) => (
  <S.Wrapper>
    <S.Inner>
      <S.Content>
        {items.map((item, index) => (
          <TextContent key={index} {...item} />
        ))}
      </S.Content>
    </S.Inner>
  </S.Wrapper>
)

export default Banner

import { Image, TextContent } from 'components'
import { TextContentProps } from 'components/TextContent'

import companies from 'constants/companies'
import * as S from './styles'

export type CompaniesProps = {
  items: TextContentProps[]
}

const Companies = ({ items }: CompaniesProps) => (
  <S.Wrapper>
    {items.map((item, index) => (
      <TextContent key={index} {...item} />
    ))}
    <S.MenuOption>
      {companies.map(({ alt, target, id, image, name, url }) => (
        <S.MenuLink
          key={id.toString()}
          href={url.toString()}
          target={target}
          aria-label={name.toString()}
        >
          <Image
            alt={alt.toString()}
            heightSize="50"
            image={image}
            widthSize="50"
          />
          {name.toString()}
        </S.MenuLink>
      ))}
    </S.MenuOption>
  </S.Wrapper>
)

export default Companies

import TextContent, { TextContentProps } from 'components/TextContent'

import data from './mock'
import * as S from './styles'

export type CompaniesProps = {
  items: TextContentProps[]
}

const Companies = ({ items }: CompaniesProps) => (
  <S.Wrapper>
    {items.map((item, index) => (
      <TextContent key={index} {...item} />
    ))}
    <S.Menu>
      {data.map(({ id, name, url, img }) => (
        <S.MenuLink key={id} href={url}>
          <img src={img} alt={name} />
          {name}
        </S.MenuLink>
      ))}
    </S.Menu>
  </S.Wrapper>
)

export default Companies

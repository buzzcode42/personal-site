import data from './mock'
import * as S from './styles'

const Companies = () => (
  <S.Wrapper>
    <S.Title>Empresas que passei!</S.Title>
    <S.Contact>
      <S.Left>
        <S.Text>
          Talk to me through my social networks, no need to worry because I will
          get back to you as soon as possible.
        </S.Text>
      </S.Left>
    </S.Contact>
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

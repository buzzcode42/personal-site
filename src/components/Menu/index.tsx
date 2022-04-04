import Image from 'next/image'
import Link from 'next/link'

import navigation from 'constants/menu'
import * as S from './styles'

const Menu = () => (
  <S.Header>
    <S.LinkWrapper>
      <Link href="/" passHref>
        <a>
          <Image
            src="/img/logo.svg"
            alt="Fernando dos Santos Logo"
            width={120}
            height={90}
          />
        </a>
      </Link>
    </S.LinkWrapper>
    <S.Menu>
      {navigation.map(({ id, name, route }) => (
        <S.MenuOption key={id.toString()}>
          <Link href={route.toString()} passHref>
            <a>{name}</a>
          </Link>
        </S.MenuOption>
      ))}
    </S.Menu>
  </S.Header>
)

export default Menu

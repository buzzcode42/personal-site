import Image from 'next/image'
import Link from 'next/link'

import { Languages } from 'components'

import data from './mock'
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
      {data.map(({ id, label, url }) => (
        <S.MenuOptions key={id}>
          <Link href={url} passHref>
            <a>{label}</a>
          </Link>
        </S.MenuOptions>
      ))}
      <Languages />
    </S.Menu>
  </S.Header>
)

export default Menu

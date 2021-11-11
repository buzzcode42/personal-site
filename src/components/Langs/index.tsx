import Image from 'next/image'
import Link from 'next/link'

import mock from './mock'
import * as S from './styles'

const Langs = () => (
  <S.Wrapper>
    {mock.map(({ id, alt, image, url }) => (
      <Link key={id} href={url} passHref>
        <a>
          <Image src={image} alt={alt} width={35} height={35} />
        </a>
      </Link>
    ))}
  </S.Wrapper>
)

export default Langs

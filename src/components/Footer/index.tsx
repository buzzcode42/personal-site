import social from './mock'

import * as S from './styles'

const Footer = () => {
  const currentDate = new Date().getFullYear()
  return (
    <S.FooterContainer>
      <S.FooterRights>
        <S.Copyright>
          Fernando dos Santos {currentDate} © Todos os direitos reservados
        </S.Copyright>
      </S.FooterRights>
      <S.FooterSocial>
        {social.map(({ url, aria, icon, target, id }) => (
          <S.Link
            key={id.toString()}
            href={url}
            target={target}
            arial-label={aria.toString()}
          >
            {icon}
          </S.Link>
        ))}
      </S.FooterSocial>
    </S.FooterContainer>
  )
}

export default Footer

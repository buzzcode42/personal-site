import social from './mock'

import * as S from './styles'

const Footer = () => {
  const currentDate = new Date().getFullYear()
  return (
    <S.FooterContainer>
      <S.FooterRights>
        <h4>
          Fernando dos Santos {currentDate} © Todos os direitos reservados
        </h4>
      </S.FooterRights>
      <S.FooterSocial>
        {social.map(({ url, aria, icon, target }) => (
          <a key={aria} href={url} target={target} arial-label={aria}>
            {icon}
          </a>
        ))}
      </S.FooterSocial>
    </S.FooterContainer>
  )
}

export default Footer

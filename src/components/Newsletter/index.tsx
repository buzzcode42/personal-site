import { HiOutlineMail } from 'react-icons/hi'

import { Button, TextField } from 'components'

import * as S from './styles'

const Newsletter = () => (
  <S.Wrapper>
    <S.Heading>Newsletter</S.Heading>
    <S.Description>
      Seja notificado sempre que um artigo for publicado!
    </S.Description>
    <S.FormWrapper>
      <S.Form action="#">
        <TextField
          name="email"
          placeholder="Email"
          type="email"
          icon={<HiOutlineMail />}
        />
        <Button size="medium" backgroundColor="secondary" color="white">
          Subscrever
        </Button>
      </S.Form>
    </S.FormWrapper>
  </S.Wrapper>
)

export default Newsletter

import { HiOutlineMail } from 'react-icons/hi'
import { Button, InputField } from 'components'
import * as S from './styles'

const Newsletter = () => (
  <S.Container>
    <S.Wrapper>
      <S.Heading>Newsletter</S.Heading>
      <S.Description>Receba os artigos em primeira mão.</S.Description>
      <S.FormWrapper>
        <form action="#">
          <InputField
            name="email"
            placeholder="Email"
            type="email"
            icon={<HiOutlineMail />}
          />
          <Button size="large" fullWidth>
            Subscrever
          </Button>
        </form>
      </S.FormWrapper>
    </S.Wrapper>
  </S.Container>
)

export default Newsletter

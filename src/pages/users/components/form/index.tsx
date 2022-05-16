import { InputText, SelectMultiple, SelectSimple } from 'components'
import { Container, FormUser } from './styles'
import { accessProfilesMock, networksMock, storesMock } from 'utils'

export const UserForm = () => {
  return (
    <FormUser>
      <Container>
        <InputText
          label="Nome de Usuário"
          validate={true}
          errorMessage={'Nome de usuário inválido'}
        />
        <InputText label="CPF" />
        <InputText label="Email" />
        <SelectSimple label="Perfil de Acesso" data={accessProfilesMock} />
        <SelectMultiple
          label="Redes"
          data={networksMock}
          defaultText={'Todas as Redes'}
          legend={'Você pode selecionar múltiplas redes'}
        />
        <SelectMultiple
          label="Lojas"
          data={storesMock}
          defaultText={'Todas as Lojas'}
          legend={'Você pode selecionar múltiplas lojas'}
        />
      </Container>
    </FormUser>
  )
}

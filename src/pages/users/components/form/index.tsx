import { InputText, SelectMultiple, SelectSimple } from 'components'
import { Container, FormUser } from './styles'
import { accessProfilesMock, networksMock, storesMock, usersMock } from 'utils'
import { UserType } from 'types'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
type UserFormProps = {
  userData?: UserType
  setUser: React.Dispatch<React.SetStateAction<UserType>>
}
export const UserForm = ({ userData, setUser }: UserFormProps) => {
  const { id } = useParams()
  const [name, setName] = useState('')
  const [cpf, setCpf] = useState('')
  const [email, setEmail] = useState('')
  const [accessProfile, setAccessProfile] = useState<number>(0)
  const [networks, setNetworks] = useState([])
  const [stores, setStores] = useState<string[]>([])
  const [status, setStatus] = useState(true)
  const [profile, setProfile] = useState<string>()

  const handleUser = (user: UserType) => {
    user.nome && setName(user.nome)
    user.cpf && setCpf(user.cpf)
    user.email && setEmail(user.email)
    user.loja && setStores(user?.loja)
    user.status && setStatus(user.status)
    user.perfil && setProfile(user.perfil)
  }

  useEffect(() => {
    id
      ? handleUser(usersMock.filter((user) => String(user.id) === id)[0])
      : setUser({
          nome: name,
          email,
          cpf,
          perfil: profile,
          rede: networks,
          loja: stores,
          status,
        })
  }, [])

  useEffect(() => {
    userData && handleUser(userData)
  }, [userData])
  return (
    <FormUser>
      <Container>
        <InputText
          value={name}
          setValue={setName}
          label="Nome de Usuário"
          validate={true}
          errorMessage={'Nome de usuário inválido'}
        />
        <InputText value={cpf} setValue={setCpf} label="CPF" />
        <InputText value={email} setValue={setEmail} label="Email" />
        <SelectSimple
          setSelected={setAccessProfile}
          selected={accessProfile}
          label="Perfil de Acesso"
          data={accessProfilesMock}
        />
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

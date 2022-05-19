import { InputText, SelectMultiple, SelectSimple } from 'components'
import { Container, FormUser } from './styles'
import { accessProfilesMock, networksMock, storesMock, usersMock } from 'utils'
import { UserType } from 'types'
import { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
type UserFormProps = {
  userData?: UserType
  setUser: React.Dispatch<React.SetStateAction<UserType>>
}
export const UserForm = ({ userData, setUser }: UserFormProps) => {
  const { id } = useParams()
  const refForm = useRef(null)
  const [name, setName] = useState('')
  const [cpf, setCpf] = useState('')
  const [email, setEmail] = useState('')
  const [networks, setNetworks] = useState<string[]>([])
  const [stores, setStores] = useState<string[]>([])
  const [status, setStatus] = useState(true)
  const [profile, setProfile] = useState<string>('')

  const handleUser = (user: UserType) => {
    user.nome && setName(user.nome)
    user.cpf && setCpf(user.cpf)
    user.email && setEmail(user.email)
    user.loja && setStores(user?.loja)
    user.status && setStatus(user.status)
    user.perfil && setProfile(user.perfil)
    user.rede && setNetworks(user.rede)
    user.loja && setStores(user.loja)
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

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    console.log('submeteu')
  }

  return (
    <FormUser ref={refForm} onSubmit={handleSubmit}>
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
          setSelected={setProfile}
          selected={profile}
          label="Perfil de Acesso"
          data={accessProfilesMock}
        />
        <SelectMultiple
          selected={networks}
          defaultSelected={userData?.rede || []}
          setSelected={setNetworks}
          label="Redes"
          data={networksMock}
          defaultText={'Todas as Redes'}
          legend={'Você pode selecionar múltiplas redes'}
        />
        <SelectMultiple
          selected={stores}
          defaultSelected={userData?.loja || []}
          setSelected={setStores}
          label="Lojas"
          data={storesMock}
          defaultText={'Todas as Lojas'}
          legend={'Você pode selecionar múltiplas lojas'}
        />
      </Container>
    </FormUser>
  )
}

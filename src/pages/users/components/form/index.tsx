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
  const [idParam, setidParam] = useState<number>(Number(id))
  const [name, setName] = useState('')
  const [cpf, setCpf] = useState('')
  const [email, setEmail] = useState('')
  const [networks, setNetworks] = useState<string[]>([])
  const [stores, setStores] = useState<string[]>([])
  const [status, setStatus] = useState(true)
  const [profile, setProfile] = useState<string>('')

  useEffect(() => {
    setUser({ ...userData, nome: name })
  }, [name])
  useEffect(() => {
    setUser({ ...userData, cpf: cpf })
  }, [cpf])
  useEffect(() => {
    setUser({ ...userData, email: email })
  }, [email])
  useEffect(() => {
    setUser({ ...userData, rede: networks })
  }, [networks])
  useEffect(() => {
    setUser({ ...userData, loja: stores })
  }, [stores])
  useEffect(() => {
    setUser({ ...userData, status: status })
  }, [status])
  useEffect(() => {
    setUser({ ...userData, perfil: profile })
  }, [profile])
  useEffect(() => {
    setUser({ ...userData, id: idParam })
  }, [profile])

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
    if (id) {
      setidParam(Number(id))
      handleUser(usersMock.filter((user) => String(user.id) === id)[0])
    } else {
      setUser({})
    }
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
          label="Nome de Usu??rio"
          validate={name.length > 0}
          errorMessage={'Nome de usu??rio inv??lido'}
        />
        <InputText
          value={cpf}
          setValue={setCpf}
          label="CPF"
          validate={cpf.length > 0}
          errorMessage={'CPF inv??lido'}
        />
        <InputText
          value={email}
          setValue={setEmail}
          label="Email"
          validate={email.length > 0}
          errorMessage={'Email inv??lido'}
        />
        <SelectSimple
          setSelected={setProfile}
          selected={profile}
          label="Perfil de Acesso"
          data={accessProfilesMock}
          validate={profile.length > 0}
          errorMessage={'Selecione um perfil'}
        />
        <SelectMultiple
          selected={networks}
          defaultSelected={userData?.rede || []}
          setSelected={setNetworks}
          label="Redes"
          data={networksMock}
          validate={networks.length > 0}
          errorMessage={'Selecione pelo menos uma rede'}
          defaultText={'Todas as Redes'}
          legend={'Voc?? pode selecionar m??ltiplas redes'}
        />
        <SelectMultiple
          selected={stores}
          defaultSelected={userData?.loja || []}
          setSelected={setStores}
          label="Lojas"
          data={storesMock}
          defaultText={'Todas as Lojas'}
          legend={'Voc?? pode selecionar m??ltiplas lojas'}
        />
      </Container>
    </FormUser>
  )
}

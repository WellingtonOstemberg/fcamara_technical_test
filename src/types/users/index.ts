export type UserType = {
  id: number
  nome: string
  email: string
  cpf?: string
  password?: string
  rede?: string[]
  loja?: string[]
  perfil: string
  status: boolean
}

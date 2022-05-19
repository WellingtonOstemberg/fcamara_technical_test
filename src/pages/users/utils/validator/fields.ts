import { UserType } from 'types'

export type ValidateUserFieldsType = (user: UserType) => {
  isValid: boolean
  userValidFields: {
    nome?: boolean
    email?: boolean
    cpf?: boolean
    rede?: boolean
    loja?: boolean
    perfil?: boolean
    status?: boolean
  }
}
export const validateUserFields: ValidateUserFieldsType = (user) => {
  let isValid = true
  const userValidFields = {
    nome: true,
    email: true,
    cpf: true,
    rede: true,
    perfil: true,
    status: true,
  }
  if (user && user.nome && user.nome?.length < 1) {
    isValid = false
    userValidFields.nome = false
  }
  if (user && user.email && user.email?.length < 1) {
    isValid = false
    userValidFields.email = false
  }
  if (user && user.cpf && user.cpf?.length < 1) {
    isValid = false
    userValidFields.cpf = false
  }
  if (user.rede && user.rede?.length > 0) {
    isValid = false
    userValidFields.rede = false
  }
  if (!user.perfil) {
    isValid = false
    userValidFields.perfil = false
  }
  if (!user.status) {
    isValid = false
    userValidFields.status = false
  }
  return {
    isValid,
    userValidFields,
  }
}

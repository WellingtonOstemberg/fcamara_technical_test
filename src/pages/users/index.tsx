import {
  BtnPrimaryLifted,
  CardHeaderCampanha,
  SearchInput,
  TableUsers,
} from 'components'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAllUsers } from 'services'
import { UserType } from 'types'
import { NavItemWrapper } from './style'

export const Users = () => {
  const navigate = useNavigate()
  const [searchParams, setSearchParams] = useState('')
  const { getFetchUsers, usersAsyncSlice } = useAllUsers()
  const [users, setUsers] = useState<UserType[]>([])
  const handleNavigate = () => {
    navigate('/usuarios/novo')
  }

  useEffect(() => {
    console.log('Estou buscando por: ', searchParams)
  }, [searchParams])

  useEffect(() => {
    setUsers(
      JSON.parse(
        JSON.parse(localStorage.getItem('persist:root') || '').usersAsync,
      ).users,
    )
    getFetchUsers()
  }, [])

  const routeHeader = () => {
    return (
      <NavItemWrapper>
        <SearchInput value={searchParams} setValue={setSearchParams} />
        <BtnPrimaryLifted
          onClick={handleNavigate}
          width="184px"
          text="Novo usuário"
        />
      </NavItemWrapper>
    )
  }

  return (
    <>
      <CardHeaderCampanha headerItems={routeHeader} />
      <TableUsers users={users || usersAsyncSlice.users} />
    </>
  )
}

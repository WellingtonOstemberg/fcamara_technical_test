import { usersMock } from 'mocks'
import { useEffect, useState } from 'react'
import { usePutUser } from 'services'
import Swal from 'sweetalert2'
import { SwitchContainer, SwitchLabel } from './styles'

type InputSwitchProps = {
  value?: any
}
export const InputSwitch = ({ value }: InputSwitchProps) => {
  const { putFetchUser } = usePutUser()
  const usersMocked = usersMock
  const [checkedInput, setCheckedInput] = useState(false)
  const handleSaveUser = (checked: boolean) => {
    Swal.fire({
      text: checked
        ? 'Usuário ativado com sucesso!'
        : 'Usuário desativado com sucesso!',
      icon: 'success',
      width: '300px',
    })
    putFetchUser({ id: value, status: checked })
  }
  useEffect(() => {
    setCheckedInput(
      (usersMocked.filter((user) => user.id === value) &&
        usersMocked.filter((user) => user.id === value).length > 0 &&
        usersMocked.filter((user) => user.id === value)[0].status) ||
        false,
    )
  }, [])
  const handleChecked = () => {
    handleSaveUser(!checkedInput)
    setCheckedInput((c) => !c)
  }
  return (
    <SwitchContainer>
      <SwitchLabel>
        <input
          type="checkbox"
          checked={checkedInput}
          onChange={handleChecked}
        />
        <span className="slider round"></span>
      </SwitchLabel>
      <span>{checkedInput ? 'Ativo' : 'Inativo'}</span>
    </SwitchContainer>
  )
}

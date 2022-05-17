import { useEffect, useState } from 'react'
import { SwitchContainer, SwitchLabel } from './styles'

type InputSwitchProps = {
  value?: any
}
export const InputSwitch = ({ value }: InputSwitchProps) => {
  const [checkedInput, setCheckedInput] = useState(false)
  useEffect(() => {
    setCheckedInput(true)
  }, [])
  const handleChecked = () => {
    console.log(value)
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

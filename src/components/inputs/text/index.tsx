import { generateMutableString } from 'utils'
import { CgDanger } from 'react-icons/cg'
import { InputTextContainer } from './styles'
import { SetStateAction } from 'react'
type InputTextProps = {
  label?: string
  placeholder?: string
  validate?: boolean
  errorMessage?: string
  value: string
  setValue: React.Dispatch<React.SetStateAction<string>>
}
export const InputText = ({
  label,
  placeholder,
  validate = true,
  errorMessage = 'Dados inválidos',
  value,
  setValue,
}: InputTextProps) => {
  const inputId = generateMutableString()
  const errorNotification = () => {
    return (
      <>
        <CgDanger />
        <span>{errorMessage}</span>
      </>
    )
  }
  const handleInput = (e: { target: { value: SetStateAction<string> } }) => {
    setValue(e.target.value)
  }

  return (
    <InputTextContainer>
      <label htmlFor={inputId}>{label}</label>
      <input
        defaultValue={value}
        onChange={handleInput}
        id={inputId}
        type="text"
        placeholder={placeholder}
      />
      <label className="label-text-validator">
        {!validate && errorNotification()}
      </label>
    </InputTextContainer>
  )
}

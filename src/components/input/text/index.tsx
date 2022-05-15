import { generateMutableString } from 'utils'
import { CgDanger } from 'react-icons/cg'
import { InputTextContainer } from './styles'
type InputTextProps = {
  label?: string
  placeholder?: string
  validate?: boolean
  errorMessage?: string
}
export const InputText = ({
  label,
  placeholder,
  validate = true,
  errorMessage = 'Dados inválidos',
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
  return (
    <InputTextContainer>
      <label htmlFor={inputId}>{label}</label>
      <input id={inputId} type="text" placeholder={placeholder} />
      <label className="label-text-validator">
        {!validate && errorNotification()}
      </label>
    </InputTextContainer>
  )
}

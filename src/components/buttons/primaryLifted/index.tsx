import { IconType } from 'react-icons'
import { Button } from './styles'
interface BtnPrimaryLiftedProps {
  backgroundColor?: string
  color?: string
  borderRadius?: string
  border?: string
  icon?: IconType | JSX.Element
  text?: string
  width?: string
  height?: string
  fontSize?: string
  onClick?: () => void
}
export const BtnPrimaryLifted = (props: BtnPrimaryLiftedProps) => {
  return (
    <Button {...props}>
      {props.icon} <span>{props.text}</span>{' '}
      {!props.icon && !props.text && 'No text'}
    </Button>
  )
}

import { IconType } from 'react-icons'
import { Button } from './styles'
interface ButtonDefaultProps {
  backgroundColor?: string
  color?: string
  borderRadius?: string
  icon?: IconType | JSX.Element
  text?: string
  width?: string
  height?: string
  fontSize?: string
}
export const ButtonDefault = (props: ButtonDefaultProps) => {
  return (
    <Button {...props}>
      {props.icon} {props.text} {!props.icon && !props.text && 'No text'}
    </Button>
  )
}

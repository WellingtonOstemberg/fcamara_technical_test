import { IconType } from 'react-icons'
import { Button } from './styles'
interface BtnPrimaryLiftedProps {
  backgroundColor?: string
  color?: string
  borderRadius?: string
  icon?: IconType | JSX.Element
  text?: string
  width?: string
  height?: string
  fontSize?: string
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}
export const BtnPrimaryLifted = (props: BtnPrimaryLiftedProps) => {
  return (
    <Button {...props}>
      {props.icon} {props.text} {!props.icon && !props.text && 'No text'}
    </Button>
  )
}

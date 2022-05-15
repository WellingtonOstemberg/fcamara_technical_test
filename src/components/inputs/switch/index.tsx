import { SwitchLabel } from './styles'

type InputSwitchProps = {
  active: boolean
}
export const InputSwitch = ({ active }: InputSwitchProps) => {
  return (
    <SwitchLabel>
      <input type="checkbox" defaultChecked={active} />
      <span className="slider round"></span>
    </SwitchLabel>
  )
}

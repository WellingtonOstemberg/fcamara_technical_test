import { IconType } from 'react-icons'
import { BiChevronRight } from 'react-icons/bi'
import { Button } from './styles'

type BtnNavLinkProps = {
  icon: JSX.Element | IconType
  text: string
  active?: boolean
}

export const BtnNavLink = ({ icon, text, active = false }: BtnNavLinkProps) => {
  return (
    <Button active={active}>
      <div>
        {icon}
        <span className="btn-link-text">{text}</span>
      </div>
      <BiChevronRight />
    </Button>
  )
}

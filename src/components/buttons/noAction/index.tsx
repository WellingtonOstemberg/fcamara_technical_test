import { CSSProperties } from 'react'
import { FiTrash } from 'react-icons/fi'
import { Button } from './styles'

type BtnNoActionProps = {
  onClick?: () => void
  style?: CSSProperties
}

export const BtnNoAction = ({ onClick, style }: BtnNoActionProps) => {
  return (
    <Button onClick={onClick} style={style}>
      {<FiTrash height={18} />}
    </Button>
  )
}

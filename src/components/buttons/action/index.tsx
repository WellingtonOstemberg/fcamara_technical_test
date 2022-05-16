import { CSSProperties } from 'react'
import { FiEdit3, FiTrash } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'
import { Button } from './styles'

type BtnActionProps = {
  kind?: string
  style?: CSSProperties
  to: string
}

export const BtnAction = ({ to, kind = 'edit', style }: BtnActionProps) => {
  const navigate = useNavigate()
  const handleNavigate = () => {
    navigate(to)
  }
  switch (kind) {
    case 'delete':
      return (
        <Button onClick={handleNavigate} style={style} kind={kind}>
          {<FiTrash height={18} />}
        </Button>
      )

    default:
      return (
        <Button onClick={handleNavigate} style={style} kind={kind}>
          {<FiEdit3 height={18} />}
        </Button>
      )
  }
}

import { CSSProperties } from 'react'
import { FiEdit3, FiTrash } from 'react-icons/fi'
import { Button } from './styles'

type BtnActionProps = {
  kind?: string
  style?: CSSProperties
}

export const BtnAction = ({ kind = 'edit', style }: BtnActionProps) => {
  switch (kind) {
    case 'delete':
      return (
        <Button style={style} kind={kind}>
          {<FiTrash height={18} />}
        </Button>
      )

    default:
      return (
        <Button style={style} kind={kind}>
          {<FiEdit3 height={18} />}
        </Button>
      )
  }
}

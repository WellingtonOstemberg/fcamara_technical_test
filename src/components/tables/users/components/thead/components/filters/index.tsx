import { TableUsersTHeadFilterDown } from './down'
import { TableUsersTHeadFilterUp } from './up'

export const TableUsersTHeadFilter = () => {
  return (
    <div>
      <TableUsersTHeadFilterUp filter="networkUp" />
      <TableUsersTHeadFilterDown filter="networkDown" />
    </div>
  )
}

import { TableUsersTHeadFilterDown } from './down'
import { TableUsersTHeadFilterUp } from './up'

export const TableUsersTHeadFilter = ({ param }: { param: string }) => {
  return (
    <div>
      <TableUsersTHeadFilterUp filter={`${param}Up`} />
      <TableUsersTHeadFilterDown filter={`${param}Down`} />
    </div>
  )
}

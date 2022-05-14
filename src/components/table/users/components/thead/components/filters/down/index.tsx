import { handleFilter } from 'components/table/users/utils'
import { BiChevronDown } from 'react-icons/bi'
type TableUsersTHeadFilterDownProps = { filter: string }
export const TableUsersTHeadFilterDown = ({
  filter,
}: TableUsersTHeadFilterDownProps) => {
  return (
    <BiChevronDown
      className="table-filter-down"
      onClick={() => handleFilter(filter)}
    />
  )
}

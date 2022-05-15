import { handleFilter } from 'components/tables/users/utils'
import { BiChevronUp } from 'react-icons/bi'
type TableUsersTHeadFilterUpProps = { filter: string }
export const TableUsersTHeadFilterUp = ({
  filter,
}: TableUsersTHeadFilterUpProps) => {
  return (
    <BiChevronUp
      className="table-filter-up"
      onClick={() => handleFilter(filter)}
    />
  )
}

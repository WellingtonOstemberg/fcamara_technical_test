import { FaSearch } from 'react-icons/fa'
import { Input, SearchIconWrapper, SearchInputWrapper } from './styles'

type SearchInputProps = {
  placeholder?: string
}
export const SearchInput = ({
  placeholder = 'Buscar Usuário',
}: SearchInputProps) => {
  return (
    <SearchInputWrapper>
      <Input type="search" placeholder={placeholder} />
      <SearchIconWrapper>
        <FaSearch width={16} height={16} className="search-input-icon" />
      </SearchIconWrapper>
    </SearchInputWrapper>
  )
}

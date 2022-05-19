import { FaSearch } from 'react-icons/fa'
import { Input, SearchIconWrapper, SearchInputWrapper } from './styles'

type SearchInputProps = {
  placeholder?: string
  value: string
  setValue: React.Dispatch<React.SetStateAction<string>>
}
export const SearchInput = ({
  placeholder = 'Buscar Usuário',
  value,
  setValue,
}: SearchInputProps) => {
  return (
    <SearchInputWrapper>
      <Input
        type="search"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
      />
      <SearchIconWrapper>
        <FaSearch width={16} height={16} className="search-input-icon" />
      </SearchIconWrapper>
    </SearchInputWrapper>
  )
}

import { useEffect, useState } from 'react'
import { generateMutableString } from 'utils'
import { SelectSimpleContainer } from './styles'
type SelectOptionsDataType = {
  id: number
  description: string
}
type SelectSimpleProps = {
  label?: string
  data?: SelectOptionsDataType[]
  selectedItem?: number
  selected: number
  setSelected: React.Dispatch<React.SetStateAction<number>>
}
export const SelectSimple = ({
  label,
  data,
  selectedItem,
  selected,
  setSelected,
}: SelectSimpleProps) => {
  const [profilesListActive, setProfilesListActive] = useState(false)
  const inputId = generateMutableString()

  const handleProfileItem = (id: number) => {
    setProfilesListActive((s) => !s)
    setSelected(id)
  }

  useEffect(() => {
    data && data.length > 0 ? data[0].id : 0
    selectedItem && setSelected(selectedItem)
  }, [])

  return (
    <SelectSimpleContainer>
      <label htmlFor={inputId} aria-label={label}>
        {label}
      </label>
      <div onClick={() => setProfilesListActive((s) => !s)}>
        <span>
          {selected !== 0
            ? data?.filter((profile) => profile.id === selected)[0].description
            : 'Selecione um perfil'}
        </span>
      </div>
      <ul className={profilesListActive ? 'active' : ''} id={inputId}>
        {data && data.length > 0 ? (
          data.map((item) => {
            return (
              <li
                className={selected === item.id ? 'active' : ''}
                key={item.id}
                value={item.id}
                onClick={() => handleProfileItem(item.id)}
              >
                {item.description}
              </li>
            )
          })
        ) : (
          <option>Nenhum item a ser exibido</option>
        )}
      </ul>
    </SelectSimpleContainer>
  )
}

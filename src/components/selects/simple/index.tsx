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
  selected: string
  setSelected: React.Dispatch<React.SetStateAction<string>>
}
export const SelectSimple = ({
  label,
  data,
  selected,
  setSelected,
}: SelectSimpleProps) => {
  const [profilesListActive, setProfilesListActive] = useState(false)
  const inputId = generateMutableString()

  useEffect(() => {
    console.log(selected, 'aqui')
  }, [])

  const handleProfileItem = (description: string) => {
    setProfilesListActive((s) => !s)
    setSelected(description)
  }

  return (
    <SelectSimpleContainer>
      <label htmlFor={inputId} aria-label={label}>
        {label}
      </label>
      <div onClick={() => setProfilesListActive((s) => !s)}>
        <span>
          {selected
            ? data &&
              data.filter((profile) => profile.description === selected)
                .length > 0 &&
              data?.filter((profile) => profile.description === selected)[0]
                .description
            : 'Selecione um perfil'}
        </span>
      </div>
      <ul className={profilesListActive ? 'active' : ''} id={inputId}>
        {data && data.length > 0 ? (
          data.map((item) => {
            return (
              <li
                className={selected === item.description ? 'active' : ''}
                key={item.id}
                value={item.id}
                onClick={() => handleProfileItem(item.description)}
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

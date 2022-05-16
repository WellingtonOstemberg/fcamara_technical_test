import { useState } from 'react'
import { generateMutableString } from 'utils'
import { SelectSimpleContainer } from './styles'
type SelectOptionsDataType = {
  id: number
  description: string
}
type SelectSimpleProps = {
  label?: string
  data?: SelectOptionsDataType[]
}
export const SelectSimple = ({ label, data }: SelectSimpleProps) => {
  const [profilesListActive, setProfilesListActive] = useState(false)
  const [profileSelected, setProfileSelected] = useState(
    data && data.length > 0 ? data[0].id : 0,
  )
  const inputId = generateMutableString()

  const handleProfileItem = (id: number) => {
    setProfilesListActive((s) => !s)
    setProfileSelected(id)
  }

  return (
    <SelectSimpleContainer>
      <label htmlFor={inputId} aria-label={label}>
        {label}
      </label>
      <div onClick={() => setProfilesListActive((s) => !s)}>
        <span>
          {profileSelected !== 0
            ? data?.filter((profile) => profile.id === profileSelected)[0]
                .description
            : 'Selecione um perfil'}
        </span>
      </div>
      <ul className={profilesListActive ? 'active' : ''} id={inputId}>
        {data && data.length > 0 ? (
          data.map((item) => {
            return (
              <li
                className={profileSelected === item.id ? 'active' : ''}
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

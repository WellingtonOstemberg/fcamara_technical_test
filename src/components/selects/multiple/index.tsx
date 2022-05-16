import { useState } from 'react'
import { generateMutableString } from 'utils'
import { SelectMultipleContainer } from './styles'
type SelectOptionsDataType = {
  id: number
  description: string
}
type SelectMultipleProps = {
  label?: string
  defaultText?: string
  data?: SelectOptionsDataType[]
  legend?: string
  defaultSelected?: number[]
}
export const SelectMultiple = ({
  label,
  data,
  defaultText = 'Nenhum item selecionado',
  legend,
  defaultSelected,
}: SelectMultipleProps) => {
  const [profilesListActive, setProfilesListActive] = useState(false)
  const [profilesSelected, setProfilesSelected] = useState<number[]>(
    defaultSelected || [],
  )
  const inputId = generateMutableString()

  const handleProfileItem = (id: number) => {
    setProfilesListActive((s) => !s)
    if (profilesSelected.includes(id)) {
      setProfilesSelected(
        profilesSelected
          .filter((profileSelected) => profileSelected !== id)
          .sort((a, b) => a - b),
      )
    } else {
      setProfilesSelected([...profilesSelected, id].sort((a, b) => a - b))
    }
  }

  return (
    <SelectMultipleContainer>
      <label htmlFor={inputId} aria-label={label}>
        {label}
      </label>
      <div onClick={() => setProfilesListActive((s) => !s)}>
        {profilesSelected.length > 0 ? (
          profilesSelected.map((profile, index) => (
            <span>
              {index > 0 && ', '}
              {
                data?.filter((dataItem) => dataItem.id === profile)[0]
                  .description
              }
            </span>
          ))
        ) : (
          <span>{defaultText}</span>
        )}
      </div>
      <ul className={profilesListActive ? 'active' : ''} id={inputId}>
        {data && data.length > 0 ? (
          data.map((item) => {
            return (
              <li
                key={item.id}
                value={item.id}
                className={profilesSelected.includes(item.id) ? 'active' : ''}
                onClick={() => handleProfileItem(item.id)}
              >
                {item.description}
              </li>
            )
          })
        ) : (
          <li>{defaultText}</li>
        )}
      </ul>
      {legend && <label className="label-text-validator">{legend}</label>}
    </SelectMultipleContainer>
  )
}

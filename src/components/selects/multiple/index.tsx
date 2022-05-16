import { useEffect, useState } from 'react'
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
  defaultSelected?: string[]
  selected: string[]
  setSelected: React.Dispatch<React.SetStateAction<string[]>>
}
export const SelectMultiple = ({
  label,
  data,
  defaultText = 'Nenhum item selecionado',
  legend,
  defaultSelected,
  selected,
  setSelected,
}: SelectMultipleProps) => {
  const [profilesListActive, setProfilesListActive] = useState(false)
  const inputId = generateMutableString()

  useEffect(() => {
    setSelected(defaultSelected || [])
  }, [])

  const handleProfileItem = (description: string) => {
    setProfilesListActive((s) => !s)
    if (selected.includes(description)) {
      setSelected(
        selected
          .filter((profileSelected) => profileSelected !== description)
          .sort(),
      )
    } else {
      setSelected([...selected, description].sort())
    }
  }

  return (
    <SelectMultipleContainer>
      <label htmlFor={inputId} aria-label={label}>
        {label}
      </label>
      <div onClick={() => setProfilesListActive((s) => !s)}>
        {selected.length > 0 ? (
          selected.map((profile, index) => (
            <span>
              {index > 0 && ', '}
              {data &&
                data?.filter((dataItem) => dataItem.description === profile)
                  .length > 0 &&
                data?.filter((dataItem) => dataItem.description === profile)[0]
                  .description}
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
                key={item.description}
                value={item.description}
                className={selected.includes(item.description) ? 'active' : ''}
                onClick={() => handleProfileItem(item.description)}
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

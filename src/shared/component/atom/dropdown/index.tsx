import { Dropdown as DropdownComponent } from "./styled"

interface OptionType {
  id: string
  label: string | number
  value: string | number
}

interface DropdownProps {
  id: string
  label: string
  options: OptionType[]
  onChange: (id: string, value: string) => void
  current?: string
}

const Dropdown = ({ id, label, options, onChange, current }: DropdownProps) => {  
  const handleChange = (event: React.ChangeEvent) => {
    const { value } = event.target as HTMLSelectElement
    onChange(id, value)
  }
  return(
    <>
      <label>
        {label}
      <DropdownComponent
        data-testid={`${id}-dropdown`}
        id={id}
        value={current}
        onChange={handleChange}
      >
        {
          options?.map((element: OptionType) => (
            <option key={`${id}-${element.id}`} value={element.value}>
              {element.label}
            </option>)
          )
        }
      </DropdownComponent>
      </label>
    </>
  )
}

export default Dropdown
import User from "../../molecule/user"
import Dropdown from "../../atom/dropdown"
import { ScoreOptions } from "../../../constants"
import Button from "../../atom/button"

interface ScoringFormProps {
  id: string
  label: string
  value: {
    aspek_penilaian_1?: string
    aspek_penilaian_2?: string
    aspek_penilaian_3?: string
    aspek_penilaian_4?: string
  }
  onChange: (id: string, data:{key: string, value: string} ) => void
  onClick: (key: string, id: string) => void
  hideRemoveButton: boolean
}

const ScoringForm = ({
  id,
  label,
  value,
  onChange,
  onClick,
  hideRemoveButton 
}: ScoringFormProps) => {
  const setId = (id: string, data) => {
    const options = [...data]
    options.forEach((item: {
      id: string
      label: string
      value: string
    }) => {
      item.id = `${id}_${item.label}`
      return item
    })
    return options
  }

  const handleChange = (key: string, value: string) => {
    onChange(id, {key, value})
  }

  return(
    <div className="w-full p-4 border rounded-2 flex gap-8" id={id} data-testid='scoring-form'>
      <div className="my-auto">
        <User
          label={label}
        />
      </div>
      <div className="flex gap-4">
        <Dropdown
          id="aspek_penilaian_1"
          label="Aspek penilaian 1"
          options={setId('aspek_penilaian_1', ScoreOptions)}
          onChange={handleChange}
          current={value.aspek_penilaian_1}
        />
        <Dropdown
          id="aspek_penilaian_2"
          label="Aspek penilaian 2"
          options={setId('aspek_penilaian_2', ScoreOptions)}
          onChange={handleChange}
          current={value.aspek_penilaian_2}
        />
        <Dropdown
          id="aspek_penilaian_3"
          label="Aspek penilaian 3"
          options={setId('aspek_penilaian_3', ScoreOptions)}
          onChange={handleChange}
          current={value.aspek_penilaian_3}
        />
        <Dropdown
          id="aspek_penilaian_4"
          label="Aspek penilaian 4"
          options={setId('aspek_penilaian_4', ScoreOptions)}
          onChange={handleChange}
          current={value.aspek_penilaian_4}
        />
      </div>
      {
        !hideRemoveButton && (
          <div className="my-auto">
            <Button
              id={`delete-${id}`}
              variant="tertiary"
              onClick={() => onClick('remove', id)}
            >
              Remove
            </Button>
          </div>
        )
      }
    </div>
  )
}

export default ScoringForm
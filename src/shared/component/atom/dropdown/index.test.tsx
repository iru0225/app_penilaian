import { fireEvent, render, screen } from "@testing-library/react";
import Dropdown from ".";

const mockOptions = [
  {
    id: 'some-id-1',
    label: 'label 1',
    value: 'value-1'
  },
  {
    id: 'some-id-2',
    label: 'label 2',
    value: 'value-2'
  },
  {
    id: 'some-id-3',
    label: 'label 3',
    value: 'value-3'
  }
]

describe('Dropdown component', () => {
  const renderComponent = ({
    id,
    label,
    onChange,
    current
  }) => render(
    <Dropdown
      id={id}
      label={label}
      onChange={onChange}
      options={mockOptions}
      current={current}
    />
  )

  it('should render the component', () => {
    const props = {
      id: 'dropdown-id',
      label: 'Dropdown Label',
      current: 'value-1',
      onChange: () => null
    }
    renderComponent(props)
    const component = screen.getByTestId('dropdown-id-dropdown')
    expect(component).toBeInTheDocument()
  })

  it('should select option', () => {
    let selectedValue
    const onChange = (id: string, value: string) => {
      selectedValue= {id, value}
    }
    const props = {
      id: 'dropdown-id',
      label: 'Dropdown Label',
      current: 'value-1',
      onChange
    }
    renderComponent(props)
    const component = screen.getByTestId('dropdown-id-dropdown')
    fireEvent.change(component, { target: { value: 'value-2' } })
    expect(selectedValue).toEqual({
      id: 'dropdown-id',
      value: 'value-2'
    })
  })
})
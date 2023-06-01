import { render, screen } from "@testing-library/react";
import Text from ".";

describe('Text component', () => {
  const renderComponent = ({
    variant,
    label
  }) => render(
    <Text
      variant={variant}
    >
      {label}
    </Text>
  )

  it('should render the component', () => {
    const props = {
      variant: undefined,
      label: 'some label'
    }
    renderComponent(props)
    const component = screen.getByTestId('text-component')
    expect(component).toBeInTheDocument()
  })

  it('should have label same as props', () => {
    const props = {
      variant: 'title',
      label: 'some label'
    }
    renderComponent(props)
    const component = screen.getByTestId('text-component')
    expect(component.innerHTML).toEqual('some label')
  })
})
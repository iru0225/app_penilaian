import { render, screen } from "@testing-library/react";
import User from ".";

describe('User component', () => {
  const renderComponent = (label) => render(
    <User
      label={label}
    />
  )

  it('should render the component', () => {
    renderComponent('label')
    const component = screen.getByTestId('user-component')
    expect(component).toBeInTheDocument()
  })
})
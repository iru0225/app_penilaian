import { render, screen } from "@testing-library/react";
import Button from ".";

describe('Button component', () => {
  const renderComponent = ({
    id,
    onClick,
    variant,
    children
  }) => render(
    <Button
      id={id}
      onClick={onClick}
      variant={variant}
    >
      {children}
    </Button>
  )

  it('should render the component', () => {
    const props = {
      id: 'some-id',
      onClick: () => null,
      variant: undefined,
      children: 'some-text'
    }
    renderComponent(props)
    const button = screen.getByTestId('some-id-button')
    expect(button).toBeInTheDocument()
  })

  it('should have label same as props', () => {
    const props = {
      id: 'some-id',
      onClick: () => null,
      variant: 'secondary',
      children: 'some-text'
    }
    renderComponent(props)
    const button = screen.getByTestId('some-id-button')
    expect(button.innerHTML).toEqual('some-text')
  })

  it('should clicked', () => {
    let clicked = false
    const onClick = () => {
      clicked = !clicked
    }
    const props = {
      id: 'some-id',
      onClick: onClick,
      variant: 'tertiary',
      children: 'some-text'
    }
    renderComponent(props)
    const button = screen.getByTestId('some-id-button')
    button.click()
    expect(clicked).toEqual(true)
  })
})
import { Button as ButtonComponent } from "./styled"

interface ButtonProps {
  children: string
  id: string
  onClick: () => void
  variant?: 'primary' | 'secondary' | 'tertiary'
}

const Button = ({
  id,
  children,
  onClick,
  variant = 'primary'
}: ButtonProps) => {
  return(
    <ButtonComponent
      data-testid={`${id}-button`}
      id={id}
      variant={variant}
      onClick={onClick}
    >
      {children}
    </ButtonComponent>
  )
}

export default Button
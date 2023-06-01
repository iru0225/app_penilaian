import { Text as TextComponent } from "./styled"

interface TextComponentProps {
  children: string
  variant?: 'title' | 'normal'
}

const Text = ({
  variant = 'normal',
  children
}: TextComponentProps) => {
  return(
    <TextComponent data-testid='text-component' variant={variant}>
      {children}
    </TextComponent>
  )
}

export default Text
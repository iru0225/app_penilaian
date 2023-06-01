import UserIcon from "../../../icons/user-icon"
import Text from "../../atom/text"
import { Container } from "./styled"

interface UserProps {
  label: string
}

const User = ({
  label
}: UserProps) => {
  return(
    <Container data-testid='user-component'>
      <UserIcon />
      <Text>{label}</Text>
    </Container>
  )
}

export default User
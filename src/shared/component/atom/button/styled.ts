import styled from "@emotion/styled";
import tw, { TwStyle } from "twin.macro";

type ButtonVariantNames = 'primary' | 'secondary' | 'tertiary'
type ButtonVariantType = {
  [_key in ButtonVariantNames]: TwStyle
}
const buttonVariant: ButtonVariantType = {
  primary: tw`bg-[#007BFF] text-base font-bold text-white rounded`,
  secondary: tw`bg-white text-base font-bold text-black rounded`,
  tertiary: tw`text-[#9F1B32] text-base bg-none`
}

export const Button = styled.button<{ variant: ButtonVariantNames }>`
  ${tw`w-fit px-4 py-2`}
  ${({ variant }) => variant && buttonVariant[variant]}

  &:hover,
  &:active {
    ${({ variant }) => variant === 'primary' && tw`bg-[#0468d3]`}
    ${({ variant }) => variant === 'secondary' && tw`bg-[black] text-white`}
  }
`
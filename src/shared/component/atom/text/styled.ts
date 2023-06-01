import styled from "@emotion/styled";
import tw, { TwStyle } from "twin.macro";

type TextVariantNames = 'title' | 'normal'
type TextVariantType = {
  [_key in TextVariantNames]: TwStyle
}

const textVariant: TextVariantType = {
  normal: tw`text-sm font-normal`,
  title: tw`text-lg font-bold`
}

export const Text = styled.span<{ variant: TextVariantNames }>`
  ${({ variant }) => variant && textVariant[variant]}
`
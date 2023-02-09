import styled from "styled-components"
import tw from "twin.macro"

export const ButtonBox = styled.button`
  ${tw`
    flex
    px-[1.6rem]
    py-[1rem]
    rounded-[0.8rem]
    items-center
    cursor-pointer
    justify-center
    font-[600]
    outline-none
`}
  padding: ${(props) => props.padding ?? "1rem 1.6rem"};
  color: ${(props) => props.color ?? "#fff"};
  background-color: ${(props) => props.bg ?? "#27AE60"};
  border: ${(props) => props.border ?? "none"};
  font-size: ${(props) => props.fontSize ?? "1.4rem"};
  margin: ${(props) => props.margin ?? "0"};
`

export const IconBox = styled.div`
  ${tw`
    ml-[1rem]
`}
`

import styled from "styled-components"
import tw from "twin.macro"

export const ReplyTextArea = styled.textarea`
  ${tw`
    w-full 
    outline-none 
    py-[1.2rem] 
    px-[1.6rem] 
    resize-none 
    rounded-[.6rem] 
    border 
    border-[#eee]
    `}
`

export const ReplyTitle = styled.h2`
  ${tw`
   text-[2.4rem]
   font-[800] 
   mb-[1.6rem] 
   mt-[2rem]
`}
`
export const ReplyDesription = styled.p`
  ${tw`
  mb-[1rem] 
  text-[1.4rem]
  `}
`
export const ReplyQuestionTitle = styled.h2`
  ${tw`
    text-[2.4rem] 
    font-[800] 
    mb-[1.6rem]
    `}
`

export const ErrorMessage = styled.span`
  ${tw`
  text-[1.3rem] 
  mt-3 
  text-red-500
`}
`

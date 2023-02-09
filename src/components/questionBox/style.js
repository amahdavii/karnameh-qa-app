import styled from "styled-components"
import tw from "twin.macro"

export const QuestionBoxContainer = styled.article`
  ${tw`
  bg-[#F9F9F9] 
  rounded-[.8rem] 
  not-last:mb-[2rem]
  `}
  box-shadow: 0px 3px 8px -1px rgba(50, 50, 71, 0.05), 0px 0px 1px rgba(12, 26, 75, 0.24);
`

export const QuestionBoxTitleArea = styled.div`
  ${tw`
        bg-white
        p-[.8rem 1.6rem]
        flex
        justify-between
        items-center
        rounded-[.8rem] 

    `}
  box-shadow: 0px 3px 8px -1px rgba(50, 50, 71, 0.05), 0px 0px 1px rgba(12, 26, 75, 0.24);
`

export const QuestionBoxContent = styled.div`
  ${tw`
        p-[1.9rem 1.6rem]
    `}
`

export const QuestionBoxImage = styled.img`
  ${tw`
    w-[3.2rem]
    h-[3.2rem] 
    rounded-[.8rem]
    ml-[1.6rem] 
  `}
`
export const QuestionBoxTitle = styled.h2`
  ${tw`
  font-[600]
  `}
`

export const HourContainer = styled.div`
  ${tw`
    px-[1.6rem] 
    ml-[1.2rem]
    border-l
  `}
`
export const DetailTitle = styled.span`
  ${tw`
    text-[1.2rem] 
    font-[400] 
    text-[#777]
    ml-[.4rem]
  `}
`

export const DataDetile = styled.span`
  ${tw`
    text-[#222]
    font-[700]
    text-[1.2rem]
  `}
`

export const ButtonArea = styled.div`
  ${tw`
    justify-end 
    mt-[1.5rem]
  `}
  display: ${(props) => (props.detail ? "none" : "flex")};
`

export const DateContainer = styled.div`
  ${tw`
  ml-[3rem]
  `}
`

export const MessageCount = styled.div`
  ${tw`
  text-[1.2rem] 
  text-[#777] 
  leading-[1rem]

  `}
`
export const MessageIcon = styled.img`
  ${tw`
    ml-2
  `}
`

export const MiddleAlignItem = styled.div`
  ${tw`
    flex 
    items-center
  `}
`
export const PointCount = styled.span`
  ${tw`
   text-[1.2rem]
   leading-[1rem]
   text-[#777]
  `}
`

export const PointCountArea = styled.div`
  ${tw`
    flex 
    items-center
    mr-[1.8rem]
  `}
`

export const PointImage = styled.img`
  ${tw`
  ml-[.6rem]
  `}
`
export const BadPointArea = styled.div`
  ${tw`
    flex
    items-center
    mr-[3rem]
  `}
`

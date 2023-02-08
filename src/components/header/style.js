import styled from "styled-components"
import tw from "twin.macro"

export const HeaderArea = styled.header`
  ${tw`
    bg-white
    py-[1.6rem]
    shadow-[0_3px_50px_-1px_rgba(50, 50, 71, 0.05)]
   `}
`

export const HeaderContainer = styled.div`
  ${tw`
    container
    mx-auto
    flex
    justify-between 
    items-center
   `}
`

export const HeaderTitle = styled.h1`
  ${tw`
    font-[800]
    text-[2.4rem]
 `}
`

export const HeaderLeftSide = styled.div`
  ${tw`
    flex 
    items-center
 `}
`

export const HeaderUserContainer = styled.div`
  ${tw`
    flex
    items-center
    cursor-pointer
    mr-[4rem]
   `}
`

export const HeaderUserProfilePic = styled.img`
  ${tw`
    ml-[1.2rem]
   `}
`

export const HeaderUserName = styled.span`
  ${tw`
    ml-[1.9rem]
    font-[500]
    `}
`

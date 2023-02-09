import styled from "styled-components"
import tw from "twin.macro"

export const LayoutArea = styled.div`
  ${tw`
    flex 
    flex-col
    h-screen
   `}
`

export const MainContent = styled.main`
  ${tw`
    container
    mx-auto 
    py-[3.2rem]
    flex-1
`}
`

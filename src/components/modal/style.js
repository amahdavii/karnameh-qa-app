import tw from "twin.macro"
import styled from "styled-components"

export const ModalContainer = styled.div`
  ${tw`
    flex
    items-center
    justify-center
    fixed
    z-[100]
    top-0
    left-0
    right-0
    bottom-0
    w-full
    h-auto
    min-h-full
    overflow-hidden
    bg-[transparent]
  `}
  display: ${(props) => (props.visiblity ? "flex" : "none")};
`

export const BackDrop = styled.div`
  ${tw`
      min-h-full
      w-full
      flex-1
      bg-[rgba(0,0,0,.38)]  
    `}
`

export const ModalArea = styled.div`
  ${tw`
    bg-[#f9f9f9] 
    w-[70rem] 
    rounded-[.8rem] 
    absolute
  `}
`

export const ModalTitleArea = styled.div`
  ${tw`
    flex
    items-center
    justify-between
    bg-white
    rounded-[.8rem]
    px-[2.4rem] 
    py-[1.2rem]
    `}
  box-shadow: 0px 3px 8px -1px rgba(50, 50, 71, 0.05), 0px 0px 1px rgba(12, 26, 75, 0.24);
`

export const ModalTitle = styled.h2`
  ${tw`
  font-[800]
  `}
`

export const CloseModal = styled.img`
  ${tw`
    cursor-pointer
  `}
`
export const ModalBoxArea = styled.div`
  ${tw`
    py-[1.8rem] 
    px-[2.4rem]
  `}
`
export const ButtonArea = styled.div`
  ${tw`
    flex 
    justify-end 
    mt-[2.4rem] 
  `}
`
export const ModalTextArea = styled.textarea`
  ${tw`
    outline-none 
    border 
    rounded-[.8rem] 
    px-[1.5rem]
    py-[1rem] 
    resize-none
  `}
`
export const ModalInputArea = styled.div`
  ${tw`
    flex 
    flex-col 
    mb-[1.4rem]
  `}
`

export const ModalInput = styled.input`
  ${tw`
  outline-none 
  border 
  rounded-[.8rem] 
  px-[1.5rem] 
  py-[1rem]
  `}
`
export const ModalLabel = styled.label`
  ${tw`
  mb-[1rem]
  `}
`

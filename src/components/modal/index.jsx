import Portal from "../../hoc/portal"
import {
  ModalContainer,
  ModalTitleArea,
  BackDrop,
  ModalArea,
  ModalTitle,
  CloseModal,
  ModalBoxArea,
  ButtonArea,
  ModalTextArea,
  ModalInput,
  ModalInputArea,
  ModalLabel,
} from "./style"
import Close from "@/assets/icons/close.svg"
import Button from "@/components/button"
import { useState } from "react"

const Modal = ({ visible, hide }) => {
  const [question, setQuestion] = useState({ title: "", description: "" })

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log("question", question)
    if (question.title && question.description) {
      hide()
      setQuestion({ title: "", description: "" })
    }
  }

  return (
    <Portal>
      <ModalContainer visiblity={visible}>
        <BackDrop onClick={hide} />
        <ModalArea>
          <ModalTitleArea>
            <ModalTitle>ایجاد سوال جدید</ModalTitle>
            <CloseModal onClick={hide} src={Close} alt="close item" />
          </ModalTitleArea>
          <ModalBoxArea>
            <form onSubmit={handleSubmit}>
              <ModalInputArea>
                <ModalLabel htmlFor="title">موضوع</ModalLabel>
                <ModalInput
                  placeholder="موضوع سوال را وارد کنید"
                  type="text"
                  id="title"
                  value={question.title}
                  onChange={(e) =>
                    setQuestion({ ...question, title: e.target.value })
                  }
                />
              </ModalInputArea>
              <ModalInputArea>
                <ModalLabel htmlFor="description">متن سوال</ModalLabel>
                <ModalTextArea
                  placeholder="متن سوال را وارد کنید"
                  value={question.description}
                  onChange={(e) =>
                    setQuestion({ ...question, description: e.target.value })
                  }
                  id="description"
                  cols="30"
                  rows="5"
                />
              </ModalInputArea>
              <ButtonArea>
                <Button
                  onClick={hide}
                  title="انصراف"
                  margin="0 0 0 2rem"
                  bg="transparent"
                  color="#28ae5f"
                />
                <Button type="submit" title="ایجاد سوال" padding=".8rem 2.1rem" />
              </ButtonArea>
            </form>
          </ModalBoxArea>
        </ModalArea>
      </ModalContainer>
    </Portal>
  )
}

export default Modal

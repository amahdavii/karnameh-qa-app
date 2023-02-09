/* eslint-disable react-hooks/exhaustive-deps */
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
import getCurrentDate from "@/lib/currentDate"
import { useDispatch } from "react-redux"
import { createNewQuestion } from "@/app/question"

const Modal = ({ visible, hide }) => {
  const dispatch = useDispatch()
  const [question, setQuestion] = useState({ title: "", description: "" })

  const createQuestion = () => {
    const time = new Date()
    const date = getCurrentDate()
    let body = {
      avatar: "/avatars/profileimg.avif",
      title: question.title,
      hour: `${time.getHours()}:${time.getMinutes()}`,
      date,
      description: question.description,
      comments: [],
    }
    dispatch(createNewQuestion(body))
    hide()
    setQuestion({ title: "", description: "" })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (question.title && question.description) {
      createQuestion()
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

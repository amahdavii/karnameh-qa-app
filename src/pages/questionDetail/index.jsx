/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useLocation } from "react-router-dom"
import { getDetailQuestion, updateQuestion } from "@/app/question"
import getCurrentDate from "../../lib/currentDate" 
import QuestionBox from "@/components/questionBox"
import Button from "@/components/button"
import {
  ReplyTextArea,
  ReplyTitle,
  ReplyDesription,
  ReplyQuestionTitle,
} from "./style"

const QuestionDetailPage = () => {
  const [reply, setReply] = useState("")
  const { state } = useLocation()
  const { id } = state
  const dispatch = useDispatch()
  const question = useSelector((state) => state.question.questionDetail)
  useEffect(() => {
    dispatch(getDetailQuestion(id))
  }, [id])

  const createComment = () => {
    const time = new Date()
    const date = getCurrentDate()
    const { comments } = question
    let newComment = {
      id: comments.length ? comments.length + 1 : 1,
      avatar: "/avatars/profileimg.avif",
      userName: "علی کیا",
      hour: `${time.getHours()}:${time.getMinutes()}`,
      date,
      description: reply,
      goodPoint: 0,
      badPoint: 0,
    }

    let body = {
      comments: [...comments, newComment],
    }
    dispatch(updateQuestion(body, id))
    setReply("")
  }

  const submitHandler = (event) => {
    event.preventDefault()
    if (reply) createComment()
  }

  return (
    question && (
      <>
        <QuestionBox
          id={question.id}
          title={question.title}
          profileImage={question.avatar}
          description={question.description}
          hour={question.hour}
          date={question.date}
          auther={true}
          messageCount={question.comments?.length}
          detail={true}
        />
        <ReplyQuestionTitle>پاسخ ها</ReplyQuestionTitle>
        {question.comments
          ?.slice()
          .sort((a, b) => a.id - b.id)
          .map((items) => (
            <QuestionBox
              key={items.id}
              id={question.id}
              title={items.userName}
              profileImage={items.avatar}
              description={items.description}
              hour={items.hour}
              date={items.date}
              auther={false}
              goodPointCount={items.goodPoint}
              badPointCount={items.badPoint}
              comments={question.comments}
              commentItem={items}
            />
          ))}
        <div>
          <form onSubmit={submitHandler}>
            <section>
              <ReplyTitle>پاسخ خود را ثبت کنید</ReplyTitle>
              <ReplyDesription>پاسخ خود را ثبت کنید</ReplyDesription>
              <ReplyTextArea
                value={reply}
                onChange={(e) => setReply(e.target.value)}
                cols="30"
                rows="6"
                placeholder="متن پاسخ ..."
              />
            </section>
            <Button
              type="submit"
              title="ارسال پاسخ"
              padding=".8rem 7.1rem"
              margin="1rem 0 0 0"
              className="bg-green-500 text-white"
            />
          </form>
        </div>
      </>
    )
  )
}

export default QuestionDetailPage

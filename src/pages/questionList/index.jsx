/* eslint-disable react-hooks/exhaustive-deps */
import QuestionBox from "@/components/questionBox"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllQuestion } from "@/app/question"

const QuestionListPage = () => {
  const dispatch = useDispatch()
  const questions = useSelector((state) => state.question.questions)

  useEffect(() => {
    dispatch(getAllQuestion())
  }, [])

  return (
    <>
      {questions?.map((item) => (
        <QuestionBox
          key={item.id}
          title={item.title}
          profileImage={item.avatar}
          description={item.description}
          hour={item.hour}
          date={item.date}
          auther={true}
          messageCount={item.comments?.length}
        />
      ))}
    </>
  )
}

export default QuestionListPage

import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"

import Button from "@/components/button"
import { updateQuestion } from "@/app/question"

import {
  QuestionBoxContainer,
  QuestionBoxTitleArea,
  QuestionBoxContent,
  QuestionBoxImage,
  QuestionBoxTitle,
  HourContainer,
  DetailTitle,
  DataDetile,
  ButtonArea,
  DateContainer,
  MessageCount,
  MessageIcon,
  MiddleAlignItem,
  PointCount,
  PointCountArea,
  PointImage,
  BadPointArea,
} from "./style"

import messageIcon from "@/assets/icons/Comment.svg"
import goodPoint from "@/assets/icons/good.svg"
import badPoint from "@/assets/icons/bad-disable.svg"
import redBadPoint from "@/assets/icons/bad.svg"

const QuestionBox = ({
  title,
  hour,
  date,
  auther,
  detail,
  messageCount,
  description,
  profileImage,
  goodPointCount,
  badPointCount,
  id,
  comments,
  commentItem,
}) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const navigateToDetailPage = () => {
    navigate("/detail", {
      state: { id },
    })
  }

  const updateComment = (comment) => {
    let body = {
      comments: comment,
    }
    dispatch(updateQuestion(body, id))
  }

  const handleGoodPoint = () => {
    let newComment = { ...commentItem, goodPoint: commentItem.goodPoint + 1 }
    let filterComment = comments.filter((item) => item.id !== commentItem.id)
    updateComment([newComment, ...filterComment])
  }
  const handleBadPoint = () => {
    let newComment = { ...commentItem, badPoint: commentItem.badPoint + 1 }
    let filterComment = comments.filter((item) => item.id !== commentItem.id)
    updateComment([newComment, ...filterComment])
  }

  return (
    <QuestionBoxContainer>
      <QuestionBoxTitleArea>
        <MiddleAlignItem>
          <QuestionBoxImage src={profileImage} alt="profileimage" />
          <QuestionBoxTitle>{title}</QuestionBoxTitle>
        </MiddleAlignItem>
        <MiddleAlignItem>
          <HourContainer>
            <DetailTitle>ساعت:</DetailTitle>
            <DataDetile>{hour}</DataDetile>
          </HourContainer>
          <DateContainer>
            <DetailTitle>تاریخ:</DetailTitle>
            <DataDetile>{date}</DataDetile>
          </DateContainer>
          {auther ? (
            <MiddleAlignItem>
              <MessageIcon src={messageIcon} alt="message icon" />
              <MessageCount>{messageCount}</MessageCount>
            </MiddleAlignItem>
          ) : (
            <PointCountArea>
              <MiddleAlignItem>
                <PointImage src={goodPoint} alt="good point" />
                <PointCount>{goodPointCount}</PointCount>
              </MiddleAlignItem>
              <BadPointArea>
                <PointImage src={badPoint} alt="bad point" />
                <PointCount>{badPointCount}</PointCount>
              </BadPointArea>
            </PointCountArea>
          )}
        </MiddleAlignItem>
      </QuestionBoxTitleArea>
      <QuestionBoxContent>
        <p>{description}</p>
        <ButtonArea detail={detail}>
          {auther ? (
            <Button
              title="مشاهده جزییات"
              bg="transprent"
              color="#28ae5f"
              border=".1rem solid #27AE60"
              padding=".8rem"
              fontSize="1.2rem"
              onClick={navigateToDetailPage}
            />
          ) : (
            <MiddleAlignItem>
              <Button
                border=".1rem solid #e3e9ec"
                bg="transparent"
                title="پاسخ خوب بود"
                icon={goodPoint}
                color="#28ae5f"
                margin="0 0 0 1.5rem"
                fontSize="1.2rem"
                onClick={handleGoodPoint}
              />
              <Button
                border=".1rem solid #e3e9ec"
                bg="transparent"
                title="پاسخ خوب نبود"
                icon={redBadPoint}
                color="#F16063"
                fontSize="1.2rem"
                onClick={handleBadPoint}
              />
            </MiddleAlignItem>
          )}
        </ButtonArea>
      </QuestionBoxContent>
    </QuestionBoxContainer>
  )
}

export default QuestionBox

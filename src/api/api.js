import Request from "@/lib/request"

export const getQuestionListApi = () => {
  return Request({
    method: "get",
    url: "/questions",
  })
}

export const createQuestionApi = (body) => {
  return Request({
    method: "post",
    data: body,
    url: "/questions",
  })
}

export const updateQuestionApi = (body, id) => {
  return Request({
    method: "patch",
    data: body,
    url: `/questions/${id}`,
  })
}

import Request from "../lib/request"
const { REACT_APP_API_ENDPOINT: baseUrl } = process.env

export const getQuestionListApi = () => {
  return Request({
    method: "get",
    url: `${baseUrl}/questions`,
  })
}

export const createQuestionApi = (body) => {
  return Request({
    method: "post",
    data: body,
    url: `${baseUrl}/questions`,
  })
}

export const updateQuestionApi = (body, id) => {
  return Request({
    method: "patch",
    data: body,
    url: `${baseUrl}/questions/${id}`,
  })
}

export const getDetailQuestionApi = (id) => {
  return Request({
    method: "get",
    url: `${baseUrl}/questions/${id}`,
  })
}

import { createSlice } from "@reduxjs/toolkit"
import { getQuestionListApi, createQuestionApi, updateQuestionApi } from "@/api/api"

const initialState = {
  questions: [],
}

export const questionSlice = createSlice({
  name: "question",
  initialState,
  reducers: {
    setQuestion: (state, action) => {
      state.questions = action.payload
    },
  },
})

export const { setQuestion } = questionSlice.actions

export default questionSlice.reducer
export const getAllQuestion = () => async (dispatch) => {
  try {
    const res = await getQuestionListApi()
    dispatch(setQuestion(res.data))
  } catch (e) {
    return console.error(e.message)
  }
}

export const createNewQuestion = (data) => async (dispatch) => {
  try {
    const res = await createQuestionApi(data)
    if (res.status === "201") dispatch(getAllQuestion())
  } catch (e) {
    return console.error(e.message)
  }
}

export const updateQuestion = (body, id) => async (dispatch) => {
  try {
    const res = await updateQuestionApi(body, id)
    if (res.status === "200") dispatch(getAllQuestion())
  } catch (e) {
    return console.error(e.message)
  }
}

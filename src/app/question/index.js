import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  questions: [],
}

export const questionSlice = createSlice({
  name: "question",
  initialState,
  reducers: {
    setQuestion: (state, action) => {
      state.question = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setQuestion, getQuestion } = questionSlice.actions

export default questionSlice.reducer

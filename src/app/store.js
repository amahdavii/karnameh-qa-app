import { configureStore } from "@reduxjs/toolkit"
import questionReducer from "./question"

const rootReducer = {
  question: questionReducer,
}

export const store = configureStore({
  reducer: rootReducer,
})

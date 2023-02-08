import { combineReducers } from "redux"
import { configureStore } from "@reduxjs/toolkit"
import { persistStore, persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"
import questionReducer from "./question"


const persistConfig = {
  key: "root",
  storage,
}

const rootReducer = combineReducers({
  question: questionReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
})

export const persistor = persistStore(store)

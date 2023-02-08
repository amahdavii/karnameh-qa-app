import { createBrowserRouter } from "react-router-dom"
import MainLayout from "@/layout/mainLayout"
import QuestionListPage from "@/pages/questionList"
import QuestionDetailPage from "@/pages/questionDetail"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <QuestionListPage />,
      },
      {
        path: "/detail",
        element: <QuestionDetailPage />,
      },
    ],
  },
])

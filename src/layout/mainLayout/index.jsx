import { Outlet, useLocation } from "react-router-dom"
import Header from "@/components/header"

import { LayoutArea, MainContent } from "./style"
const MainLayout = () => {
  const location = useLocation()

  return (
    <LayoutArea>
      <Header title={location.pathname === "/" ? "لیست سوالات" : "جزییات سوالات"} />
      <MainContent>
        <Outlet />
      </MainContent>
    </LayoutArea>
  )
}

export default MainLayout

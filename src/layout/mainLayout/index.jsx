import { Outlet, useLocation } from "react-router-dom"
import Header from "@/components/header"

import { LayoutArea, MainContent } from "./style"
import { useState } from "react"
import Modal from "@/components/modal"
const MainLayout = () => {
  const location = useLocation()
  const [visible, setVisible] = useState(false)

  return (
    <LayoutArea>
      <Modal visible={visible} hide={() => setVisible(false)} />
      <Header
        title={location.pathname === "/" ? "لیست سوالات" : "جزییات سوالات"}
        modal={() => setVisible(true)}
      />
      <MainContent>
        <Outlet />
      </MainContent>
    </LayoutArea>
  )
}

export default MainLayout

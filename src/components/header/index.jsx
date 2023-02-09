import Button from "@/components/button"
import plusIcon from "@/assets/icons/plus.svg"
import profileImage from "@/assets/images/profile-pic.svg"
import arrowDown from "@/assets/icons/arrow-down.svg"
import {
  HeaderArea,
  HeaderContainer,
  HeaderTitle,
  HeaderLeftSide,
  HeaderUserContainer,
  HeaderUserProfilePic,
  HeaderUserName,
} from "./style"

const Header = ({ title, modal }) => {
  return (
    <HeaderArea>
      <HeaderContainer>
        <HeaderTitle>{title}</HeaderTitle>
        <HeaderLeftSide>
          <Button
            onClick={modal}
            title="سوال جدید"
            icon={plusIcon}
            fontSize="1.2rem"
          />
          <HeaderUserContainer>
            <HeaderUserProfilePic
              className="ml-[1.2rem]"
              src={profileImage}
              alt="profileimage"
            />
            <HeaderUserName>الناز شاکردوست</HeaderUserName>
            <img src={arrowDown} alt="arrow down" />
          </HeaderUserContainer>
        </HeaderLeftSide>
      </HeaderContainer>
    </HeaderArea>
  )
}

export default Header

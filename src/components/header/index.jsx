import Button from "@/components/button"
import plusIcon from "@/assets/icons/plus.svg"
import profileImage from "@/assets/images/profile-pic.svg"
import arrowDown from "@/assets/icons/arrow-down.svg"

const Header = () => {
  return (
    <header className="bg-white py-[1.6rem]">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="font-[800] text-[2.4rem]">لیست سوالات</h1>
        <div className="flex items-center">
          <Button title="سوال جدید" icon={plusIcon} />
          <div className="flex items-center cursor-pointer mr-[4rem]">
            <img className="ml-[1.2rem]" src={profileImage} alt="profileimage" />
            <span className="ml-[1.9rem] font-[600]">الناز شاکردوست</span>
            <img src={arrowDown} alt="arrow down" />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header

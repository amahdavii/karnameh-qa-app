import { ButtonBox, IconBox } from "./style"

const Button = ({ onClick, bg, color, title, border, icon, fontSize }) => {
  return (
    <ButtonBox
      bg={bg}
      border={border}
      fontSize={fontSize}
      color={color}
      onClick={onClick}
    >
      {title}
      {icon && (
        <IconBox>
          <img src={icon} alt={`${title}-icon`} />
        </IconBox>
      )}
    </ButtonBox>
  )
}

export default Button

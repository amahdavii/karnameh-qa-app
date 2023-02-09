import { ButtonBox, IconBox } from "./style"

const Button = ({
  onClick,
  bg,
  color,
  title,
  border,
  icon,
  fontSize,
  padding,
  margin,
}) => {
  return (
    <ButtonBox
      bg={bg}
      border={border}
      fontSize={fontSize}
      color={color}
      padding={padding}
      onClick={onClick}
      margin={margin}
    >
      {icon && (
        <IconBox>
          <img src={icon} alt={`${title}-icon`} />
        </IconBox>
      )}
      {title}
    </ButtonBox>
  )
}

export default Button

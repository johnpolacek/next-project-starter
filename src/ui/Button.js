import { Button as Btn } from "theme-ui"

const Button = ({ disabled, children }) => (
  <Btn
    disabled={disabled}
    sx={{
      fontSize: 3,
      px: 3,
      py: 2,
      bg: "black",
      color: "#fff",
      boxShadow: "none",
      borderRadius: "4px",
      border: "none",
      cursor: "pointer",
    }}
  >
    {children}
  </Btn>
)

export default Button

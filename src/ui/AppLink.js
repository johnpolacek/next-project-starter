import { Link as A } from "theme-ui"
import Link from "next/link"

const AppLink = ({children, as, href, bg, mode, disabled}) => (
  <Link as={as || href} href={href}>
    <A
      disabled={disabled}
      sx={{
        border: "2px solid",
        borderColor: mode === bg ? "white" : bg,
        bg,
        mx: [2, 3],
        width: ["100%", "180px"],
        transition: "border-color 200ms linear",
        textDecoration: "none",
        fontSize: 3,
        px: 3,
        py: 2,
        color: "#fff",
        boxShadow: "none",
        borderRadius: "4px",
        border: "none",
        cursor: "pointer",
        display: "inline-block",
      }}
      >{children}</A>
  </Link>
)

export default AppLink

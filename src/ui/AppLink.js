import React from "react"
import { Link as A } from "theme-ui"
import Link from "next/link"

const AppLink = ({ children, href, bg, mode, disabled }) => (
  <Link passHref href={disabled ? "#" : href}>
    <A
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
        pointerEvents: disabled ? "none" : "auto",
        cursor: "pointer",
        display: "inline-block",
      }}
    >
      {children}
    </A>
  </Link>
)

export default AppLink

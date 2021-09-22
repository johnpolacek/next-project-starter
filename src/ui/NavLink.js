import { Link as A } from "theme-ui"
import Link from "next/link"
import { useRouter } from "next/router"

const NavLink = ({ children, href }) => {
  const router = useRouter()
  return (
    <Link href={href} passHref>
      <A
        sx={{
          py: [2, 3],
          px: 3,
          fontSize: 3,
          fontWeight: 200,
          display: "inline-block",
          textDecoration: "none",
          borderBottom: "1px solid",
          borderColor:
            router.pathname === href && href !== "/" ? "primary" : "white",
        }}
      >
        {children}
      </A>
    </Link>
  )
}

export default NavLink

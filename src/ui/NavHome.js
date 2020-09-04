import { Text } from "theme-ui"
import NavLink from "./NavLink"

const NavHome = props => (
  <NavLink href="/">
    <Text
      as="h1"
      sx={{
        color: "black",
        fontWeight: "inherit",
        m: 0,
        fontSize: "inherit",
      }}
    >
      <span
        sx={{
          pr: 2,
          position: "relative",
          top: "-2px",
          color: "primary",
        }}
      >
        <span sx={{ letterSpacing: "2px", display: "inline-block" }}>
          &lt;/&gt;
        </span>
      </span>
      <span>Project Starter</span>
    </Text>
  </NavLink>
)

export default NavHome
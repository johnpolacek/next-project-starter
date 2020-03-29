/** @jsx jsx */
import { jsx } from "theme-ui"
import NavHome from "./NavHome"
import NavLink from "./NavLink"
import GithubLink from "./GithubLink"

export default props => (
  <nav sx={{ display: "flex", flexWrap: "wrap", py: [2, 0] }}>
    <div
      sx={{ width: ["100%", "50%"], pl: [0, 3], textAlign: ["center", "left"] }}
    >
      <NavHome />
    </div>
    <div
      sx={{
        width: ["100%", "50%"],
        textAlign: ["center", "right"],
        pr: [0, 3],
      }}
    >
      <NavLink href="/docs">Docs</NavLink>
      <NavLink href="/app">App</NavLink>
      <GithubLink />
    </div>
  </nav>
)

/** @jsx jsx */
import { jsx } from "theme-ui"
import NavLink from "./NavLink"
import GithubLink from "./GithubLink"

export default props => (
  <nav sx={{ display: "flex", flexWrap: "wrap" }}>
    <div sx={{ width: "25%", pl: [2, 3] }}>
      <NavLink href="/">
        <h1
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
        </h1>
      </NavLink>
    </div>
    <div sx={{ width: "75%", textAlign: "right", pr: [2, 3] }}>
      <NavLink href="/docs">Docs</NavLink>
      <NavLink href="/app">App</NavLink>
      <GithubLink />
    </div>
  </nav>
)

/** @jsx jsx */
import { jsx } from "theme-ui"

export default props => (
  <footer
    sx={{
      p: 4,
      color: "#AAA",
      textAlign: "center",
      fontSize: 1,
    }}
  >
    <span sx={{ mx: 3, display: 'inline-block' }}>
      Created by <a href="https://johnpolacek">John Polacek</a>
    </span>
    <span sx={{ mx: 3, display: 'inline-block' }}>
      Open sourced on <a href="https://github.com/johnpolacek/project-starter">Github</a>
    </span>
    <span sx={{ mx: 3, display: 'inline-block' }}>
      Follow <a href="https://twitter.com/johnpolacek">@johnpolacek</a>
    </span>
  </footer>
)

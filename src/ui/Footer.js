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
    <span sx={{ mx: 2 }}>
      Created by <a href="https://johnpolacek">John Polacek</a>
    </span>
    <span sx={{ mx: 2 }}>
      Follow <a href="https://twitter.com/johnpolacek">@johnpolacek</a>
    </span>
  </footer>
)

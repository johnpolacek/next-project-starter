/** @jsx jsx */
import { jsx } from "theme-ui"
import { MDXProvider } from "@mdx-js/react"
import MarkdownContent from "../markdown/home.mdx"

export default props => (
  <MDXProvider>
    <div
      id="home"
      sx={{
        pt: 4,
        px: 3,
        maxWidth: "1100px",
        mx: "auto",
        textAlign: "center",
      }}
    >
      <MarkdownContent />
    </div>
  </MDXProvider>
)

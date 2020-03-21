/** @jsx jsx */
import { jsx } from "theme-ui"
import { MDXProvider } from "@mdx-js/react"
import MarkdownContent from "../../README.md"

export default props => (
  <MDXProvider>
    <div
      id="docs"
      sx={{
        pb: [2, 2, 3, 4],
        maxWidth: "1100px",
        mx: "auto",
        width: "100%",
      }}
    >
      <MarkdownContent />
    </div>
  </MDXProvider>
)

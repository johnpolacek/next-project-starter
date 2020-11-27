/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui"
import { MDXProvider } from "@mdx-js/react"
import MarkdownContent from "../../README.md"

const Docs = (props) => (
  <MDXProvider>
    <div
      id="docs"
      sx={{
        py: [2, 2, 3, 4],
        maxWidth: "800px",
        mx: "auto",
        width: "100%",
      }}
    >
      <MarkdownContent />
    </div>
  </MDXProvider>
)

export default Docs

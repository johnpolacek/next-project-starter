/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui"
import { MDXProvider } from "@mdx-js/react"
import MarkdownContent from "../markdown/home.mdx"

const Home = (props) => (
  <MDXProvider>
    <div
      id="home"
      sx={{
        pt: [5, 6],
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

export default Home

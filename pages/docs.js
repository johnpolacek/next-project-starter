/** @jsx jsx */
import { jsx } from "theme-ui"
import Wrapper from "../src/layout/Wrapper"
import Docs from "../src/views/Docs"

// Note: It is recommended for SEO that you have a different title and description for each page

export default () => (
  <Wrapper
    url="/docs"
    title="Project Starter Docs"
    description="Project Starter Docs for building Web Apps with Next.js, Theme UI, Cypress"
  >
    <Docs />
  </Wrapper>
)

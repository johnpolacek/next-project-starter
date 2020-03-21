/** @jsx jsx */
import { jsx } from "theme-ui"
import Wrapper from "../src/layout/Wrapper"
import Home from "../src/views/Home"

// Note: It is recommended for SEO that you have a different title and description for each page

export default () => (
  <Wrapper
    url="/"
    title="Project Starter"
    description="Project Starter for Web Apps with Next.js, Theme UI, Cypress"
  >
    <Home />
  </Wrapper>
)

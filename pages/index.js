import Wrapper from "../src/layout/Wrapper"
import Home from "../src/views/Home"

// Note: It is recommended for SEO that you have a different title and description for each page

const IndexPage = () => (
  <Wrapper
    url="/"
    title="Project Starter"
    description="Project Starter for Web Apps with Next.js, Theme UI, Cypress"
  >
    <Home />
  </Wrapper>
)

export default IndexPage

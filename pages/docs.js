import Wrapper from "../src/layout/Wrapper"
import Docs from "../src/views/Docs"

// Note: It is recommended for SEO that you have a different title and description for each page

const DocsPage = () => (
  <Wrapper
    url="/docs"
    title="Next Project Starter Docs"
    description="Next Project Starter Docs for building Web Apps with Next.js, Theme UI, Cypress"
  >
    <Docs />
  </Wrapper>
)

export default DocsPage

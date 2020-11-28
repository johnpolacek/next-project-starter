import Wrapper from "../src/layout/Wrapper"
import Home from "../src/views/Home"

// Note: It is recommended for SEO that you have a different title and description for each page

const IndexPage = () => (
  <Wrapper
    url="/"
    title="Next Project Starter"
    description="Get your next React project up and running quickly with Next.js, Theme UI, MDX and more."
  >
    <Home />
  </Wrapper>
)

export default IndexPage

import Wrapper from "../../src/layout/Wrapper"
import App from "../../src/views/App"

const Page = props => {
  return (
    <Wrapper
      url={"/app/"}
      title={"Project Starter | App Example"}
      description={
        "Next.js Project Starter Example with parameterized route props"
      }
    >
      <App {...props} />
    </Wrapper>
  )
}

Page.getInitialProps = ({ query }) => {
  return { ...query }
}

export default Page

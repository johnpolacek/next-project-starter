import Wrapper from "../../src/layout/Wrapper"
import App from "../../src/views/App"

const AppIndexPage = (props) => {
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

AppIndexPage.getInitialProps = ({ query }) => {
  return { ...query }
}

export default AppIndexPage

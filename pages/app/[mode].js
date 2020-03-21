/** @jsx jsx */
import { jsx } from "theme-ui"
import Wrapper from "../../src/layout/Wrapper"
import App from "../../src/views/App"

const Page = props => {
  return (
    <Wrapper
      url={"/app/" + props.mode}
      title={"Project Starter | App Mode " + props.mode.toUpperCase()}
      description={
        props.mode.toUpperCase() + "Next.js Project Starter Example with parameterized route props"
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

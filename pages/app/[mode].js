import Wrapper from "../../src/layout/Wrapper"
import App from "../../src/views/App"

const AppModePage = (props) => {
  return (
    <Wrapper
      url={"/app/" + props.mode}
      title={"Project Starter | App Mode " + props.mode.toUpperCase()}
      description={
        props.mode.toUpperCase() +
        "Next.js Project Starter Example with parameterized route props"
      }
    >
      <App {...props} />
    </Wrapper>
  )
}

AppModePage.getInitialProps = ({ query }) => {
  return { ...query }
}

export default AppModePage

import { Box } from "theme-ui"
import PropTypes from "prop-types"
import Head from "./Head"
import Style from "./Style"
import Main from "../ui/Main"
import Transition from "./Transition"

const Layout = (props) => (
  <>
    <Head {...props} />
    <Main>
      <Transition>{props.children}</Transition>
    </Main>
    <Style />
  </>
)

Layout.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  imageUrl: PropTypes.string,
  imageAlt: PropTypes.string,
}

export default Layout

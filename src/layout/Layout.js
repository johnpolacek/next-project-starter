/** @jsx jsx */
import { jsx } from "theme-ui"
import PropTypes from "prop-types"
import Head from "./Head"
import Style from "./Style"
import Header from "../ui/Header"
import Main from "../ui/Main"
import Footer from "../ui/Footer"

const Layout = props => (
  <>
    <Head {...props} />

    <div
      sx={{
        display: "flex",
        minHeight: "100vh",
        flexDirection: "column",
      }}
    >
      <Header />
      <Main>{props.children}</Main>
      <Footer />
    </div>

    <Style />
  </>
)

Layout.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  imageUrl: PropTypes.string,
  imageAlt: PropTypes.string,
  twitter: PropTypes.string,
  twitterAuthor: PropTypes.string,
}

export default Layout

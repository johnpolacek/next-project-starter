import { Box } from "theme-ui"
import Head from "./Head"
import Style from "./Style"
import Main from "../ui/Main"
import Transition from "./Transition"

const Layout = ({
  title,
  description,
  url,
  imageUrl,
  imageAlt,
  twitter,
  children,
}) => (
  <>
    <Head {...{ title, description, url, imageUrl, imageAlt, twitter }} />
    <Main>
      <Transition>{children}</Transition>
    </Main>
    <Style />
  </>
)

export default Layout

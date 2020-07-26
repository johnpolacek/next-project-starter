/** @jsx jsx */
import { jsx } from "theme-ui"
import PropTypes from "prop-types"
import Link from "next/link"

const DownloadLink = (props) => (
  <a
    download
    sx={{
      textDecoration: "none",
      fontSize: 3,
      mt: 3, 
      mb: [5,6],
      px: 4,
      py: 3,
      bg: "primary",
      color: "#fff",
      boxShadow: "none",
      borderRadius: "4px",
      border: "none",
      cursor: "pointer",
      display: "inline-block",
    }}
    href="https://github.com/johnpolacek/project-starter/archive/master.zip"
  ><img sx={{position:"relative", top:"2px", left: "-8px"}} src="/download.svg" alt="" />Download</a>
)

export default DownloadLink

import { Button as A } from "theme-ui"
import PropTypes from "prop-types"
import Link from "next/link"

const ButtonLink = (props) => (
  <Link as={props.as || props.href} href={props.href}>
    <A
      disabled={props.disabled}
      sx={{
        textDecoration: "none",
        fontSize: 3,
        px: 3,
        py: 2,
        bg: "black",
        color: "#fff",
        boxShadow: "none",
        borderRadius: "4px",
        border: "none",
        cursor: "pointer",
        display: "inline-block",
      }}
      {...props}
    />
  </Link>
)

ButtonLink.propTypes = {
  href: PropTypes.string.isRequired,
  as: PropTypes.string,
}

export default ButtonLink

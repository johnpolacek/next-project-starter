/** @jsx jsx */
import { jsx } from "theme-ui"
import PropTypes from "prop-types"
import Link from "next/link"

const Feature = props => (
  <div
    sx={{
      width: ["100%", "50%", "33.33%"],
      py: 4,
    }}
  >
    <h3 sx={{ color: "primary" }}>{props.title}</h3>
    <ul sx={{ p: 0, m: 0 }}>
      {props.benefits.map(b => (
        <li sx={{ listStyle: "none", mb: 1 }}>{b}</li>
      ))}
    </ul>
    {props.href && (
      <Link href={props.href}>
        <a
          href={props.href}
          sx={{ display: "block", fontStyle: "italic", mt: 3, fontSize: 0 }}
        >
          Find out more
        </a>
      </Link>
    )}
  </div>
)

Feature.propTypes = {
  title: PropTypes.string.isRequired,
  benefits: PropTypes.arrayOf(PropTypes.string).isRequired,
  href: PropTypes.string,
}

export default Feature

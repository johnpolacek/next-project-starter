/** @jsx jsx */
import { Box, Text, jsx } from "theme-ui"
import PropTypes from "prop-types"
import Link from "next/link"

const Feature = props => (
  <Box
    sx={{
      width: ["100%", "50%", "33.33%"],
      py: 4,
    }}
  >
    <Text as="h3" sx={{ fontSize: 4, color: "primary", pb:3 }}>{props.title}</Text>
    <ul sx={{ p: 0, m: 0 }}>
      {props.benefits.map(b => (
        <li
          key={b
            .toLowerCase()
            .split(" ")
            .join("-")}
          sx={{ listStyle: "none", mb: 1 }}
        >
          {b}
        </li>
      ))}
    </ul>
    {props.href && (
      <a
        href={props.href}
        sx={{ display: "block", fontStyle: "italic", mt: 3, fontSize: 0 }}
      >
        Find out more
      </a>
    )}
  </Box>
)

Feature.propTypes = {
  title: PropTypes.string.isRequired,
  benefits: PropTypes.arrayOf(PropTypes.string).isRequired,
  href: PropTypes.string,
}

export default Feature

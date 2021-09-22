import { Box, Text, Link } from "theme-ui"

const Feature = ({ href, title, benefits }) => (
  <Box
    sx={{
      width: ["100%", "50%", "33.33%"],
      pb: 5,
    }}
  >
    <Text as="h3" sx={{ fontSize: 4, color: "primary", pb: 3 }}>
      {title}
    </Text>
    <Box as="ul" sx={{ p: 0, m: 0 }}>
      {benefits.map((b) => (
        <Box
          as="li"
          key={b.toLowerCase().split(" ").join("-")}
          sx={{ listStyle: "none", mb: 1 }}
        >
          {b}
        </Box>
      ))}
    </Box>
    {href && (
      <Link
        href={href}
        sx={{ display: "block", fontStyle: "italic", mt: 3, fontSize: 0 }}
      >
        Find out more
      </Link>
    )}
  </Box>
)

export default Feature

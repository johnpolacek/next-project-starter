import { Box } from "theme-ui"
import { useState, useEffect } from "react"

export default function TransitionLayout({ children }) {
  const [displayChildren, setDisplayChildren] = useState(children)
  const [transitionStage, setTransitionStage] = useState("fadeOut")
  useEffect(() => {
    setTransitionStage("fadeIn")
  }, [])

  useEffect(() => {
    if (children !== displayChildren) setTransitionStage("fadeOut")
  }, [children, setDisplayChildren, displayChildren])

  return (
    <Box
      onTransitionEnd={() => {
        if (transitionStage === "fadeOut") {
          setDisplayChildren(children)
          setTransitionStage("fadeIn")
        }
      }}
      sx={{
        opacity: transitionStage === "fadeOut" ? 0 : 1,
        transition: ".25s",
        width: "100%",
      }}
    >
      {displayChildren}
    </Box>
  )
}

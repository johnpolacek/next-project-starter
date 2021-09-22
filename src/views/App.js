import { Box, Text } from "theme-ui"
import React, { useContext, useEffect } from "react"
import { AppContext } from "../context/AppContext"
import AppLink from "../ui/AppLink"

const App = ({ mode }) => {
  const { setMode } = useContext(AppContext)

  // useEffect updates the AppContext mode when the url route changes
  // see <Main />
  useEffect(() => {
    setMode(mode)
  }, [mode])

  return (
    <Box
      sx={{
        maxWidth: "1100px",
        mx: "auto",
        textAlign: "center",
        pb: 5,
      }}
    >
      <Text as="h2" sx={{ pb: 4, color: mode ? "white" : "black" }}>
        {mode ? "You selected " + mode.toUpperCase() : "Select a mode"}
      </Text>
      <AppLink
        href={mode === "red" ? "#" : "/app?mode=red"}
        mode={mode}
        disabled={mode === "red"}
        bg="red"
      >
        Red
      </AppLink>
      <AppLink
        href={mode === "green" ? "#" : "/app?mode=green"}
        mode={mode}
        disabled={mode === "green"}
        bg="green"
      >
        Green
      </AppLink>
      <AppLink
        href={mode === "blue" ? "#" : "/app?mode=blue"}
        mode={mode}
        disabled={mode === "blue"}
        bg="blue"
      >
        Blue
      </AppLink>
    </Box>
  )
}

export default App

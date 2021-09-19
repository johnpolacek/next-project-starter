import { Box, Text } from "theme-ui"
import React, { useContext, useEffect } from "react"
import { AppContext } from "../context/AppContext"
import AppLink from "../ui/AppLink"

const App = (props) => {
  const { setMode } = useContext(AppContext)

  // useEffect updates the AppContext mode when the url route changes
  // see <Main />
  useEffect(() => {
    setMode(props.mode)
  }, [props.mode])

  return (
    <Box
      sx={{
        maxWidth: "1100px",
        mx: "auto",
        textAlign: "center",
        pb: 5,
      }}
    >
      <Text as="h2" sx={{ pb: 4, color: props.mode ? "white" : "black" }}>
        {props.mode
          ? "You selected " + props.mode.toUpperCase()
          : "Select a mode"}
      </Text>
      <AppLink
        href={props.mode === "red" ? "/app" : "/app?mode=red"}
        as={props.mode === "red" ? "/app" : "/app/red"}
        mode={props.mode}
        bg="red"
      >
        Red
      </AppLink>
      <AppLink
        href={props.mode === "green" ? "/app" : "/app?mode=green"}
        as={props.mode === "green" ? "/app" : "/app/green"}
        mode={props.mode}
        bg="green"
      >
        Green
      </AppLink>
      <AppLink
        href={props.mode === "blue" ? "/app" : "/app?mode=blue"}
        as={props.mode === "blue" ? "/app" : "/app/blue"}
        mode={props.mode}
        bg="blue"
      >
        Blue
      </AppLink>
    </Box>
  )
}

export default App

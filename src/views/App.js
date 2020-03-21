/** @jsx jsx */
import { jsx } from "theme-ui"
import React, { useContext, useEffect } from "react"
import { AppContext } from "../context/AppContext"
import ButtonLink from "../ui/ButtonLink"

export default props => {
  const { setMode } = useContext(AppContext)

  // useEffect updates the AppContext mode when the url route changes
  // see <Main />
  useEffect(() => {
    setMode(props.mode)
  }, [props.mode])

  return (
    <div
      sx={{
        maxWidth: "1100px",
        mx: "auto",
        textAlign: "center",
        pb: 5,
      }}
    >
      <h2 sx={{ pb: 4, color: props.mode ? "white" : "black" }}>
        {props.mode
          ? "You selected " + props.mode.toUpperCase()
          : "Select a mode"}
      </h2>
      <ButtonLink
        href={props.mode === "red" ? "/app" : "/app?mode=red"}
        as={props.mode === "red" ? "/app" : "/app/red"}
        sx={{
          border: "2px solid",
          borderColor: props.mode === "red" ? "white" : "red",
          bg: "red",
          mx: [2, 3],
          width: [1, "180px"],
          transition: "border-color 200ms linear",
        }}
      >
        Red
      </ButtonLink>
      <ButtonLink
        href={props.mode === "green" ? "/app" : "/app?mode=green"}
        as={props.mode === "green" ? "/app" : "/app/green"}
        sx={{
          border: "2px solid",
          borderColor: props.mode === "green" ? "white" : "green",
          bg: "green",
          mx: [2, 3],
          width: [1, "180px"],
          transition: "border-color 200ms linear",
        }}
      >
        Green
      </ButtonLink>
      <ButtonLink
        href={props.mode === "blue" ? "/app" : "/app?mode=blue"}
        as={props.mode === "blue" ? "/app" : "/app/blue"}
        sx={{
          border: "2px solid",
          borderColor: props.mode === "blue" ? "white" : "blue",
          bg: "blue",
          mx: [2, 3],
          width: [1, "180px"],
          transition: "border-color 200ms linear",
        }}
      >
        Blue
      </ButtonLink>
    </div>
  )
}

/** @jsx jsx */
import { jsx } from "theme-ui"
import React, { useContext, useEffect } from "react"
import { AppContext } from "../context/AppContext"

export default props => {
  const { mode } = useContext(AppContext)

  return (
    <main
      sx={{
        display: "flex",
        flex: 1,
        px: [3, 4],
        pb: 4,
        alignItems: "center",
        bg: mode ? mode : "white",
        transition: "background-color 200ms linear, border-color 200ms linear",
        borderBottom: "solid 1px",
        borderTop: "solid 1px",
        borderColor: mode ? mode : "#EEE",
      }}
      {...props}
    />
  )
}

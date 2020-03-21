import React, { useState, createContext } from "react"

const AppContext = createContext({})

const AppProvider = ({ children }) => {
  const [mode, setMode] = useState(null)

  return (
    <AppContext.Provider
      value={{
        mode,
        setMode,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export { AppContext, AppProvider }

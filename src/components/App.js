import React, { useState } from 'react'
import TodoList from './TodoList'
import Sidebar from './Sidebar'
import GlobalStyles from './GlobalStyles'
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from '../theme'

const App = () => {
  const [darkMode = JSON.parse(localStorage.getItem('darkMode')) || false, updateMode] = useState()

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <div>
        <GlobalStyles />
        <Sidebar
          onModeChange={() => {
            updateMode(!darkMode)
            localStorage.setItem('darkMode', JSON.stringify(!darkMode))
          }}
          darkMode={darkMode}
        />
        <TodoList />
      </div>
    </ThemeProvider>
  )
}

export default App

import React from 'react'
import { Routes, Route } from 'react-router-dom'
import AddDog from './pages/AddDog'
import RemoveDog from './pages/RemoveDog'
import CommentDog from './pages/CommentDog'
import EditDog from './pages/EditDog'
import Home from './pages/Home'
import Login from './pages/Login'
import ViewDog from './pages/ViewDog'
import useMediaQuery from '@mui/material/useMediaQuery'
import { createTheme, ThemeProvider } from '@mui/material/styles'

const App = () => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? 'dark' : 'light',
        },
      }),
    [prefersDarkMode]
  )

  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dog/add" element={<AddDog />} />
        <Route path="/dog/comment/:id" element={<CommentDog />} />
        <Route path="/dog/edit/:id" element={<EditDog />} />
        <Route path="/dog/remove/:id" element={<RemoveDog />} />
        <Route path="/dog/view/:id" element={<ViewDog />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </ThemeProvider>
  )
}

export default App

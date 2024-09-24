import React from 'react'
import AppRoutes from './routes/AppRouter'
import './App.css'
import ThemeProvider from './store/ThemeProvider';

function App() {

  return (
    <>
    <ThemeProvider>
  <AppRoutes></AppRoutes>
  </ThemeProvider>
    </>
  )
}

export default App

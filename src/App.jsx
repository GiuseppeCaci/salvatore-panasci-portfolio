import React from 'react'
import AppRoutes from './routes/AppRouter'
import './assets/style/scss/App.scss'
import './assets/style/css/App.css'
import ThemeProvider from './store/ThemeProvider';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 

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

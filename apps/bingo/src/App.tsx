// import { useState } from 'react'
import { HashRouter, useRoutes } from 'react-router-dom'
import { router } from './router'
import { ThemeProvider } from '@/components/theme-provider'

const Routers = () => useRoutes(router)

function App() {
  // const [count, setCount] = useState(0)

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <HashRouter>
        <Routers />
      </HashRouter>
    </ThemeProvider>
  )
}

export default App

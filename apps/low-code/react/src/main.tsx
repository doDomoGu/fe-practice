import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import '@dodomogu/dev-configs/tailwind.css'

// import { setupElementsComp } from '@/elements'

const root = createRoot(document.getElementById('root')!)

async function run() {
  // await setupElementsComp(root)
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
}

run()

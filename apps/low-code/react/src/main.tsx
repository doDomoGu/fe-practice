import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import '@dodomogu/dev-configs/tailwind.css'

// const root = createRoot(document.getElementById('root')!)

// async function run() {
//   root.render(
//     <React.StrictMode>
//       <App />
//     </React.StrictMode>
//   )
// }
// run()

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

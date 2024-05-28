<<<<<<< HEAD:apps/low-code-react/bak/App.tsx
import { HashRouter, useRoutes } from 'react-router-dom'
import { router } from './router'

const Routers = () => useRoutes(router)

export default function App() {
=======
import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

>>>>>>> parent of 29c469c (react pages):apps/low-code-react/src/App.tsx
  return (
    <div className="text-[30px]">
      <div>React</div>
      <div>{count}</div>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  )
}

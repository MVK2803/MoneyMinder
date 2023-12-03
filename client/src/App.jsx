import { useState } from 'react'
import LandingPage from './pages/LandingPage'
import LoginPage from './pages/LoginPage'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="absolute w-full h-full bg-slate-300  flex items-center justify-center">
      <LoginPage/>
      </div>

    </>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ApiData from './components/ApiData'
import TimeComponent from './components/TimeComponent'

function App() {
  const [run, setRun] = useState(false)

  return (
    <>
     {/* <ApiData /> */}
     {run && <TimeComponent />}
     <button onClick={() => setRun(!run)}>Click</button>
    </>
  )
}

export default App

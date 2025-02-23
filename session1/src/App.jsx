import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sample from './Sample.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div id="sample-animations">
      <h3>Session 4: CSS Animations</h3>
      <Sample id="rotated"></Sample>
    </div>
    </>
  )
}

export default App

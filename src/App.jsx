import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (

    <div className="App">
      <input type="text" placeholder='your text here' />
      <button>Save</button>
    </div>
  )
}

export default App

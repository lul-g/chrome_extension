import { useState } from 'react'
import './App.css'
import Item from './Item'
import uniqid from 'uniqid';

function App() {
  const [list, setList] = useState([])
  const [style, setStyle] = useState({})

  function save() {
    let input = document.getElementById('in')
    if(!input.value) {
      setStyle(() => (
        {
          boxShadow: "0 0 9px 5px #e2125e",
        }))
      return 
    }
    else {
      let val =input.value
      setList(prev => [...prev, val])
      setStyle(() => {
        return {
          boxShadow: "0 0 9px 5px #008087",
        }
      })
      input.value = ''
    }
    
  }
  let count = 0
  return (

    <div className="App">
      <input style={style} id="in" type="text" placeholder='your text here' />
      <button onClick={save}>Save</button>
      {list.map(el => <Item key={uniqid} item={el}/>)}
    </div>
  )
}

export default App

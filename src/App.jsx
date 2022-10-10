import { useEffect, useState } from 'react'
import './App.css'
import Item from './Item'
import uniqid from 'uniqid';

function App() {
  const [list, setList] = useState(
      JSON.parse(localStorage.getItem('arr')) || []
    )
  const [style, setStyle] = useState({})
  const[url, setUrl] = useState('')
  
  let urlSave = false
  function tab() {
    setList(prev => [...prev, window.location.href])
  }
  
  function clear() {
    localStorage.clear()
    setList(() =>  [])
    setStyle(() => {
      return {
        boxShadow: "0 0 9px 5px #008087",
      }
    })
    
  }
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
      setList(prev =>  [...prev, val])
      
      setStyle(() => {
        return {
          boxShadow: "0 0 9px 5px #008087",
        }
      })
      input.value = ''
    }

  }
  let count = 0
  useEffect(() => {
    localStorage.setItem('arr', JSON.stringify(list))
  }, [list])

  return (

    <div className="App">
      <input style={style} id="in" type="text" placeholder='your text here' />
      <div className="btns">
        <button onClick={save}>Save</button>
        <button onClick={tab}>Add tab</button>
        <button onClick={clear}>Clear</button>
      </div>
      {list.map(el => <Item key={++count} item={el}/>)}
    </div>
  )
  
}

export default App

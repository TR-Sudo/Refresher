import { useState } from 'react'
import {Button}  from 'react-bootstrap/Button'// react bootstrap button
import "bootstrap/dist/css/bootstrap.min.css"//needed for css 

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Button p={''}>Send</Button>
    </>
  )
}

export default App

import React from 'react'

function App() {
  const name = 'john';
  const x = 10
  const y = 20
  const names = ['John','Mary','Jacob']

  const loggedin= false;

  const styles = {
    color: 'red',
    fontSize: '55px'
  }



  return (
    <>
    <div className="text-4xl">App</div>
    <p style={styles} >Hello {name}</p>
    <p>
      The sume of {x} and {y} is {x+y}
    </p>

    <ul>
      {names.map((name, index)=> (
        <li key={index}>{name}</li>
      ))}
    </ul>
    {loggedin ? <h1>Hello Member</h1> : <h1>Hello Guest</h1>}

    </>
    
  )
}

export default App
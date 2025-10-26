import { useState } from 'react'
// import './App.css'
import Button from './components/Button'
import NavBar from './components/Navbar/Navbar'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <Button style={{ backgroundColor: "red" }} />
    </>
  )
}

export default App

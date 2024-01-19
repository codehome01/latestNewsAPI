import './App.css'
import Nav from '../src/components/Nav'
import NewsBoard from '../src/components/NewsBoard'
import { useState } from 'react'
function App() {
  
  const [category,setCategory] = useState("general")
  const [country, setCountry]  = useState("us")


  
  return (
    <>
      <div>
        <Nav setCategory={setCategory} setCountry={setCountry}/>
        <NewsBoard  category={category} country={country} setCountry={setCountry}/>
      </div>
    </>
  )
}

export default App

import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Cards from './components/Cards'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <main>
    <div className='p-2'>
      <Navbar/>
      <Hero/>
      <Cards/>
      </div>
      </main>
    </>
  )
}

export default App

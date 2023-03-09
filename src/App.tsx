import { useState } from 'react'
import './App.css'
import Header from './Layouts/Header'
import Main from './Layouts/Main'
import Footer from './Layouts/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default App

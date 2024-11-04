import './App.css'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Cards from './components/Cards'

function App() {

  return (
    <>
      <div className='container'>
        <Navbar />
        <Hero />
        <Cards />
      </div>
    </>
  )
}

export default App

import './App.css'
import NavBar from './components/Navbar/Navbar'
import HeroSection from "./components/HeroSection/HeroSection"
import About from "./components/About/About"
import { Services } from './components/Servicess/Services'

function App() {

  return (
    <>
      <NavBar />
      <HeroSection />
      <About />
      <Services />

    </>
  )
}

export default App

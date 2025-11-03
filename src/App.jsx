import './App.css'
import NavBar from './components/Navbar/Navbar'
import HeroSection from "./components/HeroSection/HeroSection"
import About from "./components/About/About"
import { Services } from './components/Servicess/Services'
import Branding from "./components/Branding/Branding"

function App() {

  return (
    <>
      <NavBar />
      <HeroSection />
      <About />
      <Services />
      <Branding />

    </>
  )
}

export default App

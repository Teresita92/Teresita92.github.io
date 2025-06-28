import { createRoot } from 'react-dom/client'
import './App.css'
import Navbar from "/src/components/Navbar.jsx"
// import MainHero from "/src/components/MainHero.jsx"
// import Slider from "/src/components/Slider.jsx"
// import Trabajos from "/src/components/Trabajos.jsx"
// import Mision from "/src/components/Mision.jsx"
// import Reseñas from "/src/components/Reseñas.jsx"
// import Contacto from "/src/components/Contacto.jsx"
// import Footer from "/src/components/Footer.jsx"

const root = createRoot (document.getElementById("root"))

root.render(
  <>
    <Navbar />  
    {/* <MainHero />  
    <Slider />  
    <Trabajos />  
    <Mision />  
    <Reseñas />  
    <Contacto />  
    <Footer />   */}
  </>
)

export default App
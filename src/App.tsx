import './App.css'
import Services from './components/Services'
import Home from './components/Hero'
import Testimonials from './components/Testimonials'
import Sponsors from './components/Sponsors'
import Footer from './components/Footer'
import About from './components/About'
import '../i18n';

function App() {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden font-cairo">
      <div id="home">
        <Home/>
      </div>
      <div id="testimonials">
        <Testimonials/>
      </div>
      <div id="testimonials">
        <About/>
      </div>
      <div id="services">
        <Services/>
      </div>
      <div id="sponsores">
        <Sponsors/>
      </div>
      <Footer/>
    </div>
  )
}

export default App

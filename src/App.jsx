import Introduction from './components/Category/Introduction.jsx'
import Navbar from './components/Navbar.jsx'
import Parcours from './components/Category/Parcours.jsx'
import './css/app.css'
import Portfolio from './components/Category/Portfolio.jsx'
import Contact from './components/Category/Contact.jsx'

function App() {

  return (
    <>
      <Navbar />
      <Introduction />
      <Parcours />
      <Portfolio />
      <Contact />
    </>
  )
}

export default App
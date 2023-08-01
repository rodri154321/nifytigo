import { Route, Routes } from 'react-router-dom'
import './App.css'
import Collections from './Views/Collections/Collections'
import Home from './Views/Home/Home'
import About from './Views/About/About'
import NavBar from './Components/NavBar/NavBar'
import Footer from './Components/Footer/Footer'
import Contact from './Views/Contact/Contact'

function App() {

  return (
    <>

      <h1>soy app</h1>
      {
        location.pathname !== "/" && <NavBar />
      }

      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route patch="/About" element={<About />} />
        <Route path="/Collections" element={<Collections />} />
        <Route patch="/Contact" element={<Contact />}/>
        {/*
        <Route patch="/Detail" element={<Detail />}/>
        <Route patch="/FormCollection" element={<FormCollection />}/>
        <Route patch="/Admin" element={<Admin />}/>
        <Route patch="/Success" element={<Success />}/>
        <Route patch="/AboutProgrammers" element={<AboutProgrammers />}/>
        <Route patch="/Failure" element={<Failure />}/>*/
        }
      </Routes>

      {
        location.pathname !== "/" && <Footer />
      }
    </>
  )
}

export default App

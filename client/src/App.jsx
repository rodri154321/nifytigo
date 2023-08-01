import { Route, Routes } from 'react-router-dom'
import './App.css'
import Collections from './Views/Collections/Collections'
import Home from './Views/Home/Home'


function App() {

  return (
    <>
      <h1>soy app</h1>
      {
      
        location.pathname !== "/" && <NavBar />
      
      }

      <Routes>
        <Route path="/home" element={<Home />}/>
        <Route patch="/About" element={<About />}/>
        <Route path="/collections" element={<Collections />}/>
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

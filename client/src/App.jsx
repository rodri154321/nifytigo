import { Route, Routes,useLocation } from 'react-router-dom'
import './App.css'

import Collections from './Views/Collections/Collections'
import Home from './Views/Home/Home'
import About from './Views/About/About'
import NavBar from './Components/NavBar/NavBar'
import Footer from './Components/Footer/Footer'
import Contact from './Views/Contact/Contact'


import FormNft from './Views/FormNft/FormNft'

function App() {
  const location = useLocation();
  return (

    <>
      {
        location.pathname !== "/" && <NavBar />
      }

      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Collections" element={<Collections />} />
        <Route path="/Contact" element={<Contact />}/>
        

        <Route path="/FormNft" element={<FormNft />}/>

        {/*
        <Route patch="/Detail" element={<Detail />}/>
        <Route patch="/Admin" element={<Admin />}/>
        <Route patch="/Success" element={<Success />}/>
        <Route patch="/AboutProgrammers" element={<AboutProgrammers />}/>
        <Route patch="/Failure" element={<Failure />}/>
        <Route patch="/TermsOfService" element={<TermsOfService />}/>
        <Route patch="/PrivacyOfPolicy" element={<PrivacyOfPolicy />}/>
        <Route patch="/FrequentQuestions" element={<FrequentQuestions />}/>*/
        }
      </Routes>

      {
        location.pathname !== "/" && <Footer />
      }
    </>
  )
}

export default App

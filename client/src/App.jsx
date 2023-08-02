import { Route, Routes,/*useLocation */} from 'react-router-dom'
import './App.css'

//import Collections from './Views/Collections/Collections'

import Home from './Views/Home/Home'
import Cards from './Components/Cards/Cards'
import Detail from './Views/Detail/Detail'
//import About from './Views/About/About'
//import NavBar from './Components/NavBar/NavBar'
//import Footer from './Components/Footer/Footer'
//import Contact from './Views/Contact/Contact'


import FormImg from './Views/FormImg/FormImg'

function App() {
  /*const location = useLocation();*/

  return (

    <>
      {/*
        location.pathname !== "/" && <NavBar />
        */
      }

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Cards />} />
        <Route path="/detail/:id" element={<Detail />}/>
        
        {/*
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />}/>
<<<<<<< Updated upstream
        

        <Route path="/FormImg" element={<FormImg />}/>

        {/*
        <Route patch="/Detail" element={<Detail />}/>
=======
        <Route patch="/FormCollection" element={<FormCollection />}/>
>>>>>>> Stashed changes
        <Route patch="/Admin" element={<Admin />}/>
        <Route patch="/Success" element={<Success />}/>
        <Route patch="/AboutProgrammers" element={<AboutProgrammers />}/>
        <Route patch="/Failure" element={<Failure />}/>
        <Route patch="/TermsOfService" element={<TermsOfService />}/>
        <Route patch="/PrivacyOfPolicy" element={<PrivacyOfPolicy />}/>
        <Route patch="/FrequentQuestions" element={<FrequentQuestions />}/>*/
        }
      </Routes>

      {/*
        location.pathname !== "/" && <Footer />
        */
      }
    </>
  )
}

export default App

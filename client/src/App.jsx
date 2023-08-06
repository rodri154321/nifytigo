import { Route, Routes,/*useLocation */ } from 'react-router-dom'
import './App.css'
//import Home from './Views/Home/Home'
import videoBackground from './assets/Forms.webm'
import Home from './Views/Home/Home'
import Cards from './Components/Cards/Cards'
import Detail from './Views/Detail/Detail'
import About from './Views/About/About'
import NavBar from './Components/NavBar/NavBar'
import Footer from './Components/Footer/Footer'
import Contact from './Views/Contact/Contact'
//import Login from './Views/Login/Login'
import AboutProgrammers from './Views/AboutProgrammers/AboutPro'
import FormNft from './Views/FormNft/FormNft'
import { PrivacyOfPolicy } from './Views/PrivacyOfPolicy/PrivacyOfPolicy'
import Account from './Views/Account/Account'

function App() {
  /*const location = useLocation();*/

  return (
    <div>
      
      <div id="container"><NavBar /> </div>
      <div id="Routes">
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Cards />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/AboutProgrammers" element={<AboutProgrammers />} />

          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/FormNft" element={<FormNft />} />
          <Route path="/PrivacyOfPolicy" element={<PrivacyOfPolicy />} />

        {/*
          <Route path="/Account" element={<Account />} />



         <Route path='/Login' element={<Login />} /> 

          <Route path="/FormCollection" element={<FormCollection />} />
          <Route path="/Admin" element={<Admin />} />
          <Route path="/Success" element={<Success />} />
          <Route path="/Failure" element={<Failure />} />
          <Route path="/TermsOfService" element={<TermsOfService />} />
          
          <Route path="/FrequentQuestions" element={<FrequentQuestions />} />
          <Route path="/Loader" element={<Loader />} />

  */}

        </Routes>
        
        <div id="containerFooter"><Footer /> </div>
      </div>
      <video id='videoback' muted autoPlay loop> <source src={videoBackground} type="video/webm"/></video>
    </div>
  )
}

export default App


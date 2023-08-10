import { Route, Routes,/*useLocation */ } from 'react-router-dom'
import './App.css'

import videoBackground from './assets/Forms.webm'

import Home from './Views/Home/Home'
import Cards from './Components/Cards/Cards'
import Detail from './Views/Detail/Detail'
import About from './Views/About/About'
import NavBar from './Components/NavBar/NavBar'
import Footer from './Components/Footer/Footer'
import Contact from './Views/Contact/Contact'
// import Login from './Views/Login/Login'
import Login from './Views/LoginAuth0/LoginAuth0'
import AboutProgrammers from './Views/AboutProgrammers/AboutPro'
import FormNft from './Views/FormNft/FormNft'
import Account from './Views/Account/Account'
import PrivacyOfPolicy from './Views/PrivacyOfPolicy/PrivacyOfPolicy';
import { Auth0Provider } from "@auth0/auth0-react";
//import TermsOfService  from './Views/TermsOfService/TermsOfService'
//import FrequentQuestions from './Views/FrequentQuestions/FrequentQuestions'

function App() {
  /*const location = useLocation();*/
  const domain = import.meta.env.REACT_APP_AUTH0_DOMAIN;
  const clientId = import.meta.env.REACT_APP_AUTH0_CLIENT_ID;
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
          <Route path="/Account" element={<Account />} />
          <Route path="/PrivacyOfPolicy" element={<PrivacyOfPolicy />} />
          {/* <Route path='/Login' element={<Login />} /> */}
          <Route path='/Login' element={
            <Auth0Provider
              domain={domain}
              clientId={clientId}
              redirectUri={window.location.origin}
            >
              <Login />
            </Auth0Provider>} />


          {/*
        <Route path="/TermsOfService" element={<TermsOfService />}/>
        <Route path="/FrequentQuestions" element={<FrequentQuestions />}/>
        <Route path="/Admin" element={<Admin />}/>
        <Route path="/Success" element={<Success />}/>
        <Route path="/Failure" element={<Failure />}/>
       */}

        </Routes>

        <div id="containerFooter"><Footer /> </div>

      </div>
      <video id='videoback' muted autoPlay loop> <source src={videoBackground} type="video/webm" /></video>

    </div>
  )
}

export default App
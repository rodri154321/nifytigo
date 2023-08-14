import { Route, Routes,useLocation} from 'react-router-dom'
import './App.css'

import videoBackground from './assets/Forms.webm'

import Home from './Views/Home/Home'
import Cards from './Components/Cards/Cards'
import Detail from './Views/Detail/Detail'
import About from './Views/About/About'
import NavBar from './Components/NavBar/NavBar'
import Footer from './Components/Footer/Footer'
import Account from './Views/Account/Account'
import TopRating from './Views/TopRating/TopRating'
import Purchase from './Views/Purchase/Purchase'
import Profile from './Views/Profile/Profile'
import AboutProgrammers from './Views/AboutProgrammers/AboutPro'
import { TermsOfService } from './Views/TermsOfService/TermsOfService'
import { FrequentQuestions } from './Views/FrequentQuestions/FrequentQuestions'
import {PrivacyOfPolicy} from './Views/PrivacyOfPolicy/PrivacyOfPolicy'
import Login from './Views/Login/Login'

import CarritoLogo from './Components/CarritoLogo/CarritoLogo'
import Favoritos from './Components/Favoritos/Favoritos'
function App() {
  const location = useLocation();
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
          <Route path="/AboutProgrammers" element={<AboutProgrammers />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/Account" element={<Account />} />
          <Route path="/Profile" element={<Profile />} />
           <Route path="/Carritos" element={<Favoritos />} />

       
          
          <Route path="/Account" element={<Account />} />
 
          <Route path="/Profile" element={<Profile />} />
          <Route path="/TopRating" element={<TopRating/>}/>
          <Route path="/Purchase" element={<Purchase/>}/>
          <Route path="/PrivacyOfPolicy" element={<PrivacyOfPolicy />} />
          <Route path="/Profile" element={<Profile/>} />
          <Route path='/Login' element={<Login />} />
          <Route path="/FrequentQuestions" element={<FrequentQuestions />}/>
          <Route path="/TermsOfService" element={<TermsOfService />}/>
          <Route path="/Carritos/:id" element={<Favoritos />}/>
        {/*
        <Route path='/:id' element={<CarritoLogo />}/>
        <Route path="/Admin" element={<Admin />}/>
        <Route path="/Success" element={<Success />}/>
        <Route path="/Failure" element={<Failure />}/>
        <Route path="/FormNft" element={<FormNft />} />
        <Route path="/Contact" element={<Contact />} />
       */}

        </Routes>
        <CarritoLogo/>
        <div id="containerFooter"><Footer /> </div>
      </div>
      <video id='videoback' muted autoPlay loop> <source src={videoBackground} type="video/webm" /></video>
    </div>
  )
}

export default App
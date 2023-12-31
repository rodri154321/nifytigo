
import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';

import videoBackground from './assets/Forms.webm';

import Home from './Views/Home/Home';
import Cards from './Components/Cards/Cards';
import Detail from './Views/Detail/Detail';
import About from './Views/About/About';
import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer';
import Account from './Views/Account/Account';
import TopRating from './Views/TopRating/TopRating';
import Purchase from './Views/Purchase/Purchase';
import Profile from './Views/Profile/Profile';
import AboutProgrammers from './Views/AboutProgrammers/AboutPro';
import UpdateUser from './Components/UpdateUser/UpdateUser';
import Bought from './Components/Bought/Bought';

import Wallet from './Views/Wallet/Wallet';
import { TermsOfService } from './Views/TermsOfService/TermsOfService';
import { FrequentQuestions } from './Views/FrequentQuestions/FrequentQuestions';
import { PrivacyOfPolicy } from './Views/PrivacyOfPolicy/PrivacyOfPolicy';
import Login from './Views/Login/Login';
import Carrito from './Views/Carrito/Carrito';
import CarritoLogo from './Components/CarritoLogo/CarritoLogo';
import Favoritos from './Components/Favoritos/Favoritos';
import Admin from './Views/Admin/Admin';
import NFTsView from './Views/Admin/NFTsView';
import UsersView from './Views/Admin/UsersView';
import DashboardView from './Views/Dashboard/DashboardView';


function App() {
  const location = useLocation();
  const domain = import.meta.env.REACT_APP_AUTH0_DOMAIN;
  const clientId = import.meta.env.REACT_APP_AUTH0_CLIENT_ID;

  const shouldRenderNavBar = location.pathname !== '/Login';
  return (
    <div>
      <div id="container"><NavBar /> </div>
      <div id="Routes">
        <Routes>
        <Route path="/UpdateUser" element={<UpdateUser />} />
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Cards />} />
          <Route path="/About" element={<About />} />
          <Route path="/AboutProgrammers" element={<AboutProgrammers />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/FrequentQuestions" element={<FrequentQuestions />} />
          <Route path="/Account" element={<Account />} />
          <Route path='/' element={<Carrito /> }/>
          <Route path="/Profile" element={<Profile />} />
          <Route path="/TopRating" element={<TopRating/>}/>
          <Route path="/Purchase" element={<Purchase/>}/>
          <Route path="/PrivacyOfPolicy" element={<PrivacyOfPolicy />} />
          <Route path='/TermsOfService' element={<TermsOfService/>}/>
          <Route path='/Carritos/:id' element={<Favoritos />} /> 
          <Route path='/Login' element={<Login />} /> 
          <Route path="/Admin" element={<Admin />} />
          <Route path="/Admin/NFTsView" element={<NFTsView />} />
          <Route path="/Admin/UsersView" element={<UsersView />} />
          <Route path="/Admin/DashboardView" element={<DashboardView />} />
          <Route path="/Profile" element={<Bought />} />
          <Route path="/Admin/UsersView" element={<UsersView />} />
          <Route path='/Admin/DashboardView' element={<DashboardView/>}/>
          <Route path='/Wallet' element={<Wallet/>}/>
          {/* <Route path="/FormCollection" element={<FormCollection />} */}
          {/* <Route path="/Admin" element={<Admin />} /> */}
          {/* <Route path="/Success" element={<Success />} /> */}
          {/* <Route path="/Failure" element={<Failure />} /> */}
          {/* <Route path="/Loader" element={<Loader />} /> */}


        </Routes>
        <CarritoLogo/>
        <div id="containerFooter"><Footer /> </div>
      </div>
      <video id='videoback' muted autoPlay loop> <source src={videoBackground} type="video/webm" /></video>
    </div>
  )
}

export default App





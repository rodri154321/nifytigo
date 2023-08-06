import { Route, Routes,/*useLocation */} from 'react-router-dom'
import './App.css'
import Home from './Views/Home/Home'
import Cards from './Components/Cards/Cards'
import Detail from './Views/Detail/Detail'
import About from './Views/About/About'
import NavBar from './Components/NavBar/NavBar'
import Footer from './Components/Footer/Footer'
// import Contact from './Views/Contact/Contact'
import videoBackground from './assets/background_video/Forms.webm'

//import FormImg from './Views/FormImg/FormImg'

function App() {
  /*const location = useLocation();*/

  return (
    <>
      <div id="container"><NavBar /> </div>
      <div id="Routes">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Cards />} />
        <Route path="/About" element={<About />} />
        {/* <Route path="/Contact" element={<Contact />}/> */}
        {/* <Route path="/AboutProgrammers" element={<AboutProgrammers />}/> */}
        {/* <Route path='/Login' element= {<Login />}/>        */}
        <Route path="/Detail" element={<Detail />}/>
        {/* <Route path="/FormNft" element={<FormNft />}/> */}
        
        {/*
        <Route path="/FormCollection" element={<FormCollection />}/>
        <Route path="/Admin" element={<Admin />}/>
        <Route path="/Success" element={<Success />}/>
        <Route path="/Failure" element={<Failure />}/>
        <Route path="/TermsOfService" element={<TermsOfService />}/>
        <Route path="/PrivacyOfPolicy" element={<PrivacyOfPolicy />}/>
        <Route path="/FrequentQuestions" element={<FrequentQuestions />}/>
        <Route path="/Loader" element={<Loader />}/>*/
        }
      </Routes>
      </div>
      {
        location.pathname === "/" && <Footer />
        
      }
      <video id='videoBack' muted autoPlay loop> <source src={videoBackground} type="video/webm"/></video>
    </>
  )
}

export default App

